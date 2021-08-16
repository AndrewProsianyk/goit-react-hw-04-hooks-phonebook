import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './ContactForm/ContactForm';

import Filter from './Filter/Filter';

import ContactList from './ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }
    if (!this.state.contacts.map(contact => contact.name).includes(name)) {

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
      }))
    } else {
      alert(`${name} is already in contacs.`)
    }
  };
  

  

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id!==id)
    }))
  }

  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    )

  };
}

export default App;

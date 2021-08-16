(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__1cSt8",input:"Filter_input__3xIXs"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2NyXH",input:"ContactForm_input__2GMnw",button:"ContactForm_button__2CDqd",label:"ContactForm_label__2G_ok"}},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),o=n.n(s),r=n(14),i=n(5),l=n(6),u=n(8),m=n(7),b=n(12),d=n.n(b),h=n(13),j=n(2),p=n.n(j),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.onSubmitForm=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.onSubmitForm,children:[Object(f.jsxs)("label",{className:p.a.label,children:[Object(f.jsx)("span",{className:p.a.name,children:"Name"}),Object(f.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.inputChange,value:this.state.name})]}),Object(f.jsxs)("label",{className:p.a.label,children:[Object(f.jsx)("span",{children:"Number"}),Object(f.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.inputChange})]}),Object(f.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(10),_=n.n(C),x=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:_.a.label,children:[Object(f.jsx)("span",{children:"Let's find somebody"}),Object(f.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})},v=n(3),g=n.n(v),N=function(t){var e=t.contacts,n=t.onDeleteContact;return e.length>0?Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){return Object(f.jsxs)("li",{className:g.a.listItem,children:[Object(f.jsxs)("span",{className:g.a.name,children:[t.name,":"]}),Object(f.jsx)("span",{className:g.a.number,children:t.number}),Object(f.jsx)("button",{className:g.a.button,onClick:function(){return n(t.id)},children:"\u0445"})]},t.id)}))})}):Object(f.jsx)("p",{children:"No contacts yet."})},y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:d.a.generate(),name:e,number:n};t.state.contacts.map((function(t){return t.name})).includes(e)?alert("".concat(e," is already in contacs.")):t.setState((function(t){return{contacts:[a].concat(Object(r.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(x,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(N,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__25q-y",listItem:"ContactList_listItem__2A8Mq",button:"ContactList_button__VZnpb",number:"ContactList_number__1sCL2",name:"ContactList_name__3L0tr"}}},[[28,1,2]]]);
//# sourceMappingURL=main.a3f4b295.chunk.js.map
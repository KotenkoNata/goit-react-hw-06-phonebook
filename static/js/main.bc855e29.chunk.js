(this["webpackJsonpgoit-react-pg"]=this["webpackJsonpgoit-react-pg"]||[]).push([[0],{19:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK"}},20:function(t,e,n){t.exports={section:"Section_section__Ap5Zy"}},21:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},24:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},49:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=n(10),s=n(11),u=n(14),l=n(12),b=n(20),j=n.n(b),d=n(21),f=n.n(d),m=n(1),h=function(t){var e=t.children;return Object(m.jsx)("div",{className:f.a.Container,children:e})},O=function(t){var e=t.children;return Object(m.jsx)("section",{className:j.a.section,children:Object(m.jsx)(h,{children:e})})},p=n(5),x=n(3),C=n(23),g=n.n(C),v={addContact:Object(x.b)("contacts/Add",(function(t,e){return{payload:{id:g.a.generate(),name:t,number:e}}})),deleteContact:Object(x.b)("contacts/Delete"),changeFilter:Object(x.b)("contacts/Filter")},_=n(7),y=n.n(_),N=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(p.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:N(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(v.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:y.a.contactList,children:e.length?e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(m.jsxs)("li",{className:y.a.contactItem,children:[c," : ",a,Object(m.jsx)("button",{type:"button",className:y.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)})):Object(m.jsx)("li",{className:y.a.notification,children:"No contact found"})})})),F=n(24),L=n.n(F),S=function(t){var e=t.filter,n=t.onChange;return Object(m.jsxs)("label",{className:L.a.filter,children:["Find contacts by name"," ",Object(m.jsx)("input",{type:"text",filter:e,onChange:n})]})};S.defaultProps={filter:""};var A,w=Object(p.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(v.changeFilter(e.target.value))}}}))(S),D=n(6),I=n(19),E=n.n(I),M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(D.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;if(c){var r=t.props.state.contacts.items.find((function(t){return t.name===c}));r?alert("".concat(r.name," is already in contacts.")):(t.props.onSubmit(c,a),t.reset())}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:E.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleChange,required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"number",name:"number",value:this.state.number,onChange:this.handleChange,required:!0})]}),Object(m.jsx)("button",{type:"submit",className:E.a.button,children:"Add contact"})]})}}]),n}(c.Component),Q=Object(p.b)((function(t){return{state:t}}),(function(t){return{onSubmit:function(e,n){return t(v.addContact(e,n))}}}))(M),q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(O,{children:[Object(m.jsx)("h1",{children:"PhoneBook"}),Object(m.jsx)(Q,{})]}),Object(m.jsxs)(O,{children:[Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(w,{}),Object(m.jsx)(k,{})]})]})}}]),n}(c.Component),z=(n(46),n(13)),B=n(2),J=Object(x.c)([],(A={},Object(D.a)(A,v.addContact,(function(t,e){return[e.payload].concat(Object(z.a)(t))})),Object(D.a)(A,v.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),P=Object(x.c)("",Object(D.a)({},v.changeFilter,(function(t,e){return e.payload}))),T=Object(B.c)({items:J,filter:P}),Z=n(4),G=n(25),H=n.n(G),K=Object(z.a)(Object(x.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),R={key:"phonebook",storage:H.a,blacklist:["filter"]},U=Object(x.a)({reducer:{contacts:Object(Z.g)(R,T)},middleware:K,devTools:!1}),V=Object(Z.h)(U),W=n(26);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p.a,{store:U,children:Object(m.jsx)(W.a,{loading:"Loading...",persistor:V,children:Object(m.jsx)(q,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactList:"ContactList_contactList__3MzlG",contactItem:"ContactList_contactItem__EQAbQ",button:"ContactList_button__1RuFy"}}},[[49,1,2]]]);
//# sourceMappingURL=main.bc855e29.chunk.js.map
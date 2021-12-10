(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(7),r=n.n(o),i=(n(29),n(12)),l=n(5),s=(n(30),n(4)),a=n(3),d=function(e){var t=e.toggleNestModal,n=e.nestModal,c=e.category,o=e.setUnstart,r=e.setInProgress,i=e.setComplete,l=e.setOverdue,d=e.setUngroup;return Object(a.jsxs)(s.g,{toggle:t,isOpen:n,children:[Object(a.jsx)(s.j,{children:"Category"}),Object(a.jsxs)(s.b,{children:[Object(a.jsx)(s.a,{color:"primary",onClick:o,children:"Unstart"}),Object(a.jsx)(s.a,{color:"primary",onClick:r,children:"In progress"}),Object(a.jsx)(s.a,{color:"primary",onClick:i,children:"Complete"}),Object(a.jsx)(s.a,{color:"primary",onClick:l,children:"Overdue"}),Object(a.jsx)(s.a,{color:"primary",onClick:d,children:"Un-grouped"})]}),Object(a.jsxs)("p",{children:["Selected:",c]}),Object(a.jsxs)(s.i,{children:[Object(a.jsx)(s.a,{color:"primary",onClick:t,children:"Done"})," ",Object(a.jsx)(s.a,{onClick:t,children:"Cancel"})]})]})},u=function(e){var t=e.TodoItem.id,n=e.TodoItem.urgent,o=Object(c.useState)(e.TodoItem.title),r=Object(l.a)(o,2),i=r[0],u=r[1],j=Object(c.useState)(e.TodoItem.description),b=Object(l.a)(j,2),g=b[0],f=b[1],O=Object(c.useState)(!1),h=Object(l.a)(O,2),m=h[0],p=h[1],x=Object(c.useState)(e.TodoItem.category),C=Object(l.a)(x,2),y=C[0],v=C[1],k={id:t,title:i,description:g,category:y,urgent:n},N=function(){p(!m)};return Object(a.jsx)("div",{children:Object(a.jsxs)(s.g,{isOpen:e.modal,children:[Object(a.jsx)(s.j,{toggle:e.toggleModal,className:"form-group",children:"Update Task"}),Object(a.jsxs)(s.h,{className:"form-group",children:[Object(a.jsxs)("div",{children:["Title: ",Object(a.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)},className:"form-control"})]}),"Description: ",Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{row:"6",value:g,onChange:function(e){return f(e.target.value)},className:"form-control"})]}),Object(a.jsxs)(s.i,{children:[Object(a.jsx)(s.a,{color:"success",onClick:N,children:y}),Object(a.jsx)(d,{toggleNestModal:N,nestModal:m,category:y,setUnstart:function(){return v("Unstart")},setInProgress:function(){return v("In progress")},setComplete:function(){return v("Complete")},setOverdue:function(){return v("Overdue")},setUngroup:function(){return v("Un-grouped")}}),Object(a.jsx)(s.a,{color:"primary",onClick:function(n){n.preventDefault(),e.onUpdate(t,k),e.toggleModal()},children:"Update"})," ",Object(a.jsx)(s.a,{onClick:e.toggleModal,children:"Cancel"})]})]})})},j=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],r=n[1];return Object(a.jsxs)(s.c,{className:"todoItem",style:e.Topstyle,children:[Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.f,{tag:"h4",className:"font-link-2",autoCapitalize:"true",children:e.item.title}),Object(a.jsx)(s.e,{className:"font-link-3",children:e.item.description}),Object(a.jsxs)(s.a,{color:"",className:"position-absolute bottom-0 end-0",children:[Object(a.jsx)("i",{className:"edit button pull-right",class:"bi bi-pencil-square",onClick:function(){return r(!0)}}),Object(a.jsx)("i",{className:"urgent button pull-right",onClick:e.handleUrgency,class:e.item.urgent?"bi bi-flag-fill":"bi bi-flag"}),Object(a.jsx)("i",{className:"delete button pull-right",onClick:e.handleDelete,class:"bi bi-trash-fill"})]})]}),Object(a.jsx)(u,{modal:o,toggleModal:function(){r(!o)},TodoItem:e.item,onUpdate:e.onUpdate})]})},b=function(e){return Object(a.jsxs)("header",{style:{backgroundColor:"rgb(252, 198, 3)"},className:"App-header text-center",children:[Object(a.jsx)("h2",{className:"font-link",style:{color:"#001219"},children:"To-do List"}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{className:"btn btn-dark font-link",onClick:e.handleUrgent,children:[e.urgent?"Show All":"Show Urgent","  ",Object(a.jsx)("i",{className:"urgent button",onClick:e.handleUrgent,class:e.urgent?"bi bi-flag-fill":"bi bi-flag"})]})]})},g=function(e){var t=e.modal,n=e.toggleModal,c=e.addTodo,o=e.newTitle,r=e.newDescription,i=e.urgent,l=e.category,d=e.setCategoryFunc,u=e.onChangeTitle,j=e.onChangeDescription;return Object(a.jsx)("div",{children:Object(a.jsxs)(s.g,{isOpen:t,urgent:i,children:[Object(a.jsx)(s.j,{toggle:n,className:"form-group",children:"Create Task"}),Object(a.jsxs)(s.h,{className:"form-group",children:[Object(a.jsxs)("div",{children:["Title: ",Object(a.jsx)("input",{value:o,onChange:u,className:"form-control"})]}),"Description: ",Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{row:"6",value:r,onChange:j,className:"form-control"})]}),Object(a.jsxs)(s.i,{children:[Object(a.jsx)(s.a,{color:"success",onClick:d,children:l}),Object(a.jsx)(s.a,{color:"primary",onClick:c,children:"Create"})," ",Object(a.jsx)(s.a,{onClick:n,children:"Cancel"})]})]})})},f=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],r=n[1];return Object(a.jsxs)("div",{style:{backgroundColor:"rgb(252, 198, 3)",shadow:"#a5a5a5"},className:"todoForm justify-content-center",children:[Object(a.jsx)("div",{style:{paddingBottom:10,paddingLeft:5,paddingRight:5},className:"add",children:Object(a.jsxs)("button",{className:"btn btn-dark font-link",type:"submit",onClick:function(){return r(!0)},children:["Create Task ",Object(a.jsx)("i",{class:"bi bi-plus-lg"})]})}),Object(a.jsx)(g,{modal:o,toggleModal:function(){r(!o)},addTodo:e.addTodo,newTitle:e.newTodoTitle,onChangeTitle:e.onChangeTitle,newDescription:e.newDescription,onChangeDescription:e.onChangeDescription,category:e.category,setCategoryFunc:e.setCategoryFunc})]})},O=n(8),h=n.n(O);var m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),u=s[0],g=s[1],O=Object(c.useState)(""),m=Object(l.a)(O,2),p=m[0],x=m[1],C=Object(c.useState)("Un-grouped"),y=Object(l.a)(C,2),v=y[0],k=y[1],N=Object(c.useState)(!1),U=Object(l.a)(N,2),T=U[0],w=U[1],D=Object(c.useState)(!1),I=Object(l.a)(D,2),S=I[0],M=I[1];Object(c.useEffect)((function(){h.a.get("/api/todoList").then((function(e){return e.data})).then((function(e){console.log("promise fulfilled"),g(e)}))}),[]);var A=function(e){var t=u.filter((function(t){return t.id===e}))[0];window.confirm("Do you confirm to delete this todo item?")?h.a.delete("/api/todoList/".concat(t.id)).then((function(){return g(u.filter((function(t){return t.id!==e})))})):alert("this item will not be deleted!")},F=function(e){var t=u.filter((function(t){return t.id===e}))[0],n=Object(i.a)(Object(i.a)({},t),{},{urgent:!t.urgent});h.a.put("/api/todoList/".concat(e),n).then((function(t){g(u.map((function(n){return n.id===e?t.data:n})))})).catch((function(e){return console.log(e)}))},L=function(e,t){h.a.put("/api/todoList/".concat(e),t).then((function(t){g(u.map((function(n){return n.id===e?t.data:n})))})).catch((function(e){return console.log(e)}))},P=S?u.filter((function(e){return!0===e.urgent})):u,B=P.filter((function(e){return"Unstart"===e.category})),E=P.filter((function(e){return"In progress"===e.category})),J=P.filter((function(e){return"Complete"===e.category})),q=P.filter((function(e){return"Overdue"===e.category})),z=P.filter((function(e){return"Un-grouped"===e.category}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{className:"header text-center",urgent:S,handleUrgent:function(){M(!S)}}),Object(a.jsx)(f,{className:"text-center",newTodoTitle:n,onChangeTitle:function(e){o(e.target.value)},addTodo:function(e){e.preventDefault(),console.log("A new todo is added!");var t,c={title:(t=n,t.charAt(0).toUpperCase()+t.slice(1)),description:p,urgent:!1,category:v};h.a.post("/api/todoList",c).then((function(e){g(u.concat(e.data))})),o(""),x(""),k("Un-grouped")},newDescription:p,onChangeDescription:function(e){x(e.target.value)},category:v,setCategoryFunc:function(){w(!T)}}),Object(a.jsxs)("div",{className:"todo-wrapper container-fluid",children:[Object(a.jsxs)("div",{className:"row justify-content-evenly align-items-start gx-0",children:[Object(a.jsxs)("div",{className:"todo-column-1 col-sm-12 col-md-5 col-lg-2 order-lg-1",children:[Object(a.jsx)("h5",{className:"font-link text-center",children:"Unstart "}),B.map((function(e){return Object(a.jsx)(j,{item:e,handleUrgency:function(){return F(e.id)},handleDelete:function(){return A(e.id)},onUpdate:L,Topstyle:{"background-color":"#006d77"}},e.id)}))]}),Object(a.jsxs)("div",{className:"todo-column-2 col-sm-12 col-md-5 col-lg-2 order-lg-2",children:[Object(a.jsx)("h5",{className:"font-link text-center",children:"In progress "}),E.map((function(e){return Object(a.jsx)(j,{item:e,handleUrgency:function(){return F(e.id)},handleDelete:function(){return A(e.id)},onUpdate:L,Topstyle:{"background-color":"#2A9D8F"}},e.id)}))]}),Object(a.jsxs)("div",{className:"todo-column-3 col-sm-12 col-md-5 col-lg-2 order-lg-3",children:[Object(a.jsx)("h5",{className:"font-link text-center",children:"Complete "}),J.map((function(e){return Object(a.jsx)(j,{item:e,handleUrgency:function(){return F(e.id)},handleDelete:function(){return A(e.id)},onUpdate:L,Topstyle:{"background-color":"#ffb703"}},e.id)}))]}),Object(a.jsxs)("div",{className:"todo-column-4 col-sm-12 col-md-5 col-lg-2 order-lg-4",children:[Object(a.jsx)("h5",{className:"font-link text-center",children:"Overdue "}),q.map((function(e){return Object(a.jsx)(j,{item:e,handleUrgency:function(){return F(e.id)},handleDelete:function(){return A(e.id)},onUpdate:L,Topstyle:{"background-color":"#F4A261"}},e.id)}))]}),Object(a.jsxs)("div",{className:"todo-column-5 col-sm-12 col-md-5 col-lg-2 order-lg-5",children:[Object(a.jsx)("h5",{className:"font-link text-center",children:"Un-grouped "}),z.map((function(e){return Object(a.jsx)(j,{item:e,handleUrgency:function(){return F(e.id)},handleDelete:function(){return A(e.id)},onUpdate:L,Topstyle:{"background-color":"#e76f51"}},e.id)}))]})]}),Object(a.jsx)(d,{toggleNestModal:function(){w(!T)},nestModal:T,category:v,setUnstart:function(){return k("Unstart")},setInProgress:function(){return k("In progress")},setComplete:function(){return k("Complete")},setOverdue:function(){return k("Overdue")},setUngroup:function(){return k("Un-grouped")}})]})]})};n(52),n(53);r.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.2fbc20ef.chunk.js.map
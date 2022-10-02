(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(7),r=n.n(o),i=(n(29),n(12)),a=n(5),l=(n(30),n(4)),s=n(3),d=function(e){var t=e.toggleNestModal,n=e.nestModal,c=e.category,o=e.setUnstart,r=e.setInProgress,i=e.setComplete,a=e.setOverdue,d=e.setUngroup;return Object(s.jsxs)(l.g,{toggle:t,isOpen:n,children:[Object(s.jsx)(l.j,{children:"Category"}),Object(s.jsxs)(l.b,{children:[Object(s.jsx)(l.a,{color:"primary",onClick:o,children:"Unstart"}),Object(s.jsx)(l.a,{color:"primary",onClick:r,children:"In progress"}),Object(s.jsx)(l.a,{color:"primary",onClick:i,children:"Complete"}),Object(s.jsx)(l.a,{color:"primary",onClick:a,children:"Overdue"}),Object(s.jsx)(l.a,{color:"primary",onClick:d,children:"Un-grouped"})]}),Object(s.jsxs)("p",{children:["Selected:",c]}),Object(s.jsxs)(l.i,{children:[Object(s.jsx)(l.a,{color:"primary",onClick:t,children:"Done"})," ",Object(s.jsx)(l.a,{onClick:t,children:"Cancel"})]})]})},u=function(e){var t=e.TodoItem.id,n=e.TodoItem.urgent,o=Object(c.useState)(e.TodoItem.title),r=Object(a.a)(o,2),i=r[0],u=r[1],j=Object(c.useState)(e.TodoItem.description),g=Object(a.a)(j,2),b=g[0],f=g[1],m=Object(c.useState)(!1),O=Object(a.a)(m,2),h=O[0],p=O[1],x=Object(c.useState)(e.TodoItem.category),C=Object(a.a)(x,2),y=C[0],v=C[1],k={id:t,title:i,description:b,category:y,urgent:n},N=function(){p(!h)};return Object(s.jsx)("div",{children:Object(s.jsxs)(l.g,{isOpen:e.modal,children:[Object(s.jsx)(l.j,{toggle:e.toggleModal,className:"form-group",children:"Update Task"}),Object(s.jsxs)(l.h,{className:"form-group",children:[Object(s.jsxs)("div",{children:["Title: ",Object(s.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)},className:"form-control"})]}),"Description: ",Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{row:"6",value:b,onChange:function(e){return f(e.target.value)},className:"form-control"})]}),Object(s.jsxs)(l.i,{children:[Object(s.jsx)(l.a,{color:"success",onClick:N,children:y}),Object(s.jsx)(d,{toggleNestModal:N,nestModal:h,category:y,setUnstart:function(){return v("Unstart")},setInProgress:function(){return v("In progress")},setComplete:function(){return v("Complete")},setOverdue:function(){return v("Overdue")},setUngroup:function(){return v("Un-grouped")}}),Object(s.jsx)(l.a,{color:"primary",onClick:function(n){n.preventDefault(),e.onUpdate(t,k),e.toggleModal()},children:"Update"})," ",Object(s.jsx)(l.a,{onClick:e.toggleModal,children:"Cancel"})]})]})})},j=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),o=n[0],r=n[1];return Object(s.jsxs)(l.c,{className:"todoItem",style:e.Topstyle,children:[Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.f,{tag:"h4",className:"font-link-2",autoCapitalize:"true",children:e.item.title}),Object(s.jsx)(l.e,{className:"font-link-3",children:e.item.description}),Object(s.jsxs)(l.a,{color:"",className:"position-absolute bottom-0 end-0",children:[Object(s.jsx)("i",{className:"bi bi-pencil-square",onClick:function(){return r(!0)}}),Object(s.jsx)("i",{onClick:e.handleUrgency,className:e.item.urgent?"bi bi-flag-fill":"bi bi-flag"}),Object(s.jsx)("i",{onClick:e.handleDelete,className:"bi bi-trash-fill"})]})]}),Object(s.jsx)(u,{modal:o,toggleModal:function(){r(!o)},TodoItem:e.item,onUpdate:e.onUpdate})]})},g=function(e){return Object(s.jsxs)("header",{style:{backgroundColor:"rgb(252, 198, 3)"},className:"App-header text-center",children:[Object(s.jsx)("h2",{className:"font-link",style:{color:"#001219"},children:"To-do List"}),Object(s.jsx)("br",{}),Object(s.jsxs)("button",{className:"btn btn-dark font-link",onClick:e.handleUrgent,children:[e.urgent?"Show All":"Show Urgent","  ",Object(s.jsx)("i",{onClick:e.handleUrgent,className:e.urgent?"bi bi-flag-fill":"bi bi-flag"})]})]})},b=function(e){var t=e.modal,n=e.toggleModal,c=e.addTodo,o=e.newTitle,r=e.newDescription,i=e.urgent,a=e.category,d=e.setCategoryFunc,u=e.onChangeTitle,j=e.onChangeDescription;return Object(s.jsx)("div",{children:Object(s.jsxs)(l.g,{isOpen:t,urgent:i,children:[Object(s.jsx)(l.j,{toggle:n,className:"form-group",children:"Create Task"}),Object(s.jsxs)(l.h,{className:"form-group",children:[Object(s.jsxs)("div",{children:["Title: ",Object(s.jsx)("input",{value:o,onChange:u,className:"form-control"})]}),"Description: ",Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{row:"6",value:r,onChange:j,className:"form-control"})]}),Object(s.jsxs)(l.i,{children:[Object(s.jsx)(l.a,{color:"success",onClick:d,children:a}),Object(s.jsx)(l.a,{color:"primary",onClick:c,children:"Create"})," ",Object(s.jsx)(l.a,{onClick:n,children:"Cancel"})]})]})})},f=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),o=n[0],r=n[1];return Object(s.jsxs)("div",{style:{backgroundColor:"rgb(252, 198, 3)",shadow:"#a5a5a5"},className:"todoForm justify-content-center",children:[Object(s.jsx)("div",{style:{paddingBottom:10,paddingLeft:5,paddingRight:5},className:"add",children:Object(s.jsxs)("button",{className:"btn btn-dark font-link",type:"submit",onClick:function(){return r(!0)},children:["Create Task ",Object(s.jsx)("i",{className:"bi bi-plus-lg"})]})}),Object(s.jsx)(b,{modal:o,toggleModal:function(){r(!o)},addTodo:e.addTodo,newTitle:e.newTodoTitle,onChangeTitle:e.onChangeTitle,newDescription:e.newDescription,onChangeDescription:e.onChangeDescription,category:e.category,setCategoryFunc:e.setCategoryFunc})]})},m=n(8),O=n.n(m),h="api/todoList",p={getAll:function(){return O.a.get(h).then((function(e){return e.data}))},post:function(e){return O.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return O.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return O.a.delete("".concat(h,"/").concat(e.id)).then((function(e){return e.data}))}};var x=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),l=Object(a.a)(r,2),u=l[0],b=l[1],m=Object(c.useState)(""),h=Object(a.a)(m,2),x=h[0],C=h[1],y=Object(c.useState)("Un-grouped"),v=Object(a.a)(y,2),k=v[0],N=v[1],U=Object(c.useState)(!1),T=Object(a.a)(U,2),D=T[0],w=T[1],I=Object(c.useState)(!1),S=Object(a.a)(I,2),M=S[0],A=S[1],F="api/todoList";Object(c.useEffect)((function(){p.getAll().then((function(e){return b(e)})),console.log("promise fulfilled"),console.log("production")}),[]);var L=function(e){var t=u.filter((function(t){return t.id===e}))[0];window.confirm("Do you confirm to delete this todo item?")&&p.remove(t).then((function(){return b(u.filter((function(t){return t.id!==e})))}))},P=function(e){var t=u.find((function(t){return t.id===e})),n=Object(i.a)(Object(i.a)({},t),{},{urgent:!t.urgent});O.a.put("".concat(F,"/").concat(e),n).then((function(t){b(u.map((function(n){return n.id===e?t.data:n})))})).catch((function(e){return console.log(e)}))},B=function(e,t){O.a.put("".concat(F,"/").concat(e),t).then((function(t){b(u.map((function(n){return n.id===e?t.data:n})))})).catch((function(e){return console.log(e)}))},E=M?u.filter((function(e){return!0===e.urgent})):u,J=E.filter((function(e){return"Unstart"===e.category})),q=E.filter((function(e){return"In progress"===e.category})),z=E.filter((function(e){return"Complete"===e.category})),R=E.filter((function(e){return"Overdue"===e.category})),G=E.filter((function(e){return"Un-grouped"===e.category}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(g,{className:"header text-center",urgent:M,handleUrgent:function(){A(!M)}}),Object(s.jsx)(f,{className:"text-center",newTodoTitle:n,onChangeTitle:function(e){o(e.target.value)},addTodo:function(e){e.preventDefault(),console.log("A new todo is added!");var t,c={title:(t=n,t.charAt(0).toUpperCase()+t.slice(1)),description:x,urgent:!1,category:k};O.a.post(F,c).then((function(e){b(u.concat(e.data))})),o(""),C(""),N("Un-grouped")},newDescription:x,onChangeDescription:function(e){C(e.target.value)},category:k,setCategoryFunc:function(){w(!D)}}),Object(s.jsxs)("div",{className:"todo-wrapper container-fluid",children:[Object(s.jsxs)("div",{className:"row justify-content-evenly align-items-start gx-0",children:[Object(s.jsxs)("div",{className:"todo-column-1 col-sm-12 col-md-5 col-lg-2 order-lg-1",children:[Object(s.jsx)("h5",{className:"font-link text-center",children:"Unstart "}),J.map((function(e){return Object(s.jsx)(j,{item:e,handleUrgency:function(){return P(e.id)},handleDelete:function(){return L(e.id)},onUpdate:B,Topstyle:{backgroundColor:"#006d77"}},e.id)}))]}),Object(s.jsxs)("div",{className:"todo-column-2 col-sm-12 col-md-5 col-lg-2 order-lg-2",children:[Object(s.jsx)("h5",{className:"font-link text-center",children:"In progress "}),q.map((function(e){return Object(s.jsx)(j,{item:e,handleUrgency:function(){return P(e.id)},handleDelete:function(){return L(e.id)},onUpdate:B,Topstyle:{backgroundColor:"#2A9D8F"}},e.id)}))]}),Object(s.jsxs)("div",{className:"todo-column-3 col-sm-12 col-md-5 col-lg-2 order-lg-3",children:[Object(s.jsx)("h5",{className:"font-link text-center",children:"Complete "}),z.map((function(e){return Object(s.jsx)(j,{item:e,handleUrgency:function(){return P(e.id)},handleDelete:function(){return L(e.id)},onUpdate:B,Topstyle:{backgroundColor:"#ffb703"}},e.id)}))]}),Object(s.jsxs)("div",{className:"todo-column-4 col-sm-12 col-md-5 col-lg-2 order-lg-4",children:[Object(s.jsx)("h5",{className:"font-link text-center",children:"Overdue "}),R.map((function(e){return Object(s.jsx)(j,{item:e,handleUrgency:function(){return P(e.id)},handleDelete:function(){return L(e.id)},onUpdate:B,Topstyle:{backgroundColor:"#F4A261"}},e.id)}))]}),Object(s.jsxs)("div",{className:"todo-column-5 col-sm-12 col-md-5 col-lg-2 order-lg-5",children:[Object(s.jsx)("h5",{className:"font-link text-center",children:"Un-grouped "}),G.map((function(e){return Object(s.jsx)(j,{item:e,handleUrgency:function(){return P(e.id)},handleDelete:function(){return L(e.id)},onUpdate:B,Topstyle:{backgroundColor:"#e76f51"}},e.id)}))]})]}),Object(s.jsx)(d,{toggleNestModal:function(){w(!D)},nestModal:D,category:k,setUnstart:function(){return N("Unstart")},setInProgress:function(){return N("In progress")},setComplete:function(){return N("Complete")},setOverdue:function(){return N("Overdue")},setUngroup:function(){return N("Un-grouped")}})]})]})};n(52),n(53);r.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.a1054dd0.chunk.js.map
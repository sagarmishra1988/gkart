"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[444],{444:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(2791),a=n(4165),o=n(5861),s=n(2302),l=n(3999),u=n(1512),c=n(9508),i=n(9895),d=n(685),h=n(7689),m=n(3108),v=n(184),f=function(){var e=(0,c.x)(),r=e.isLoading,n=e.error,f=e.sendRequest,p=e.clearError,x=(0,t.useContext)(m.V),j=(0,h.s0)(),g=(0,u.Z)((function(e){return e.includes("@")})),Z=g.value,y=g.entervalueisvalid,b=g.haserror,C=g.valuechangehandler,k=g.valueblurhandler,w=g.reset,I=(0,u.Z)((function(e){return""!==e.trim()})),N=I.value,L=I.entervalueisvalid,O=I.haserror,S=I.valuechangehandler,T=I.valueblurhandler,_=I.reset,E=(0,t.useRef)(),R=(0,t.useRef)(),B=!1;y&&L&&(B=!0);var F=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),y){e.next=3;break}return e.abrupt("return");case 3:if(L){e.next=5;break}return e.abrupt("return");case 5:return w(),_(),e.prev=7,e.next=10,f("https://gkartapp.adaptable.app/api/customers/login","POST",JSON.stringify({email:Z,password:N}),{"Content-Type":"application/json"});case 10:n=e.sent,x.customerlogin(n.customerId,n.name,n.tokenc),j("/"),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(7);case 17:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(r){return e.apply(this,arguments)}}(),D=b?"form-control invalid":"form-control",A=O?"form-control invalid":"form-control";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{error:n,onClear:p}),r&&(0,v.jsx)(i.Z,{asOverlay:!0}),!x.customerisLoggedIn&&(0,v.jsx)("h2",{children:"Login Required"}),x.customerisLoggedIn&&(0,v.jsxs)("h2",{style:{textDecoration:"none"},children:["Wellcome  ",x.customerName]}),(0,v.jsxs)("div",{className:"form_input_div",children:[!x.customerisLoggedIn&&(0,v.jsxs)("form",{onSubmit:F,children:[(0,v.jsxs)("div",{className:D,children:[(0,v.jsx)(s.Z,{id:"EMAIL",ref:E,type:"email",onChange:C,onBlur:k,value:Z}),b&&(0,v.jsx)("p",{children:"enter valid email"})]}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)(s.Z,{id:"PASSWORD",ref:R,type:"password",onChange:S,onBlur:T,value:N}),O&&(0,v.jsx)("p",{children:"enter valid password"})]}),(0,v.jsx)(l.Z,{disabled:!B,children:"Login"})]}),x.customerisLoggedIn&&(0,v.jsx)(l.Z,{to:"/".concat(x.customerId,"/updatecustomer"),children:"Edit Customer"}),x.customerisLoggedIn&&(0,v.jsx)(l.Z,{to:"/",children:"Order"}),x.customerisLoggedIn&&(0,v.jsx)(l.Z,{to:"/".concat(x.customerId,"/customerorder"),children:"View Orders"})]})]})},p=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f,{})})}},2302:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(2791),a=n(1413),o=n(4164),s=n(1176),l=n(9422),u=n(184),c=function(e){var r=(0,u.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,u.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,u.jsx)("h2",{children:e.header})}),(0,u.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,u.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,u.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return o.createPortal(r,document.getElementById("modal-hook"))},i=function(e){return(0,u.jsxs)(t.Fragment,{children:[e.show&&(0,u.jsx)(l.Z,{onClick:e.onCancel}),(0,u.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,u.jsx)(c,(0,a.Z)({},e))})]})},d=n(3999),h=function(e){return(0,u.jsx)(i,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,u.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,u.jsx)("p",{children:e.error})})}},1512:function(e,r,n){var t=n(9439),a=n(2791),o={value:"",isTouched:!1},s=function e(r,n){return"input"===n.type?{value:n.value,isTouched:r.isTouched}:"blur"===n.type?{isTouched:!0,value:r.value}:"reset"===n.type?{isTouched:!1,value:""}:e};r.Z=function(e){var r=(0,a.useReducer)(s,o),n=(0,t.Z)(r,2),l=n[0],u=n[1],c=e(l.value),i=!c&&l.isTouched;return{value:l.value,entervalueisvalid:c,haserror:i,valuechangehandler:function(e){u({type:"input",value:e.target.value})},valueblurhandler:function(){u({type:"blur"})},reset:function(){u({type:"reset"})}}}}}]);
//# sourceMappingURL=444.00db1212.chunk.js.map
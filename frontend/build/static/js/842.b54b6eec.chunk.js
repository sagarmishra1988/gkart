"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[842],{1842:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(2791),a=n(4165),l=n(5861),s=n(2302),o=n(3999),i=n(1512),u=n(9508),c=n(9895),d=n(685),h=n(3108),v=n(184),f=function(){var e=(0,u.x)(),r=e.isLoading,n=e.error,f=e.sendRequest,p=e.clearError,x=(0,t.useContext)(h.V),m=(0,i.Z)((function(e){return e.includes("@")})),j=m.value,g=m.entervalueisvalid,Z=m.haserror,b=m.valuechangehandler,y=m.valueblurhandler,C=m.reset,k=(0,i.Z)((function(e){return""!==e.trim()})),w=k.value,I=k.entervalueisvalid,N=k.haserror,L=k.valuechangehandler,O=k.valueblurhandler,S=k.reset,T=(0,t.useRef)(),_=(0,t.useRef)(),E=!1;g&&I&&(E=!0);var R=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),g){e.next=3;break}return e.abrupt("return");case 3:if(I){e.next=5;break}return e.abrupt("return");case 5:return C(),S(),e.prev=7,e.next=10,f("https://gkartapp.adaptable.app/api/users/login","POST",JSON.stringify({email:j,password:w}),{"Content-Type":"application/json"});case 10:n=e.sent,x.login(n.userId,n.name,n.token),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(7);case 16:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(r){return e.apply(this,arguments)}}(),B=Z?"form-control invalid":"form-control",F=N?"form-control invalid":"form-control";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{error:n,onClear:p}),r&&(0,v.jsx)(c.Z,{asOverlay:!0}),x.isLoggedIn&&(0,v.jsxs)("h2",{style:{textDecoration:"none"},children:["Hello ",x.userName]}),(0,v.jsxs)("div",{className:"form_input_div",children:[!x.isLoggedIn&&(0,v.jsxs)("form",{onSubmit:R,children:[(0,v.jsx)("h2",{children:"Login Required"}),(0,v.jsxs)("div",{className:B,children:[(0,v.jsx)(s.Z,{id:"EMAIL",ref:T,type:"email",onChange:b,onBlur:y,value:j}),Z&&(0,v.jsx)("p",{children:"enter valid email"})]}),(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)(s.Z,{id:"PASSWORD",ref:_,type:"password",onChange:L,onBlur:O,value:w}),N&&(0,v.jsx)("p",{children:"enter valid password"})]}),(0,v.jsx)(o.Z,{disabled:!E,children:"Login"})]}),(0,v.jsxs)("div",{className:"loginbuttonpannel",children:[x.isLoggedIn&&(0,v.jsx)(o.Z,{to:"/".concat(x.userId,"/sellerupdate"),children:"Edit Seller"}),x.isLoggedIn&&(0,v.jsx)(o.Z,{to:"/sellernewproduct",children:"Upload Products"}),x.isLoggedIn&&(0,v.jsx)(o.Z,{to:"/".concat(x.userId,"/selleralluploadedproduct"),children:"View Uploaded Products"}),x.isLoggedIn&&(0,v.jsx)(o.Z,{to:"/".concat(x.userId,"/productcreator"),children:"View Order"})]})]})]})},p=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f,{})})}},2302:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("label",{htmlFor:e.id,children:e.id}),(0,t.jsx)("input",{style:{width:"100%"},type:e.type,id:e.id,onChange:e.onChange,ref:e.ref,onBlur:e.onBlur,value:e.value})]})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(2791),a=n(1413),l=n(4164),s=n(1176),o=n(9422),i=n(184),u=function(e){var r=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.createPortal(r,document.getElementById("modal-hook"))},c=function(e){return(0,i.jsxs)(t.Fragment,{children:[e.show&&(0,i.jsx)(o.Z,{onClick:e.onCancel}),(0,i.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(u,(0,a.Z)({},e))})]})},d=n(3999),h=function(e){return(0,i.jsx)(c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(d.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},1512:function(e,r,n){var t=n(9439),a=n(2791),l={value:"",isTouched:!1},s=function e(r,n){return"input"===n.type?{value:n.value,isTouched:r.isTouched}:"blur"===n.type?{isTouched:!0,value:r.value}:"reset"===n.type?{isTouched:!1,value:""}:e};r.Z=function(e){var r=(0,a.useReducer)(s,l),n=(0,t.Z)(r,2),o=n[0],i=n[1],u=e(o.value),c=!u&&o.isTouched;return{value:o.value,entervalueisvalid:u,haserror:c,valuechangehandler:function(e){i({type:"input",value:e.target.value})},valueblurhandler:function(){i({type:"blur"})},reset:function(){i({type:"reset"})}}}}}]);
//# sourceMappingURL=842.b54b6eec.chunk.js.map
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[916],{6916:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(2791),c=n(4165),s=n(5861),a=n(9439),i=n(7689),d=n(3373),o=n(685),l=n(9895),u=n(9508),h=(n(3999),n(1087)),x=n(184),j=function(e){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"productlist",children:(0,x.jsx)("table",{style:{margin:"-15px"},children:(0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.title}),(0,x.jsx)("td",{children:e.description}),(0,x.jsx)("td",{children:e.price}),(0,x.jsx)("td",{children:e.amount}),(0,x.jsx)("td",{children:(0,x.jsx)(h.OL,{to:"/".concat(e.id,"/updatecustomerorder"),children:"\u2712\ufe0f"})}),(0,x.jsx)("td",{children:(0,x.jsx)(h.OL,{to:"/".concat(e.id,"/updatecustomerorder"),children:"\ud83d\uddd1\ufe0f"})}),(0,x.jsx)("td",{children:(0,x.jsx)("img",{style:{width:"100%"},src:"".concat("https://gkartapp.adaptable.app","/").concat(e.image),alt:""})})]})})})})})})},m=function(){var e=(0,t.useState)([]),r=(0,a.Z)(e,2),n=r[0],h=r[1],m=(0,u.x)(),p=m.isLoading,f=m.error,v=m.sendRequest,g=m.clearError,y=(0,i.UO)().cid;return(0,t.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("https://gkartapp.adaptable.app/api"+"/orders/customer/".concat(y));case 3:r=e.sent,h(r.orders),console.log(r.orders),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[v,y]),0===n.length?(0,x.jsx)("div",{className:"center",children:(0,x.jsx)(d.Z,{children:(0,x.jsx)("h2",{style:{color:"white",textDecoration:"none"},children:"No Orders Found."})})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.Z,{error:f,onClear:g}),p&&(0,x.jsx)(l.Z,{asOverlay:!0}),(0,x.jsx)("div",{className:"productlist1",style:{margin:"-10px"},children:(0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:(0,x.jsxs)("tr",{style:{fontWeight:"bold"},children:[(0,x.jsx)("td",{children:"TITLE"}),(0,x.jsx)("td",{children:"DESCRIPTION"}),(0,x.jsx)("td",{children:"PRICE"}),(0,x.jsx)("td",{children:"QUANTITY"}),(0,x.jsx)("td",{children:"EDIT"}),(0,x.jsx)("td",{children:"DELETE"}),(0,x.jsx)("td",{children:"IMAGE"})]})})})}),n.map((function(e){return(0,x.jsx)(j,{id:e.id,name:e.name,title:e.title,description:e.description,image:e.image,amount:e.amount,creator:e.creator,price:e.price,quantity:e.quantity},e.id)}))]})},p=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(m,{})})}},3373:function(e,r,n){n.d(r,{Z:function(){return c}});n(2791);var t=n(184),c=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},685:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(2791),c=n(1413),s=n(4164),a=n(1176),i=n(9422),d=n(184),o=function(e){var r=(0,d.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,d.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,d.jsx)("h2",{children:e.header})}),(0,d.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,d.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,d.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.createPortal(r,document.getElementById("modal-hook"))},l=function(e){return(0,d.jsxs)(t.Fragment,{children:[e.show&&(0,d.jsx)(i.Z,{onClick:e.onCancel}),(0,d.jsx)(a.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,d.jsx)(o,(0,c.Z)({},e))})]})},u=n(3999),h=function(e){return(0,d.jsx)(l,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,d.jsx)(u.Z,{onClick:e.onClear,children:"Okay"}),children:(0,d.jsx)("p",{children:e.error})})}}}]);
//# sourceMappingURL=916.d7a3edd1.chunk.js.map
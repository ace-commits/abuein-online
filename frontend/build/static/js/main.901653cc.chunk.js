(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),s=c.n(n),r=c(18),j=c.n(r),i=(c(55),c(56),c(86)),l=c(91),o=c(92),d=c(30),b=function(){return Object(a.jsx)("header",{children:Object(a.jsx)(l.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(d.LinkContainer,{to:"/",children:Object(a.jsx)(l.a.Brand,{children:"Abu Ein Technologies"})}),Object(a.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(o.a,{className:"ml-auto",children:[Object(a.jsx)(d.LinkContainer,{to:"/cart",children:Object(a.jsxs)(o.a.Link,{children:[Object(a.jsx)("i",{className:"fas fa-shopping-cart"})," Cart"]})}),Object(a.jsx)(d.LinkContainer,{to:"/login",children:Object(a.jsxs)(o.a.Link,{children:[" ",Object(a.jsx)("i",{className:"fas fa-user"})," Login"]})})]})})]})})})},x=c(87),h=c(88),O=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(h.a,{className:"text-center py-3",children:"Copyright \xa9 Abu Ein Technologies"})})})})},u=c(19),f=c.n(u),p=c(25),m=c(27),v=c(93),g=function(e){var t=e.value,c=e.text,n=e.color;return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:Object(a.jsx)("i",{style:{color:n},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(a.jsx)("span",{children:c&&c})]})};g.defaultProps={color:"#B7950B"};var k=g,y=c(14),I=function(e){var t=e.product;return Object(a.jsxs)(v.a,{className:"my-3 p-3 rounded",children:[Object(a.jsx)(y.Link,{to:"/product/".concat(t._id),children:Object(a.jsx)(v.a.Img,{src:t.image,variant:"top"})}),Object(a.jsxs)(v.a.Body,{children:[Object(a.jsx)(y.Link,{to:"/product/".concat(t._id),children:Object(a.jsxs)(v.a.Title,{as:"div",children:[" ",Object(a.jsx)("strong",{children:t.name})]})}),Object(a.jsx)(v.a.Text,{as:"div",children:Object(a.jsx)(k,{value:t.rating,text:"".concat(t.numReviews," reviews")})}),Object(a.jsxs)(v.a.Text,{as:"h3",children:[" $",t.price]})]})]})},N=c(26),L=c.n(N),w=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/products");case 2:t=e.sent,c=t.data,s(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:" Latest Products "}),Object(a.jsx)(x.a,{children:c.map((function(e){return Object(a.jsx)(h.a,{sm:12,md:6,lg:4,xl:3,children:Object(a.jsx)(I,{product:e})},e._id)}))})]})},C=c(89),S=c(94),B=c(90),T=function(e){var t=e.match,c=Object(n.useState)({}),s=Object(m.a)(c,2),r=s[0],j=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/products/".concat(t.params.id));case 2:c=e.sent,a=c.data,j(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.Link,{className:"btn btn-light my-3",to:"/",children:"Go Back"}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(h.a,{md:6,children:Object(a.jsx)(C.a,{src:r.image,alt:r.name,fluid:!0})}),Object(a.jsx)(h.a,{md:3,children:Object(a.jsxs)(S.a,{variant:"flush",children:[Object(a.jsx)(S.a.Item,{children:Object(a.jsx)("h3",{children:r.name})}),Object(a.jsx)(S.a.Item,{children:Object(a.jsx)(k,{value:r.rating,text:"".concat(r.numReviews," reviews")})}),Object(a.jsxs)(S.a.Item,{children:["Price: ",r.price]}),Object(a.jsxs)(S.a.Item,{children:["Description: ",r.description]})]})}),Object(a.jsx)(h.a,{md:3,children:Object(a.jsx)(v.a,{children:Object(a.jsxs)(S.a,{variant:"flush",children:[Object(a.jsx)(S.a.Item,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(h.a,{children:"Price:"}),Object(a.jsx)(h.a,{children:Object(a.jsxs)("strong",{children:[" $",r.price]})})]})}),Object(a.jsx)(S.a.Item,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(h.a,{children:"Status:"}),Object(a.jsx)(h.a,{children:r.countInStock>0?"In Stock":"Out of Stock"})]})}),Object(a.jsx)(S.a.Item,{children:Object(a.jsx)(B.a,{className:"btn-block",type:"button",disabled:0===r.countInStock,children:"Add to Cart"})})]})})})]})]})},F=c(6),P=function(){return Object(a.jsxs)(y.BrowserRouter,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("main",{className:"py-3",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(F.d,{path:"/",component:w,exact:!0}),Object(a.jsx)(F.d,{path:"/product/:id",component:T})]})}),Object(a.jsx)(O,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};j.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),E()}},[[84,1,2]]]);
//# sourceMappingURL=main.901653cc.chunk.js.map
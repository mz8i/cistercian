(this.webpackJsonpcistercian=this.webpackJsonpcistercian||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),r=t(12),s=t.n(r),o=(t(22),t(3)),a=(t(23),t(2)),u=t(9),j=t.n(u),l=t(13),h=t.n(l);function b(){}function d(e){return Object(i.useMemo)((function(){return void 0!==e?{onMouseOver:function(){return e(!0)},onMouseOut:function(){return e(!1)}}:{onMouseOver:b,onMouseOut:b}}),[e])}function O(){var e=Object(i.useState)(void 0),n=Object(o.a)(e,2),t=n[0],c=n[1],r=h()((function(e){return function(n){return function(e,n){e!==t?n&&c(e):n||c(void 0)}(e,n)}}));return[t,r,c]}t(24);var m=t(0),g=function(e){var n=e.number,t=e.change,i=e.minNumber,c=e.maxNumber,r=e.onChangeNumber,s=e.onHover,o=e.children,u=d(s),j={onFocus:u.onMouseOver,onBlur:u.onMouseOut},l=n+t,h=l>=i&&l<=c;return Object(m.jsxs)("button",Object(a.a)(Object(a.a)(Object(a.a)({className:"number-btn",disabled:!h,onClick:function(e){return r(t)}},u),j),{},{children:[Object(m.jsx)("div",{className:"number-btn-change",children:(t>0?"+":"")+t}),o]}))};var x=function(e){var n=e.value,t=e.onChange,c=e.className,r=e.maxLength,s=Object(i.useState)(n.toString()),a=Object(o.a)(s,2),u=a[0],j=a[1],l=Object(i.useState)(!1),h=Object(o.a)(l,2),b=h[0],d=h[1],O=Object(i.useMemo)((function(){return parseInt(u,10)}),[u]);return Object(i.useEffect)((function(){O!==n&&(b?isNaN(O)||t(O):j(n.toString()))}),[O,n,t,b]),Object(m.jsx)("input",{className:c,type:"text",pattern:"[0-9]*",inputMode:"numeric",maxLength:r,value:u,onChange:function(e){var n=e.target.value.replaceAll(/[^0-9]/g,"");n!==u?j(n):e.preventDefault()},onFocus:function(){return d(!0)},onBlur:function(){d(!1),j(u.replace(/^(0+)(?=\d+)/,""))}})},v=["ones","tens","hundreds","thousands"],p=Object.fromEntries(v.map((function(e,n){return[e,Math.pow(10,n)]}))),f=(t(26),function(e){var n=e.position,t=e.highlight,i=void 0!==t&&t,c=d(e.onHover);return Object(m.jsx)("div",Object(a.a)(Object(a.a)({className:"position-name ".concat(i?"highlighted":"")},c),{},{children:n}))}),y=function(e){var n=e.value,t=e.onChange,c=e.onPositionHover,r=e.highlightedPosition,s=e.minNumber,o=e.maxNumber,u={minNumber:s,maxNumber:o,onChangeNumber:Object(i.useCallback)((function(e){return t(n+e)}),[t,n])};return Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{maxDeviceWidth:1299,children:Object(m.jsxs)("div",{className:"small",children:[Object(m.jsx)(x,{className:"year-text-input",value:n,onChange:t,maxLength:4}),Object(m.jsx)("div",{className:"input-section position-column-list",children:v.slice(0).reverse().map((function(e){return Object(m.jsxs)("div",{className:"position-column",children:[Object(m.jsx)(g,Object(a.a)({number:n,change:p[e],onHover:c(e)},u)),Object(m.jsx)(f,{position:e,highlight:r===e,onHover:c(e)}),Object(m.jsx)(g,Object(a.a)({number:n,change:-p[e],onHover:c(e)},u))]},"pos=".concat(e))}))})]})}),Object(m.jsx)(j.a,{minDeviceWidth:1300,children:Object(m.jsxs)("div",{className:"input-section large",children:[Object(m.jsx)("span",{className:"negative-change",children:v.slice(0).reverse().map((function(e){return Object(m.jsx)(g,Object(a.a)(Object(a.a)({number:n,change:-p[e],onHover:c(e)},u),{},{children:Object(m.jsx)(f,{position:e,highlight:r===e})}),"btn-".concat(e))}))}),Object(m.jsx)(x,{className:"year-text-input",value:n,onChange:t,maxLength:4}),Object(m.jsx)("span",{className:"positive-change",children:v.map((function(e){return Object(m.jsx)(g,Object(a.a)(Object(a.a)({number:n,change:p[e],onHover:c(e)},u),{},{children:Object(m.jsx)(f,{position:e,highlight:r===e})}),"btn-".concat(e))}))})]})}),Object(m.jsxs)("div",{className:"input-section slider-container",children:[Object(m.jsx)("span",{className:"slider-label",children:s}),Object(m.jsx)("input",{className:"slider-input",type:"range",min:s,max:o,step:1,value:n,onChange:function(e){return t(parseInt(e.target.value))}}),Object(m.jsx)("span",{className:"slider-label",children:o})]})]})},N=t(17),w=t(14),C=t(5),H=t(15),M=[1,2,3,4,6],S={0:[],1:[1],2:[2],3:[3],4:[4],5:[1,4],6:[6],7:[1,6],8:[2,6],9:[1,2,6]};var P=function(e){var n=e.digit,t=e.highlight,c=void 0!==t&&t,r=d(e.onHover),s=S[n];if(void 0===s)throw new Error("A cistercian digit can only be generated for Arabic digits 0-9");var o=Object(i.useMemo)((function(){return function(e){var n,t=Object.assign.apply(Object,[{}].concat(Object(H.a)(M.map((function(e){return Object(C.a)({},e,!1)}))))),i=Object(w.a)(e);try{for(i.s();!(n=i.n()).done;)t[n.value]=!0}catch(c){i.e(c)}finally{i.f()}return t}(s)}),[s]);return Object(m.jsxs)("g",Object(a.a)(Object(a.a)({className:"cistercian-glyph ".concat(c?"highlighted":"")},r),{},{children:[o[1]&&Object(m.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"0"},"frag-1"),o[2]&&Object(m.jsx)("line",{x1:"0",y1:"100",x2:"100",y2:"100"},"frag-2"),o[3]&&Object(m.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100"},"frag-3"),o[4]&&Object(m.jsx)("line",{x1:"0",y1:"100",x2:"100",y2:"0"},"frag-4"),o[6]&&Object(m.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"100"},"frag-6"),Object(m.jsx)("rect",{x:0,y:0,width:100,height:100,fillOpacity:0,stroke:"none"})]}))},k=function(e){var n=e.position,t=Object(N.a)(e,["position"]),i="ones"===n||"hundreds"===n?1:-1,c="tens"===n||"ones"===n?1:-1;return Object(m.jsx)("svg",{width:100,height:100,viewBox:"0 0 100 100",overflow:"visible",children:Object(m.jsx)("g",{style:{transform:"scale(".concat(i,", ").concat(c,")"),transformOrigin:"center",transformBox:"view-box"},children:Object(m.jsx)(P,Object(a.a)({},t))})})};t(27);var L=function(e){var n=e.number,t=e.highlightedPosition,c=e.onPositionHover,r=i.useMemo((function(){return function(e){if(e<0||e>9999)throw new Error("A Cistercian number can only be shown for integers from 0 to 9999");return e.toString().padStart(4,"0").split("").map((function(e){return parseInt(e,10)}))}(n)}),[n]),s=Object(o.a)(r,4),a=s[0],u=s[1],j=s[2],l=s[3];return Object(m.jsx)("svg",{className:"cistercian-number",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240 340",children:Object(m.jsxs)("g",{transform:"translate(20,20)",children:[Object(m.jsx)("g",{transform:"translate(100,0)",children:Object(m.jsx)(k,{digit:l,position:"ones",highlight:"ones"===t,onHover:c("ones")})},"group-ones"),Object(m.jsx)("g",{transform:"translate(0,0)",children:Object(m.jsx)(k,{digit:j,position:"tens",highlight:"tens"===t,onHover:c("tens")})},"group-tens"),Object(m.jsx)("g",{transform:"translate(0, 200)",children:Object(m.jsx)(k,{digit:a,position:"thousands",highlight:"thousands"===t,onHover:c("thousands")})},"group-thousands"),Object(m.jsx)("g",{transform:"translate(100, 200)",children:Object(m.jsx)(k,{digit:u,position:"hundreds",highlight:"hundreds"===t,onHover:c("hundreds")})},"group-hundreds"),Object(m.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"300",strokeLinecap:"square"})]})})},A=t(7),E=t.n(A),B=t(16),I=function(e){var n=window.location.protocol+"//"+window.location.host+window.location.pathname+e;window.history.replaceState({path:n},"",n)};function D(e,n,t,c){var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search;return E.a.parse(n,{ignoreQueryPrefix:!0,parseArrays:!1})[e]}(e),s=""===(null!==r&&void 0!==r?r:"")?void 0:t(r),u=Object(i.useState)(null!==s&&void 0!==s?s:n),j=Object(o.a)(u,2),l=j[0],h=j[1],b=Object(B.a)((function(e,n){!function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.search,i=E.a.parse(t,{ignoreQueryPrefix:!0,parseArrays:!1}),c=E.a.stringify(Object(a.a)(Object(a.a)({},i),{},Object(C.a)({},e,n)));I("?".concat(c))}(e,c(n))}),1);return Object(i.useEffect)((function(){b(e,l)}),[e,l,b]),[l,h]}function z(){var e=O(),n=Object(o.a)(e,2),t=n[0],i=n[1],c=D("year",(new Date).getFullYear(),(function(e){return parseInt(e,10)}),(function(e){return e.toString()})),r=Object(o.a)(c,2),s=r[0],a=r[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Cistercian numbers"}),Object(m.jsx)("section",{className:"number-section cistercian",children:Object(m.jsx)(L,{number:s,highlightedPosition:t,onPositionHover:i})}),Object(m.jsx)("section",{className:"number-section decimal",children:Object(m.jsx)(y,{value:s,minNumber:0,maxNumber:9999,onChange:a,highlightedPosition:t,onPositionHover:i})}),Object(m.jsxs)("section",{className:"description",children:[Object(m.jsx)("p",{children:"Experiment with a medieval numbering system invented by Cistercian monks!"}),Object(m.jsx)("p",{children:"(copy the website URL to share a link to the selected number)"})]}),Object(m.jsxs)("section",{className:"colophon",children:[Object(m.jsxs)("p",{children:["Created by ",Object(m.jsx)("a",{href:"https://mz8i.com",children:"mz8i"})," (",Object(m.jsx)("a",{href:"https://github.com/mz8i/cistercian",children:"source"}),")."]}),Object(m.jsxs)("p",{children:["Inspired by ",Object(m.jsx)("a",{href:"https://twitter.com/MathematicsUCL/status/1356558846093914114/photo/1",children:"UCL Mathematics"})," on Twitter."]})]})]})}s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0399e4fb.chunk.js.map
(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[11],{624:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},626:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(167),o=n(0),a=n(624),c=n(2),u=function(e){var t=Object(c.useState)(e),n=Object(a.a)(t,2),u=n[0],i=n[1];return[u,i,function(e){i(Object(o.a)(Object(o.a)({},u),{},Object(r.a)({},e.target.id,e.target.value)))}]},i=function(e,t){for(var n in e){if(""==e[n]||null==e[n])return t(!0);if("email"==n&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e[n]))return t(!0)}return t(!1)}},627:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));n(624);var r=n(635),o=n.n(r),a=function(e){e.abort()},c=function(){var e=new AbortController;e.signal;return e},u=function(e,t,n){return o()({title:e,text:t,icon:n,button:!0})}},628:function(e,t,n){"use strict";var r=n(647),o=n.n(r);function a(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function u(e){a(c,r,o,u,i,"next",e)}function i(e){a(c,r,o,u,i,"throw",e)}u(void 0)}))}}var u=n(168),i=n(71),s=n.n(i);t.a=function e(){var t=this;Object(u.a)(this,e),this.setUrl=function(){return"http://api.virtualmusicafrica.com/api"},this.appDomain=function(){return"http://admin.virtualmusicafrica.com"},this.postData=function(){var e=c(o.a.mark((function e(n,r,a){var c,u,i,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>3&&void 0!==l[3]?l[3]:"",e.next=3,s.a.get(c);case 3:return u=e.sent,i=t.postRequestOptions(u,n,a),console.log(i),e.abrupt("return",fetch(t.setUrl()+"/"+r,i).then((function(e){return e.json()})));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.getData=function(){var e=c(o.a.mark((function e(n){var r,a,c,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"",e.next=3,s.a.get(r);case 3:return a=e.sent,c=t.getRequestOptions(a),e.abrupt("return",fetch(t.setUrl()+"/"+n,c).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteData=function(){var e=c(o.a.mark((function e(n){var r,a,c,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"",e.next=3,s.a.get(r);case 3:return a=e.sent,c=t.deleteRequestOptions(a),e.abrupt("return",fetch(t.setUrl()+"/"+n,c).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRequestOptions=function(e){return{method:"GET",headers:{Authorization:"Bearer "+e,"Content-type":"application/json"}}},this.postRequestOptions=function(e,t,n){return{method:n,cache:"no-cache",headers:{"Content-type":"Application/json",Accept:"application/json, text/plain, */*",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)}},this.deleteRequestOptions=function(e){return{method:"DELETE",headers:{Authorization:"Bearer "+e,"Content-type":"application/json"}}}}},647:function(e,t,n){e.exports=n(390)},655:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return p}));var r=n(30),o=n(628),a=n(71),c=n.n(a),u=function(e,t){return function(n){n({type:r.n}),n({type:r.g}),function(e){return(new o.a).postData(e,"admin/login","POST").then((function(e){return console.log(JSON.stringify(e)),e})).catch((function(e){return console.log(e),e}))}(e).then((function(e){console.log(e),e.hasOwnProperty("success")&&1==e.success?(n({type:r.h,res:e}),console.log(e.token),c.a.set("vt-music",e.token),t.push("/")):e.hasOwnProperty("success")&&0==e.success&&n({type:r.f,res:e})}),(function(e){n({type:r.e,error:e}),console.log(e)}))}},i=function(){return function(e){e({type:r.n})}},s=function(e){return function(t){t({type:r.m}),t({type:r.c}),function(e){return(new o.a).postData(e,"admin/forgot-password-link","POST").then((function(e){return console.log(JSON.stringify(e)),e})).catch((function(e){return console.log(e),e}))}(e).then((function(e){console.log(e),e.hasOwnProperty("success")&&1==e.success?t({type:r.d,res:e}):e.hasOwnProperty("success")&&0==e.success&&t({type:r.b,res:e})}),(function(e){t({type:r.a,error:e}),console.log(e)}))}},l=function(){return function(e){e({type:r.m})}},f=function(e){return function(t){t({type:r.o}),t({type:r.k}),function(e){return(new o.a).postData(e,"admin/reset-password","POST").then((function(e){return console.log(JSON.stringify(e)),e})).catch((function(e){return console.log(e),e}))}(e).then((function(e){console.log(e),e.hasOwnProperty("success")&&1==e.success?t({type:r.l,res:e}):e.hasOwnProperty("success")&&0==e.success&&t({type:r.j,res:e})}),(function(e){t({type:r.i,error:e}),console.log(e)}))}},p=function(){return function(e){e({type:r.o})}}},740:function(e,t,n){},824:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n(2),o=n.n(r),a=n(625),c=n(624),u=n(629),i=n(652),s=n(626),l=n(627),f=n(166),p=(n(740),n(655)),m=(n(640),n(630)),d=n.n(m),h=n(21),y=n(628);function g(){var e=new y.a,t=Object(s.b)({email:"",url:e.appDomain()+"reset-password"}),n=Object(c.a)(t,3),m=n[0],g=(n[1],n[2]),v=Object(r.useState)(!0),b=Object(c.a)(v,2),O=b[0],E=b[1],j=Object(f.b)(),w=Object(f.c)((function(e){return e.auth.forgotPasswordResponse})),x=Object(l.c)(),A=Object(h.g)(),k=function(){A.push("/login")};Object(r.useEffect)((function(){return P(m),function(){Object(l.b)(x)}}),[m]);var S=function(e){e.preventDefault(),j(Object(p.a)(m))},P=function(e){Object(s.a)(e,E)},N=function(){j(Object(p.d)())};return o.a.createElement(i.a,{initialValues:m,validate:function(){var e={};return e.email=m.email?"":"Email Field is Required",e.email=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(m.email)?"":"Invalid email address",e}},(function(e){var t,n=e.errors,r=e.touched,c=e.handleBlur;return o.a.createElement(a.u,{onSubmit:S},""!=w&&"loading"==w?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{type:"ThreeDots",color:"#321fdb",height:60,width:60})):""!=w&&1==w.success?(t=w.message,o.a.createElement(a.a,{color:"success",closeButton:!0,onClick:N},t)):0==w.success?function(e,t){return"undefined"===typeof e?o.a.createElement(a.a,{color:"danger",closeButton:!0,onClick:N},t):Object.keys(e).map((function(t,n){return o.a.createElement(a.a,{color:"danger",closeButton:!0,onClick:N,key:t},e[t][0])}))}(w.error,w.message):w,o.a.createElement("h3",null,"Forgot Password"),o.a.createElement("p",{className:"text-muted"},"Enter your email to change your password"),o.a.createElement(a.B,{className:"mb-3"},o.a.createElement(a.D,null,o.a.createElement(a.E,null,o.a.createElement(u.a,{name:"cil-user"}))),o.a.createElement(a.A,{type:"text",id:"email",name:"email",value:m.email,onChange:g,onBlur:c,placeholder:"Username",autoComplete:"username"}),o.a.createElement("div",{className:"error_form_response"},n.email&&r.email&&n.email)),o.a.createElement(a.I,null,o.a.createElement(a.l,{xs:"6"},o.a.createElement(a.f,{color:"primary",disabled:O,type:"submit",className:"px-4"},"Forgot Password")),o.a.createElement(a.l,{xs:"6",className:"text-right"},o.a.createElement(a.f,{onClick:k,color:"link",className:"px-0"},"Login Here?"))))}))}var v=function(){return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(a.m,null,o.a.createElement(a.I,{className:"justify-content-center"},o.a.createElement(a.l,{md:"6"},o.a.createElement(a.j,null,o.a.createElement(a.g,{className:"p-4"},o.a.createElement(a.h,null,o.a.createElement(g,null))))))))}}}]);
//# sourceMappingURL=11.994fbc72.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(3),u=n(5),l=n(0),o=n.n(l),s=n(15),i=n.n(s),p=n(4),f=n.n(p);function v(e){var t=e.screen,n=e.setScreen,a=Object(l.useState)(),s=Object(u.a)(a,2),i=s[0],p=s[1],v=function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/clear-cookie");case 3:n("auth"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/get-data");case 3:t=e.sent,console.log(t.data),p(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("p",null,t),o.a.createElement("p",null,i),o.a.createElement("button",{onClick:b},"Get Data"),o.a.createElement("button",{onClick:v},"Logout"))}function b(){var e=Object(l.useState)("auth"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(l.useState)(),i=Object(u.a)(s,2),p=i[0],b=i[1],m=Object(l.useState)(),d=Object(u.a)(m,2),h=d[0],E=d[1],g=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/authenticate",{auth:{username:p,password:h}});case 3:void 0!==(t=e.sent).data.screen&&a(t.data.screen),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/read-cookie");case 3:void 0!==(t=e.sent).data.screen&&a(t.data.screen),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a("auth"),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)(function(){w()},[]),o.a.createElement("div",{className:"App"},"auth"===n?o.a.createElement("div",null,o.a.createElement("label",null,"Username: "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",onChange:function(e){return b(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Password: "),o.a.createElement("br",null),o.a.createElement("input",{type:"password",onChange:function(e){return E(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("button",{onClick:g},"Login")):o.a.createElement(v,{screen:n,setScreen:a}))}t.default=b;var m=document.getElementById("root");i.a.render(o.a.createElement(b,null),m)}},[[16,1,2]]]);
//# sourceMappingURL=main.5ee7622d.chunk.js.map
(this.webpackJsonpswapi=this.webpackJsonpswapi||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.b0247cc1.png"},22:function(e,t,a){e.exports=a(59)},27:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(27),a(21)),o=a(1),u=a.n(o),i=a(3),m=a(4),p=a(19),f=a.n(p),h=a(5),E=a.n(h),v="https://cyruzin.github.io/swapi-app/",d="Something went wrong",b="No response from the server",g="Network error";function k(e){throw e.response?e.response.data||d:e.request?e.request.response||b:e.message||g}var w=E.a.create({baseURL:"https://swapi.dev/api"});function x(e){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.data,c=t.params,e.prev=1,e.next=4,w({url:a,method:n,data:r,params:c});case 4:return l=e.sent,e.abrupt("return",l.data);case 8:e.prev=8,e.t0=e.catch(1),k(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}E.a.create({baseURL:"https://www.googleapis.com/customsearch/v1",method:"GET"});a(55);function C(e){if(!e.info)return null;var t=e.info,a=t.name,n=t.gender,c=t.birth_year,l=t.skin_color,s=t.hair_color,o=t.eye_color,u=t.height,i=t.mass,m=t.starships;return r.a.createElement("div",{className:"InfoBox"},r.a.createElement("div",{className:"Info-Link"},r.a.createElement("a",{href:v},"\u2190")),r.a.createElement("p",null,"Name: ",a),r.a.createElement("p",null,"Gender: ",n),r.a.createElement("p",null,"Birth year: ",c),r.a.createElement("p",null,"Skin color: ",l),r.a.createElement("p",null,"Hair color: ",s),r.a.createElement("p",null,"Eye color: ",o),r.a.createElement("p",null,"Height: ",u),r.a.createElement("p",null,"Mass: ",i),m.length>0?r.a.createElement("div",null,r.a.createElement("p",null,"Starships:"),m.map((function(e){return r.a.createElement("ul",{className:"Info-Starships",key:e.name},r.a.createElement("ol",null,"Name: ",e.name),r.a.createElement("ol",null,"Model: ",e.model),r.a.createElement("ol",null,"Starship class: ",e.starship_class),r.a.createElement("ol",null,"Manufacturer: ",e.manufacturer),r.a.createElement("ol",null,"Length: ",e.length),r.a.createElement("ol",null,"Max atmosphering speed: ",e.max_atmosphering_speed),r.a.createElement("ol",null,"Consumables: ",e.consumables),r.a.createElement("ol",null,"Crew: ",e.crew),r.a.createElement("ol",null,"Passengers: ",e.passengers),r.a.createElement("ol",null,"Hyperdrive rating: ",e.hyperdrive_rating),r.a.createElement("ol",null,"MGLT: ",e.MGLT),r.a.createElement("ol",null,"Cargo capacity: ",e.cargo_capacity),r.a.createElement("ol",null,"Cost in credits: ",e.cost_in_credits))}))):r.a.createElement("p",null,"Starships: n/a"))}a(56);function j(e){var t=e.onKeyUp,a=e.onClick,n=e.results,c=e.info;return(r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"Input",type:"text",placeholder:"Search",onKeyUp:function(e){return t(e.target.value)},"data-testid":"searchID"}),n.length>0&&r.a.createElement("div",{className:"InputBox"},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("ol",{key:e.name,className:"InputBox-Cursor",onClick:function(){return a(e)}},e.name)})))),r.a.createElement(C,{info:c})))}a(57);function N(e){if(!e.info)return null;var t=e.info,a=e.onClick;return(r.a.createElement("div",{className:"ListBox"},t&&t.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("p",{className:"ListBox-Link",onClick:function(){return a(e)}},e.name))}))))}var O=a(20),I=a.n(O);a(58);var L=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),p=o[0],h=o[1],E=Object(n.useState)([]),d=Object(m.a)(E,2),b=d[0],g=d[1],k=Object(n.useState)(null),w=Object(m.a)(k,2),y=w[0],C=w[1],O=Object(n.useState)(null),L=Object(m.a)(O,2),S=L[0],_=L[1],B=Object(n.useCallback)(Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(""),_(""),c(!0),e.next=6,x({method:"GET",url:"/people/"});case 6:t=e.sent,h(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),_(e.t0);case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])}))),[]);Object(n.useEffect)((function(){B()}),[B]);var G=f()(function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,g(""),C(""),_(""),c(!0),""!==t){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,x({method:"GET",url:"/people/?search=".concat(encodeURIComponent(t))});case 9:a=e.sent,g(a.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),_(e.t0);case 16:return e.prev=16,c(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(t){return e.apply(this,arguments)}}(),500),M=Object(n.useCallback)(function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c(!0),a=[],!(t.starships.length>0)){e.next=7;break}return e.next=6,Promise.all(t.starships.map(function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({method:"GET",url:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:a=e.sent;case 7:n=Object(s.a)({},t,{starships:a}),C(n),g(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),_(e.t0);case 15:return e.prev=15,c(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return r.a.createElement("div",{className:"Container"},S&&r.a.createElement("div",{className:"Container-Error"},r.a.createElement("p",null,S)),a&&r.a.createElement("div",{className:"Container-Loading"},r.a.createElement("p",null,"Loading...")),r.a.createElement("div",null,r.a.createElement("a",{href:v},r.a.createElement("img",{alt:"joker",className:"Container-Img",src:I.a})),r.a.createElement("p",{className:"Container-Info"},"By Cyro Dubeux"),r.a.createElement("p",{className:"Container-Info"},r.a.createElement("a",{className:"Container-Link",href:"https://github.com/cyruzin",target:"_blank",rel:"noopener noreferrer"},"GitHub"))),r.a.createElement("div",null,r.a.createElement(j,{onKeyUp:G,onClick:M,results:b,info:y}),!y&&r.a.createElement(N,{info:p,onClick:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.019bcafa.chunk.js.map
(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{44:function(e,t,n){e.exports=n(56)},49:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),l=n(7),r=n.n(l),i=(n(49),n(50),n(30)),u=n(27),s=n.n(u),p=n(34),d=n(39);!function(e){e.A="A",e.A1="A1",e.B="B",e.B1="B1",e.X="X",e.V="V"}(a||(a={}));var m=new Map([["8/19/2020",a.A],["8/20/2020",a.B],["8/21/2020",a.A],["8/24/2020",a.B],["8/25/2020",a.A],["8/26/2020",a.B],["8/27/2020",a.A],["8/28/2020",a.B],["8/31/2020",a.A],["9/1/2020",a.B],["9/2/2020",a.A],["9/3/2020",a.B],["9/4/2020",a.A],["9/7/2020",a.X],["9/8/2020",a.B],["9/9/2020",a.A],["9/10/2020",a.B],["9/11/2020",a.A],["9/14/2020",a.B],["9/15/2020",a.A],["9/16/2020",a.B],["9/17/2020",a.A],["9/18/2020",a.B],["9/21/2020",a.A],["9/22/2020",a.B],["9/23/2020",a.A],["9/24/2020",a.B],["9/25/2020",a.A1],["9/28/2020",a.B],["9/29/2020",a.A],["9/30/2020",a.B],["10/1/2020",a.A],["10/2/2020",a.B],["10/5/2020",a.A],["10/6/2020",a.B],["10/7/2020",a.A],["10/8/2020",a.B],["10/9/2020",a.A],["10/12/2020",a.V],["10/13/2020",a.V],["10/14/2020",a.V],["10/15/2020",a.V],["10/16/2020",a.V]]),A=[{type:"C",time:"7:50 AM-9:25 AM"},{type:"C",time:"9:30 AM-11:05 AM"},{type:"CL",time:"11:10 AM-1:10 PM"},{type:"C",time:"1:15 PM-2:50 PM"}],M=[{type:"C",time:"7:50 AM-9:10 AM"},{type:"C",time:"9:15 AM-10:35 AM"},{type:"CL",time:"10:40 AM-12:25 PM"},{type:"C",time:"12:30 PM-1:50 PM"}],h=new Map([[0,"Lunch Break"],[1,"Science"],[2,"History"],[3,"Language Arts"],[4,"Leadership Characteristics"],[5,"Health and PE"],[6,"Latin"],[7,"Concert Band"],[8,"Saxon Math"]]),f=new Map([["MAYANKGUPTA",{A:"LA",B:"LC"}]]),y=[{type:"L",time:"11:10 AM-11:30 AM",period:0,subject:"Lunch A"},{type:"C",time:"11:35 AM-1:10 PM"}],v=[{type:"C",time:"11:10 AM-11:38 AM"},{type:"L",time:"11:43 AM-12:03 PM",period:0,subject:"Lunch B"},{type:"C",time:"12:08 PM-12:55 PM"}],B=[{type:"C",time:"11:10 AM-12:45 PM"},{type:"L",time:"12:50 PM-1:10 PM",period:0,subject:"Lunch C"}],b=[{type:"L",time:"10:40 AM-11:00 AM",period:0,subject:"Lunch A"},{type:"C",time:"11:05 AM-12:25 PM"}],E=[{type:"C",time:"10:40 AM-11:08 AM"},{type:"L",time:"11:13 AM-11:33 AM",period:0,subject:"Lunch B"},{type:"C",time:"11:38 PM-12:25 PM"}],g=[{type:"C",time:"10:40 AM-12:00 AM"},{type:"L",time:"12:05 PM-12:25 PM",period:0,subject:"Lunch"}],L=n(28),C=n.n(L),P=function(e){var t=C()(e);return m.get(t.format("M/D/YYYY"))},j=function(e,t){e.map((function(e,n){if(2===n){var a=e.period,c=e.subject;console.log("period",a),console.log("subject",c),t.map((function(e){"C"===e.type?(e.subject=c,e.period=a):e.type}))}})),e.splice.apply(e,[2,1].concat(Object(d.a)(t)))},x=function(e,t,n,a){console.log("dayType",n);var c=f.get(e),o=c?c[n]:{};switch(console.log("lunchSchType",o),o){case"LA":[1,2,5].includes(t)?j(a,y):[3,4].includes(t)&&j(a,b);break;case"LB":[1,2,5].includes(t)?j(a,v):[3,4].includes(t)&&j(a,E);break;case"LC":[1,2,5].includes(t)?(console.log("LC 125",B),j(a,B)):[3,4].includes(t)&&(console.log("LC 34",g),j(a,B))}},w=function(){var e=Object(p.a)(s.a.mark((function e(t){var n,c,o,l,r,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dateStr",t),c=C()(t),o=c.day(),l=P(t),r=[],l!==a.X){e.next=7;break}return e.abrupt("return",r);case 7:return[1,2,5].includes(o)?r=A:[3,4].includes(o)&&(r=M),e.next=10,console.log("Basic schedule without modifications",r);case 10:if(l!==a.A){e.next=15;break}return e.next=13,null===(i=r)||void 0===i?void 0:i.forEach((function(e,t){e.period=t+1}));case 13:e.next=18;break;case 15:if(l!==a.B){e.next=18;break}return e.next=18,null===(u=r)||void 0===u?void 0:u.forEach((function(e,t){e.period=t+5}));case 18:return e.next=20,console.log("Basic schedule after periods",r);case 20:return e.next=22,null===(n=r)||void 0===n?void 0:n.forEach((function(e){e.subject=(null===e||void 0===e?void 0:e.period)?null===h||void 0===h?void 0:h.get(null===e||void 0===e?void 0:e.period):""}));case 22:return e.next=24,console.log("Basic schedule after subjects",r);case 24:return e.next=26,x("MAYANKGUPTA",o,l,r);case 26:return e.next=28,console.log("Basic schedule after Lunch",r);case 28:return e.abrupt("return",r);case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(85),S=n(89),V=n(96),O=n(90),D=n(91),T=n(92),Y=n(93),N=n(94),X=n(95),I=function(){var e=Object(c.useState)((new Date).toLocaleDateString()),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(),r=Object(i.a)(l,2),u=r[0],s=r[1];return Object(c.useEffect)((function(){console.log("todaySchedule"),w(n).then((function(e){console.log("schedule",e),s(e)}))}),[n]),o.a.createElement(k.a,null,o.a.createElement(S.a,{container:!0,justify:"space-around"},o.a.createElement(S.a,{item:!0,xs:4},o.a.createElement(V.a,{id:"date",label:"Date",type:"date",defaultValue:n,onChange:function(e){var t;console.log("event",e.target.value),a(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},InputLabelProps:{shrink:!0}})),o.a.createElement(S.a,{item:!0,xs:4},o.a.createElement("p",null,"Date: ",n)),o.a.createElement(S.a,{item:!0,xs:4},o.a.createElement("p",null,"Its a ",P(n)," Day")),o.a.createElement(S.a,{item:!0,xs:12},o.a.createElement("p",null,"Today's Schedule")),o.a.createElement(O.a,{component:k.a},o.a.createElement(D.a,{"aria-label":"simple table"},o.a.createElement(T.a,null,o.a.createElement(Y.a,null,o.a.createElement(N.a,null,"Time"),o.a.createElement(N.a,null,"Subject"),o.a.createElement(N.a,null,"Period"))),o.a.createElement(X.a,null,null===u||void 0===u?void 0:u.map((function(e){return o.a.createElement(Y.a,null,o.a.createElement(N.a,null,e.time),o.a.createElement(N.a,null,e.subject),o.a.createElement(N.a,null,e.period))})))))))},G=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.cfcde6e8.chunk.js.map
(this["webpackJsonpexercise-app"]=this["webpackJsonpexercise-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(5),c=n.n(s),i=(n(10),n(2)),u=n(3),o=n(0);var a=function(e){var t=e.state,n=e.dec,r=e.inc,s=e.setstate;return Object(o.jsxs)("div",{className:"css-grid",children:[Object(o.jsx)("h1",{id:"session-label",children:"Session Length"}),Object(o.jsx)("button",{id:"session-decrement",onClick:function(){return n(s)},children:"-"}),Object(o.jsxs)("div",{id:"session-length",children:[t.minutes," "]}),Object(o.jsx)("button",{id:"session-increment",onClick:function(){return r(s)},children:"+"})]})},d=function(e){var t=e.state,n=e.dec,r=e.inc,s=e.setstate;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"css-grid",children:[Object(o.jsx)("h1",{id:"break-label",children:"Break Length"}),Object(o.jsx)("button",{id:"break-decrement",onClick:function(){return n(s)},children:"-"}),Object(o.jsxs)("div",{id:"break-length",children:[t.counter," "]}),Object(o.jsx)("button",{id:"break-increment",onClick:function(){return r(s)},children:"+"})]})})},b=n.p+"static/media/Time is up.16fefd91.mp3";var j=function(e){var t=e.starter,n=e.start,s=e.state,c=e.setstate,u=e.reset,a=e.breaks,d=e.work,j=e.routines,l=e.setstarter,O=e.status,m=e.audi;return Object(r.useEffect)((function(){return!1===s.starter&&l(d.minutes*j.counter*60),n+1===0&&"Session has begun"===s.wording?(l(60*a.minutes),c((function(e){return Object(i.a)(Object(i.a)({},e),{},{work:"No",counter:1,wording:"Time for a break!",music:"Play"})})),m):n+1===0&&"Time for a break!"===s.wording?(l(60*d.minutes),c((function(e){return Object(i.a)(Object(i.a)({},e),{},{work:"Yes",counter:1,wording:"Session has begun",music:"PlayAgain"})})),m):void c((function(e){return Object(i.a)(Object(i.a)({},e),{},{minutes:Math.floor(n/60),seconds:n%60,counter:e.counter+1})}))}),[n,a,d,j]),Object(o.jsxs)("div",{id:"TimerArea",children:[Object(o.jsx)("h1",{children:"Total Time Remaining"}),Object(o.jsxs)("p",{id:"time-left",children:[s.minutes<10?"0".concat(s.minutes):s.minutes,":",s.seconds<10?"0"+s.seconds:s.seconds]}),Object(o.jsx)("audio",{src:b,id:"beep"}),Object(o.jsx)("p",{id:"timer-label",children:s.wording}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{id:"start_stop",onClick:t,children:O.wording}),Object(o.jsx)("button",{id:"reset",onClick:u,children:"RESET"})]})]})};var l=function(){var e=Object(r.useState)({minutes:1,seconds:0,counter:1}),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)({minutes:25,seconds:0,counter:25}),b=Object(u.a)(c,2),l=b[0],O=b[1],m=Object(r.useState)({minutes:5,seconds:0,counter:5}),f=Object(u.a)(m,2),h=f[0],v=f[1],g=Object(r.useState)({starter:!1,intervalid:!1,worktime:"",breaks:"",counter:"",work:"not started",minutes:25,seconds:0,wording:"Press Start to start your Session"}),k=Object(u.a)(g,2),w=k[0],x=k[1],p=Object(r.useRef)({active:!0,paws:0}),S=Object(r.useState)({wording:"START"}),T=Object(u.a)(S,2),E=T[0],R=T[1],y=Object(r.useState)(1500),I=Object(u.a)(y,2),P=I[0],A=I[1],C=Object(r.useRef)(null);function M(e){e((function(e){return Object(i.a)(Object(i.a)({},e),{},{minutes:e.minutes<60?e.minutes+1:60,counter:e.counter<60?e.counter+1:60})}))}function N(e){e((function(e){return Object(i.a)(Object(i.a)({},e),{},{minutes:e.minutes>1?e.minutes-1:1,counter:e.counter>1?e.counter-1:1})}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"title",children:"POMODORO TIMER "}),Object(o.jsx)(a,{dec:N,inc:M,state:l,setstate:O}),Object(o.jsx)(d,{dec:N,inc:M,state:h,setstate:v}),Object(o.jsx)(j,{status:E,breaks:h,work:l,routines:n,starter:function(){console.log("funk"),w.starter?0===p.current.paws?(p.current.active=!1,p.current.paws=1,null===!C.current&&C.current.pause(),console.log(w.intervalid),R({wording:"RESUME"}),clearInterval(w.intervalid)):(x((function(e){return Object(i.a)(Object(i.a)({},e),{},{intervalid:setInterval((function(){p.current.active&&A((function(e){return e-1}))}),1e3)})})),null===!C.current&&C.current.play(),p.current.active=!0,p.current.paws=0,console.log("resumed"),R({wording:"PAUSE"})):(console.log("funk2"),R({wording:"PAUSE"}),A(l.minutes*n.counter*60),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{intervalid:setInterval((function(){p.current.active&&A((function(e){return e-1}))}),1e3),starter:!w.starter,worktime:l.counter,breaks:h.counter,minutes:l.minutes*n.counter,seconds:0,work:"Yes",counter:0,wording:"Session has begun"})})))},start:P,setstarter:A,state:w,reset:function(){null!==C.current&&(C.current.pause(),C.current.currentTime=0,C.current.Time=0),p.current.active=!0,p.current.paws=0,R({wording:"START"}),clearInterval(w.intervalid),A(l.minutes*n.counter*60),console.log(P),v({minutes:5,seconds:0,counter:5}),s({minutes:1,seconds:0,counter:1}),O({minutes:25,seconds:0,counter:25}),x({starter:!1,intervalid:"",worktime:"",breaks:"",counter:"",work:"not started",minutes:25,seconds:0,wording:"Press Start to start your Session"})},setstate:x,audi:function(){C.current=document.getElementById("beep"),C.current.play()}})]})};c.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e0fed914.chunk.js.map
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(9),n(3)),o=n(0),d="fcb3f16c75993628e7a50ba4daea89f8",h="http://api.openweathermap.org/data/2.5/",j=function(){var e=String(new window.Date);e=e.slice(0,15);var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)({}),j=Object(r.a)(i,2),l=j[0],u=j[1];return Object(o.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search...",onChange:function(e){return s(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(h,"weather?q=").concat(c,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){u(e),s("")}))}})}),"undefined"!=typeof l.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(o.jsx)("div",{className:"date",children:e})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temperature",children:[Math.round(l.main.temp),"\xb0C"]}),Object(o.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5e8389c0.chunk.js.map
(function(e){function t(t){for(var r,c,i=t[0],a=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function c(e){return i.p+"assets/js/"+({about:"about",home:"home",test:"test"}[e]||e)+"."+{about:"058c1e38",home:"844045c7",test:"c09b20cc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=c(e);var s=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3.0-demo/dist/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),o=n("5c40"),u={id:"app"},c={id:"nav"},i=Object(o["h"])("Home"),a=Object(o["h"])(" | "),s=Object(o["h"])("About"),f=Object(o["h"])(" | "),l=Object(o["h"])("Test");function p(e,t){var n=Object(o["r"])("router-link"),r=Object(o["r"])("router-view");return Object(o["p"])(),Object(o["e"])("div",u,[Object(o["i"])("div",c,[Object(o["i"])(n,{to:"/"},{default:Object(o["x"])((function(){return[i]})),_:1}),a,Object(o["i"])(n,{to:"/about"},{default:Object(o["x"])((function(){return[s]})),_:1}),f,Object(o["i"])(n,{to:"/test"},{default:Object(o["x"])((function(){return[l]})),_:1})]),Object(o["i"])(r)])}n("9cdc");const d={};d.render=p;var b=d,h=(n("d3b7"),n("8c4f")),m=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/test",name:"Test",component:function(){return n.e("test").then(n.bind(null,"78c1"))}}],v=Object(h["a"])({history:Object(h["b"])("/vue3.0-demo/dist/"),routes:m}),j=v,O=n("2f62"),y=O["a"].createStore({state:{test:0},mutations:{setTest:function(e,t){e.test=t}},actions:{},modules:{}});Object(r["a"])(b).use(j).use(y).mount("#app")},"942d":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("942d")}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?u(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var u in o){var f=n[u],a=f&&f.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(s){a.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),u=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!u||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},"78c1":function(t,e,r){"use strict";r.r(e);var n=r("5c40"),o=r("9ff4");function i(t,e){return Object(n["p"])(),Object(n["e"])(n["b"],null,[Object(n["i"])("h1",null,"vue3-reactive："+Object(o["E"])(t.number),1),Object(n["i"])("h2",null,"computed：当前数据的两倍："+Object(o["E"])(t.doubleNum),1),Object(n["i"])("p",null,[Object(n["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"增加")]),Object(n["i"])("h2",null,"获取Vuex中的值："+Object(o["E"])(t.testNum),1),Object(n["i"])("p",null,[Object(n["i"])("button",{onClick:e[2]||(e[2]=function(e){return t.update(e)})},"更新Vuex中的值")])],64)}var c=r("5530"),u=r("a1e9"),f={name:"Test",setup:function(){var t=Object(n["k"])(),e=t.ctx,r=Object(u["g"])({number:12,doubleNum:Object(n["d"])((function(){return 2*r.number}))}),o=function(){return r.number++},i=function(){return e.$store.commit("setTest",r.number)},f=Object(n["d"])((function(){return e.$store.state.test}));return Object(c["a"])({},Object(u["m"])(r),{testNum:f,add:o,update:i})}};f.render=i;e["default"]=f},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),u=r("83ab"),f=r("4930"),a=r("fdbf"),s=r("d039"),b=r("5135"),l=r("e8b5"),d=r("861d"),p=r("825a"),v=r("7b0b"),y=r("fc6a"),h=r("c04e"),O=r("5c6c"),g=r("7c73"),m=r("df75"),j=r("241c"),S=r("057f"),w=r("7418"),L=r("06cf"),P=r("9bf2"),E=r("d1e7"),x=r("9112"),T=r("6eeb"),C=r("5692"),N=r("f772"),k=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),V=r("746f"),G=r("d44e"),R=r("69f3"),F=r("b727").forEach,H=N("hidden"),J="Symbol",I="prototype",B=D("toPrimitive"),$=R.set,q=R.getterFor(J),Q=Object[I],W=o.Symbol,z=i("JSON","stringify"),K=L.f,U=P.f,X=S.f,Y=E.f,Z=C("symbols"),_=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=o.QObject,ot=!nt||!nt[I]||!nt[I].findChild,it=u&&s((function(){return 7!=g(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(Q,e);n&&delete Q[e],U(t,e,r),n&&t!==Q&&U(Q,e,n)}:U,ct=function(t,e){var r=Z[t]=g(W[I]);return $(r,{type:J,tag:t,description:e}),u||(r.description=e),r},ut=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ft=function(t,e,r){t===Q&&ft(_,e,r),p(t);var n=h(e,!0);return p(r),b(Z,n)?(r.enumerable?(b(t,H)&&t[H][n]&&(t[H][n]=!1),r=g(r,{enumerable:O(0,!1)})):(b(t,H)||U(t,H,O(1,{})),t[H][n]=!0),it(t,n,r)):U(t,n,r)},at=function(t,e){p(t);var r=y(e),n=m(r).concat(pt(r));return F(n,(function(e){u&&!bt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?g(t):at(g(t),e)},bt=function(t){var e=h(t,!0),r=Y.call(this,e);return!(this===Q&&b(Z,e)&&!b(_,e))&&(!(r||!b(this,e)||!b(Z,e)||b(this,H)&&this[H][e])||r)},lt=function(t,e){var r=y(t),n=h(e,!0);if(r!==Q||!b(Z,n)||b(_,n)){var o=K(r,n);return!o||!b(Z,n)||b(r,H)&&r[H][n]||(o.enumerable=!0),o}},dt=function(t){var e=X(y(t)),r=[];return F(e,(function(t){b(Z,t)||b(k,t)||r.push(t)})),r},pt=function(t){var e=t===Q,r=X(e?_:y(t)),n=[];return F(r,(function(t){!b(Z,t)||e&&!b(Q,t)||n.push(Z[t])})),n};if(f||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===Q&&r.call(_,t),b(this,H)&&b(this[H],e)&&(this[H][e]=!1),it(this,e,O(1,t))};return u&&ot&&it(Q,e,{configurable:!0,set:r}),ct(e,t)},T(W[I],"toString",(function(){return q(this).tag})),T(W,"withoutSetter",(function(t){return ct(A(t),t)})),E.f=bt,P.f=ft,L.f=lt,j.f=S.f=dt,w.f=pt,M.f=function(t){return ct(D(t),t)},u&&(U(W[I],"description",{configurable:!0,get:function(){return q(this).description}}),c||T(Q,"propertyIsEnumerable",bt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:W}),F(m(rt),(function(t){V(t)})),n({target:J,stat:!0,forced:!f},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!u},{create:st,defineProperty:ft,defineProperties:at,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),z){var vt=!f||s((function(){var t=W();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!ut(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ut(e))return e}),o[1]=e,z.apply(null,o)}})}W[I][B]||x(W[I],B,W[I].valueOf),G(W,J),k[H]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),c=Object.defineProperty,u={},f=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var r=[][t],a=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:f,b=i(e,1)?e[1]:void 0;return u[t]=!!r&&!o((function(){if(a&&!n)return!0;var t={length:-1};a?c(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,b)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),u=c((function(){i(1)}));n({target:"Object",stat:!0,forced:u},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),u=r("65f0"),f=[].push,a=function(t){var e=1==t,r=2==t,a=3==t,s=4==t,b=6==t,l=5==t||b;return function(d,p,v,y){for(var h,O,g=i(d),m=o(g),j=n(p,v,3),S=c(m.length),w=0,L=y||u,P=e?L(d,S):r?L(d,0):void 0;S>w;w++)if((l||w in m)&&(h=m[w],O=j(h,w,g),t))if(e)P[w]=O;else if(O)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:f.call(P,h)}else if(s)return!1;return b?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),u=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=u.f,a=i(n),s={},b=0;while(a.length>b)r=o(n,e=a[b++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,u=r("83ab"),f=o((function(){c(1)})),a=!u||f;n({target:"Object",stat:!0,forced:a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
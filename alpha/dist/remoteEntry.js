var alpha;!function(){"use strict";var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))},o.u=function(e){return e+".js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="alpha:",o.l=function(r,n,i,a){if(e[r])e[r].push(n);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[n];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={487:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=i);var a=o.p+o.u(t),u=new Error;o.l(a,(function(r){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,n[1](u)}}),"chunk-"+t,t)}};var t=function(t,r){var n,i,a=r[0],u=r[1],c=r[2],l=0;for(n in u)o.o(u,n)&&(o.m[n]=u[n]);for(c&&c(o),t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0},r=self.webpackChunkalpha=self.webpackChunkalpha||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var i,a,u,c,l={};i=l,a={"./Button":function(){return o.e(921).then((function(){return function(){return o(921)}}))}},u=function(e,t){return o.R=t,t=o.o(a,e)?a[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),o.R=void 0,t},c=function(e,t){if(o.S){var r=o.S.default,n="default";if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return o.S[n]=e,o.I(n,t)}},o.d(i,{get:function(){return u},init:function(){return c}}),alpha=l}();
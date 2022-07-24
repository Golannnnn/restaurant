(()=>{"use strict";var n={751:(n,e,t)=>{t.d(e,{Z:()=>l});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),d=t(667),s=t.n(d),c=new URL(t(538),t.b),m=r()(o()),p=s()(c);m.push([n.id,".about-main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    min-height: 100vh;\n    background-image: url("+p+");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-color: var(--body-bg-color);\n}\n\n.about-main::after {\n    content: '';\n    position: absolute;\n    left: 0; top: 0;\n    width: 100%; \n    height: 100%;\n    background: linear-gradient(to top, rgba(0,0,0,0.0) 90%, var(--body-bg-color) 100%);\n    \n}\n\n.about-heading {\n    margin-top: 40px;\n    color: black;\n    font-family: 'Montserrat_bold';\n    font-size: 3rem;\n}\n\n.about-paragraph {\n    margin-top: 25px;\n    font-size: 1.5rem;\n    font-family: 'Montserrat_bold';\n    color: var(--theme-color);\n}\n\n.about-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--body-bg-color);\n}\n\n.about-section-heading {\n    margin: 160px 30px 30px 30px;\n    font-size: 2.5rem;\n    font-family: 'Montserrat_bold';\n}\n\n.about-history-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-top: 120px;\n}\n\n.about-text-container {\n    display: flex;\n    flex-direction: column;\n    margin: 40px;\n    max-width: 400px;\n}\n\n.about-text-heading {\n    margin-bottom: 15px;\n    border-bottom: 1px solid var(--theme-color);\n}\n\n.about-img-wrap {\n    width: 100%;\n    max-width: 550px;\n    height: auto;\n    margin: 40px;\n    box-shadow: 25px -25px #cfcfc2;\n}\n\n\n.about-img {\n    max-width: 100%;\n}\n\n/* second row */\n\n.about-history-container2 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 120px 0px 120px 0px;\n}\n\n.about-text-container2 {\n    display: flex;\n    flex-direction: column;\n    margin: 40px;\n    max-width: 400px;\n}\n\n.about-text-heading2 {\n    margin-bottom: 15px;\n    border-bottom: 1px solid var(--theme-color);\n}\n\n.about-img-wrap2 {\n    width: 100%;\n    max-width: 550px;\n    height: auto;\n    margin: 40px;\n    box-shadow: -25px -25px 0px 1px #cfcfc2;\n}\n\n.about-img2 {\n    max-width: 100%;\n}\n\n@media only screen and (max-width: 800px) {\n    .about-heading {\n        font-size: 2rem;\n        text-align: center;\n    }\n\n    .about-paragraph {\n        font-size: 1.5rem;\n    }\n\n    .about-section-heading {\n        margin: 70px 20px 20px 20px;\n        font-size: 2rem;\n    }\n\n    .about-history-container {\n        flex-direction: column;\n        margin: 20px 50px 20px 20px;\n    }\n\n    .about-history-container2 {\n        flex-direction: column;\n        margin: 20px 20px 20px 50px;\n    }\n\n    .about-text-container {\n        margin: 10px;\n    }\n\n    .about-text-container2 {\n        margin: 10px;\n    }\n\n    .about-img-wrap {\n        margin: 40px 20px 20px 20px;\n    }\n\n    .about-img-wrap2 {\n        margin: 40px 20px 20px 20px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .about-heading {\n        font-size: 1.5rem;\n        text-align: center;\n    }\n\n    .about-paragraph {\n        font-size: 1rem;\n    }\n\n    .about-section-heading {\n        margin: 70px 20px 20px 20px;\n        font-size: 1.5rem;\n    }\n\n    .about-history-container {\n        margin: 20px 50px 20px 20px;\n    }\n\n    .about-history-container2 {\n        margin: 20px 20px 20px 50px;\n    }\n\n    .about-text-container {\n        margin: 10px;\n    }\n\n    .about-text-container2 {\n        margin: 10px;\n    }\n\n    .about-img-wrap {\n        margin: 40px 20px 20px 20px;\n    }\n\n    .about-img-wrap2 {\n        margin: 40px 20px 20px 20px;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    .about-heading {\n        font-size: 1.5rem;\n        text-align: center;\n    }\n\n    .about-paragraph {\n        font-size: 1rem;\n    }\n\n    .about-section-heading {\n        margin: 70px 20px 20px 20px;\n        font-size: 1.5rem;\n    }\n\n    .about-history-container {\n        margin: 20px 50px 20px 20px;\n    }\n\n    .about-history-container2 {\n        margin: 20px 20px 20px 50px;\n    }\n\n    .about-text-container {\n        margin: 10px;\n    }\n\n    .about-text-container2 {\n        margin: 10px;\n    }\n\n    .about-img-wrap {\n        margin: 40px 20px 20px 20px;\n    }\n\n    .about-img-wrap2 {\n        margin: 40px 20px 20px 20px;\n    }\n}",""]);const l=m},301:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,".home-main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* first section */\n\n.home-section {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 30px 20px 0px 20px;\n}\n\n.home-img-wrap {\n    position: relative;\n    width: 100%;\n    max-width: 450px;\n    height: auto;\n    margin: 20px 20px 0px 20px;\n}\n\n.home-img-wrap::after {\n    content: '';\n    position: absolute;\n    left: 0; top: 0;\n    width: 100%; \n    height: 100%;\n    background: linear-gradient(to right, rgba(0,0,0,0.0) 60%, var(--body-bg-color) 100%);\n    box-shadow: -20px 0px 20px -20px black;\n}\n\n.home-img {\n    max-width: 100%;\n}   \n\n.home-text-container {\n    display: flex;\n    flex-direction: column;\n    margin: 20px 20px 0px 20px;\n}\n\n.home-heading {\n    font-size: 3.5rem;\n    color: black;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.home-paragraph {\n    font-size: 1rem;\n    color: var(--theme-color);\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n/* second section */\n\n.home-section2 {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 0px 20px 20px 20px;\n}\n\n.home-text-container2 {\n    display: flex;\n    flex-direction: column;\n}\n\n.home-img-wrap2 {\n    position: relative;\n    width: 100%;\n    max-width: 450px;\n    height: auto;\n}\n\n.home-img-wrap2::after {\n    content: '';\n    position: absolute;\n    left: 0; top: 0;\n    width: 100%; \n    height: 100%;\n    background: linear-gradient(to left, rgba(0,0,0,0.0) 60%, var(--body-bg-color) 100%);\n    box-shadow: 20px 0px 20px -20px black;\n}\n\n@media only screen and (max-width: 800px) {\n    .home-section {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .home-img-wrap {\n        max-width: 500px;\n        margin: 20px 50px 0px 50px;\n    }\n\n    .home-img-wrap::after {\n        background: linear-gradient(to bottom, rgba(0,0,0,0.0) 60%, var(--body-bg-color) 95%);\n        box-shadow: 5px -30px 30px -30px black;\n    }\n\n    .home-text-container {\n        margin: -10px 20px 100px 20px;\n    }\n\n    .home-section2 {\n        flex-wrap: wrap;\n    }\n\n    .home-img-wrap2 {\n        max-width: 500px;\n        margin: 20px 50px 0px 50px;\n    }\n\n    .home-img-wrap2::after {\n        background: linear-gradient(to bottom, rgba(0,0,0,0.0) 60%, var(--body-bg-color) 95%);\n        box-shadow: 5px -30px 30px -30px black;\n    }\n\n    .home-text-container2 {\n        margin: -10px 20px 50px 20px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .home-heading {\n        font-size: 2.5rem;\n    }\n    \n    .home-paragraph {\n        font-size: 1rem;\n        color: var(--theme-color);\n    }\n\n    .home-img-wrap {\n        max-width: 500px;\n        margin: 20px 0px 0px 0px;\n    }\n\n    .home-img-wrap2 {\n        max-width: 500px;\n        margin: 20px 0px 0px 0px;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    .home-text-container {\n        margin: 0px 20px 70px 20px;\n    }\n\n    .home-text-container2 {\n        margin: 0px 20px 50px 20px;\n    }\n\n    .home-heading {\n        font-size: 1.5rem;\n    }\n    \n    .home-paragraph {\n        font-size: 1rem;\n        color: var(--theme-color);\n    }\n\n    .home-img-wrap {\n        max-width: 500px;\n        margin: 20px 0px 0px 0px;\n    }\n\n    .home-img-wrap2 {\n        max-width: 500px;\n        margin: 0px;\n    }\n}",""]);const d=r},424:(n,e,t)=>{t.d(e,{Z:()=>L});var a=t(81),o=t.n(a),i=t(645),r=t.n(i),d=t(667),s=t.n(d),c=new URL(t(572),t.b),m=new URL(t(647),t.b),p=new URL(t(838),t.b),l=new URL(t(930),t.b),x=new URL(t(592),t.b),u=new URL(t(519),t.b),h=r()(o()),g=s()(c),f=s()(m),b=s()(p),w=s()(l),y=s()(x),v=s()(u);h.push([n.id,"@font-face {\n    font-family: 'Montserrat_medium';\n    src: url("+g+") format('woff2'),\n      url("+f+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat_bold';\n    src: url("+b+") format('woff2'),\n      url("+w+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Montserrat_light_italic';\n    src: url("+y+") format('woff2'),\n      url("+v+") format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\n*,\n*:before,\n*:after { \n    box-sizing: border-box; \n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --body-bg-color: #f9f6e7;\n    --theme-color: rgb(245, 58, 58);\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--body-bg-color);\n    font-family: 'Montserrat_medium';\n}\n\n#content {\n    min-height: 100vh;\n}\n\n/* index */\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 20px;\n}\n\nheader .logo {\n    font-size: 1.5rem;\n    margin: 30px;\n}\n\nheader .link-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\nheader .link-container > * {\n    font-size: 1.2rem;\n    margin: 15px;\n    padding: 15px;\n}\n\nheader .link-container > *:hover {\n    background-color: var(--theme-color);\n    color: var(--body-bg-color);\n    cursor: pointer;\n}\n\nheader .link-container > .active-module {\n    border-bottom: 1px solid var(--theme-color);\n    padding-bottom: 14px;\n}\n\n@media only screen and (max-width: 600px) {\n    header {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin: 0px;\n    }\n\n    header.logo {\n        font-size: 1.2rem;\n        margin: 5px;\n    }\n\n    header .link-container > * {\n        font-size: 1rem;\n        margin: 15px;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    header {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin: 0px;\n    }\n\n    header.logo {\n        font-size: 1.2rem;\n        margin: 0px;\n    }\n\n    header .link-container > * {\n        font-size: 1rem;\n        margin: 5px;\n    }\n}",""]);const L=h},83:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,".menu-main {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 70px 20px 20px 20px;\n}\n\n.menu-container {\n    padding: 15px 15px 15px 15px;\n    background-color: #e4e2d3;\n}\n\n.menu-heading {\n    color: var(--theme-color);\n    border-bottom: 1px solid;\n}\n\n.menu-title {\n    font-family: 'Montserrat_medium';\n    margin-top: 25px;\n}\n\n.menu-para {\n    font-family: 'Montserrat_light_italic';\n    margin-left: 10px;\n}\n\n.menu-aside-container {\n    margin: 14px;\n}\n\n.aside-img-wrap {\n    display: grid;\n    grid: 1fr 1fr / 1fr 1fr;\n    gap: 15px;\n    margin-top: 20px;\n}\n\n.aside-img {\n    width: 100%;\n    max-width: 200px;\n    height: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n}\n\n@media only screen and (max-width: 800px) {\n    .menu-aside-container {\n        margin: 50px 14px 50px 14px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .menu-aside-container {\n        margin: 50px 14px 50px 14px;\n    }\n\n    .menu-heading {\n        font-size: 1.5rem;\n    }\n\n    .menu-para {\n        font-size: 1rem;\n    }\n\n    .menu-aside-heading {\n        font-size: 1.5rem;\n    }\n\n    .menu-aside-para {\n        font-size: 1rem;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    .menu-main {\n        margin: 50px 20px 20px 20px;\n    }\n\n    .menu-aside-container {\n        margin: 50px 14px 50px 14px;\n    }\n\n    .menu-heading {\n        font-size: 1.5rem;\n    }\n\n    .menu-para {\n        font-size: 1rem;\n    }\n\n    .menu-aside-heading {\n        font-size: 1.5rem;\n    }\n\n    .menu-aside-para {\n        font-size: 1rem;\n    }\n}",""]);const d=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var m=[].concat(n[c]);a&&r[m[0]]||(void 0!==i&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=i),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),e.push(m))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],d=0;d<n.length;d++){var s=n[d],c=a.base?s[0]+a.base:s[0],m=i[c]||0,p="".concat(c," ").concat(m);i[c]=m+1;var l=t(p),x={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(x);else{var u=o(x,a);a.byIndex=d,e.splice(d,0,{identifier:p,updater:u,references:1})}r.push(p)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var d=t(i[r]);e[d].references--}for(var s=a(n,o),c=0;c<i.length;c++){var m=t(i[c]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},930:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_bold.woff"},838:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_bold.woff2"},519:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_light_italic.woff"},592:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_light_italic.woff2"},647:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_medium.woff"},572:(n,e,t)=>{n.exports=t.p+"fonts/montserrat_medium.woff2"},538:(n,e,t)=>{n.exports=t.p+"images/sunset_boats.jpg"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),i=t(569),r=t.n(i),d=t(565),s=t.n(d),c=t(216),m=t.n(c),p=t(589),l=t.n(p),x=t(424),u={};u.styleTagTransform=l(),u.setAttributes=s(),u.insert=r().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=m(),e()(x.Z,u),x.Z&&x.Z.locals&&x.Z.locals;var h=t(301),g={};g.styleTagTransform=l(),g.setAttributes=s(),g.insert=r().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=m(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=t.p+"images/kitchen.jpg",b=t.p+"images/restaurant.jpg",w=()=>{const n=document.querySelector("#content"),e=document.createElement("main"),t=document.createElement("section"),a=document.createElement("div"),o=document.createElement("img"),i=document.createElement("div"),r=document.createElement("h1"),d=document.createElement("p"),s=document.createElement("section"),c=document.createElement("div"),m=document.createElement("h1"),p=document.createElement("p"),l=document.createElement("div"),x=document.createElement("img"),u=window.matchMedia("(min-width: 800px)"),h=window.matchMedia("(max-width: 800px)");e.classList.add("home-main"),t.classList.add("home-section"),a.classList.add("home-img-wrap"),o.src=f,o.classList.add("home-img"),i.classList.add("home-text-container"),r.classList.add("home-heading"),d.classList.add("home-paragraph"),s.classList.add("home-section2"),c.classList.add("home-text-container2"),m.classList.add("home-heading"),p.classList.add("home-paragraph"),l.classList.add("home-img-wrap2"),x.src=b,x.classList.add("home-img"),r.textContent="The kitchen.",d.textContent="Where the magic happens.",m.textContent="The restaurant.",p.textContent="Experience the magic.",n.appendChild(e),e.append(t,s),t.append(a,i),a.append(o),i.append(r,d),h.matches?s.append(l,c):s.append(c,l),c.append(m,p),l.append(x),h.addEventListener("change",(n=>{n.matches&&s.append(l,c)})),u.addEventListener("change",(n=>{n.matches&&s.append(c,l)}))};var y=t(83),v={};v.styleTagTransform=l(),v.setAttributes=s(),v.insert=r().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=m(),e()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const L=t.p+"images/image0.jpg",E=t.p+"images/image1.jpg",k=t.p+"images/image2.jpg",z=t.p+"images/image3.jpg",C=t.p+"images/image4.jpg",j=t.p+"images/image5.jpg";var M=t(751),_={};_.styleTagTransform=l(),_.setAttributes=s(),_.insert=r().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=m(),e()(M.Z,_),M.Z&&M.Z.locals&&M.Z.locals;const S=t.p+"images/landscape.jpg",T=t.p+"images/garden.jpg",Z=(()=>{const n=document.createElement("div"),e=document.createElement("header"),t=document.createElement("p"),a=document.createElement("div"),o=document.createElement("p"),i=document.createElement("p"),r=document.createElement("p");return n.setAttribute("id","content"),t.classList.add("logo"),a.classList.add("link-container"),o.classList.add("home-link"),i.classList.add("menu-link"),r.classList.add("about-link"),t.textContent="Golannnnn",o.textContent="Home",i.textContent="Menu",r.textContent="About",document.body.append(n),n.appendChild(e),e.appendChild(t),e.appendChild(a),a.append(o,i,r),{content:n,header:e,linkContainer:a,home:o,menu:i,about:r}})();(()=>{const{content:n,header:e,linkContainer:t,home:a,menu:o,about:i}=Z,r=()=>{for(;n.childNodes.length>1;)n.removeChild(n.lastChild)},d=n=>{const e=t.children;for(let t=0;t<e.length;t++)e[t]===n&&e[t].classList.add("active-module"),e[t]!==n&&e[t].classList.remove("active-module")};w(),a.classList.add("active-module"),e.addEventListener("click",(e=>{const t=document.querySelector(".home-main"),s=document.querySelector(".menu-main"),c=document.querySelector(".about-main");switch(e.target){case a:n.contains(t)||(r(),w(),d(a));break;case o:n.contains(s)||(r(),(()=>{const n=document.querySelector("#content"),e=document.createElement("main"),t=document.createElement("div"),a=document.createElement("h1"),o=document.createElement("div"),i=document.createElement("h1"),r=document.createElement("p"),d=document.createElement("div");e.classList.add("menu-main"),t.classList.add("menu-container"),a.classList.add("menu-heading"),o.classList.add("menu-aside-container"),i.classList.add("menu-aside-heading"),r.classList.add("menu-aside-para"),d.classList.add("aside-img-wrap"),a.textContent="Mains",i.textContent="We create art.",r.textContent="and we serve it with love.",n.appendChild(e),e.append(t,o),t.append(a),o.append(i,r,d);const s=["Risotto","Lasagne","Spagetti","Pasta","Polenta","Pizza","Steak"],c=["Freshly made risotto with home-made ingredients.","Freshly made lasagne with home-made ingredients.","Freshly made spagetti with home-made ingredients.","Freshly made pasta with home-made ingredients.","Freshly made polenta with home-made ingredients.","Freshly made pizza with home-made ingredients.","Freshly made steak with home-made ingredients."];for(let n=0;n<7;n++){let e=document.createElement("p"),a=document.createElement("p");e.classList.add("menu-title"),a.classList.add("menu-para"),e.textContent=s[n],a.textContent=c[n],t.append(e,a)}const m=[L,E,k,z,C,j];let p=[];for(let n=0;n<6;n++)p[n]=document.createElement("img"),p[n].classList.add("aside-img"),p[n].src=m[n],d.append(p[n])})(),d(o));break;case i:n.contains(c)||(r(),(()=>{const n=document.querySelector("#content"),e=document.createElement("main"),t=document.createElement("h1"),a=document.createElement("p"),o=document.createElement("section"),i=document.createElement("h1"),r=document.createElement("div"),d=document.createElement("div"),s=document.createElement("h2"),c=document.createElement("p"),m=document.createElement("div"),p=document.createElement("img"),l=document.createElement("div"),x=document.createElement("div"),u=document.createElement("h2"),h=document.createElement("p"),g=document.createElement("div"),f=document.createElement("img"),b=window.matchMedia("(min-width: 800px)"),w=window.matchMedia("(max-width: 800px)");e.classList.add("about-main"),t.classList.add("about-heading"),a.classList.add("about-paragraph"),o.classList.add("about-section"),i.classList.add("about-section-heading"),r.classList.add("about-history-container"),d.classList.add("about-text-container"),s.classList.add("about-text-heading"),c.classList.add("about-text-paragraph"),m.classList.add("about-img-wrap"),p.classList.add("about-img"),p.src=S,l.classList.add("about-history-container2"),x.classList.add("about-text-container2"),u.classList.add("about-text-heading2"),h.classList.add("about-text-paragraph2"),g.classList.add("about-img-wrap2"),f.classList.add("about-img2"),f.src=T,t.textContent="This is where it all started.",a.textContent="Scroll down to learn more.",i.textContent="Our History.",s.textContent="The road into town.",c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",u.textContent="The family garden.",h.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",n.append(e,o),e.append(t,a),o.append(i,r,l),w.matches?r.append(m,d):r.append(d,m),d.append(s,c),m.append(p),l.append(g,x),x.append(u,h),g.append(f),w.addEventListener("change",(n=>{n.matches&&r.append(m,d)})),b.addEventListener("change",(n=>{n.matches&&r.append(d,m)}))})(),d(i))}}))})()})()})();
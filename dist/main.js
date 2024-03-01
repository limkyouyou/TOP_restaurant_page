(()=>{"use strict";var n={354:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"\n\n\n#welcome_msg {\n  font-size: 30px;\n  color: #2c2c2b;\n}\n\n#img_container {\n  margin: 40px 0 40px 0;\n}\n\n#front_img {\n  width: 400px;\n}\n\n#front_description {\n  color: #2c2c2b;\n}",""]);const c=i},858:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),l=new URL(t(497),t.b),d=new URL(t(146),t.b),u=i()(r()),p=s()(l),m=s()(d);u.push([n.id,`\n@font-face {\n  font-family: 'roboto-regular';\n  src: url(${p});\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'roboto-bold';\n  src: url(${m});\n  font-style: bold;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'roboto-regular';\n}\n\n[class*="col-"] {\n  float: left;\n  width: 100%;\n}\n\n@media only screen and (min-width: 1100px) {\n  body {\n    display: flex;\n    justify-content: center;\n  }\n\n  #main_container {\n    width: 1100px;\n  }\n\n  #content {\n    margin: 0 20px 0 20px;\n  }\n\n}\n\n#main_container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF8F0;\n}\n\nheader {\n  padding-top: 0;\n}\n\n#logo_container {\n  padding: 30px 0 30px 0;\n\n}\n\n#logo_img {\n  width: 150px;\n  display: block;\n  margin: 0 auto 0 auto;\n}\n\nnav {\n  margin-top: 5px;\n  padding: 0px 13px 0 13px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\nnav button {\n  width: 100px;\n  height: 30px;\n  padding-top: 5px;\n  border-style: hidden;\n  background-color: #FFF8F0;\n  color: #4A4A48;\n  font-family: 'roboto-bold';\n  font-size: 18px;\n}\n\n.active,\nnav button:hover {\n  border-style: solid solid none solid;\n  border-width: 1px 1px 1px 1px;\n  border-color: #FFF8F0;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  background-color: #FF908B;\n  color: #FFF8F0;\n  cursor: pointer;\n}\n\n#content {\n  flex: auto;\n  padding: 60px 30px 40px 30px;\n  border-radius: 13px;\n  background-color: #FF908B;\n  text-align: center;\n}\n\nfooter {\n  text-align: center;\n  vertical-align: middle;\n  padding: 25px 0 35px 0;\n}\n\nfooter a {\n  color: #4A4A48;\n}\n\nfooter a:hover {\n  color: #80806b;\n}`,""]);const f=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},146:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},497:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),l=t(540),d=t.n(l),u=t(113),p=t.n(u),m=t(858),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=t.p+"457e447721227da5eaf3.jpg";var g=t(354),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),e()(g.A,v),g.A&&g.A.locals&&g.A.locals;const b=n=>{const e=document.createElement("div");e.classList.add("content_container");const t=document.createElement("div");t.id="welcome_content";const o=document.createElement("h2");o.id="welcome_msg",o.classList.add("welcome_msg"),o.textContent="Welcome to Lorem Ipsum";const r=document.createElement("div");r.id="img_container";const a=new Image;a.src=h,a.id="front_img",r.appendChild(a),r.innerHTML+='<p>Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>';const i=document.createElement("p");i.id="front_description",i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies ante lectus, et rhoncus erat ultricies eu. Nullam ante arcu, iaculis in molestie sed, mollis eu massa. Maecenas lorem eros, dapibus quis nisl nec, fermentum cursus elit. Proin sit amet nisl iaculis, congue quam eget, rhoncus est. Sed placerat urna sed libero vestibulum, sed posuere elit lobortis. Vestibulum eu gravida lorem. Vivamus nunc urna, tincidunt at interdum euismod, molestie et est. In vitae bibendum ligula, sit amet laoreet mauris.",t.appendChild(o),t.appendChild(r),t.appendChild(i),e.appendChild(t),n.appendChild(e)},x=t.p+"b7657416f7a22ae43487.png";!function(){const n=document.getElementById("logo_container"),e=new Image;e.src=x,e.id="logo_img",n.appendChild(e);const t=document.getElementById("content");b(t);const o=document.getElementById("footer_container"),r=document.createElement("a");r.textContent="Privacy Policy",r.href="",o.appendChild(r);const a=document.getElementsByClassName("nav_btn");function i(){for(let n of a)n.classList.remove("active")}function c(){for(;t.firstChild;)t.removeChild(t.lastChild)}const s=document.getElementById("home_btn");s.addEventListener("click",(()=>{i(),s.classList.add("active"),c(),b(t)}));const l=document.getElementById("menu_btn");l.addEventListener("click",(()=>{i(),l.classList.add("active"),c()}));const d=document.getElementById("book_btn");d.addEventListener("click",(()=>{i(),d.classList.add("active"),c()}));const u=document.getElementById("contact_btn");u.addEventListener("click",(()=>{i(),u.classList.add("active"),c()}))}()})()})();
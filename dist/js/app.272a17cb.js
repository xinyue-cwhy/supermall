(function(t){function e(e){for(var n,a,i=e[0],s=e[1],u=e[2],l=0,b=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b363b":"f6e4d93e","chunk-2d0df247":"99402106","chunk-2d0e5752":"6a2d5165","chunk-3bfe843a":"15e354cf","chunk-29ce96a7":"c6876a69","chunk-687dec9d":"a7806d97"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-3bfe843a":1,"chunk-29ce96a7":1,"chunk-687dec9d":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0b363b":"31d6cfe0","chunk-2d0df247":"31d6cfe0","chunk-2d0e5752":"31d6cfe0","chunk-3bfe843a":"51b0c729","chunk-29ce96a7":"18c89dcc","chunk-687dec9d":"9e203a31"}[t]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){u=b[i],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],f.parentNode.removeChild(f),r(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var b=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",b.name="ChunkLoadError",b.type=n,b.request=a,r[1](b)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"1f92":function(t,e,r){t.exports=r.p+"img/cart_active.3f0a2016.svg"},"29f9":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("keep-alive",{attrs:{exclude:"detail"}},[r("router-view")],1),r("maintabbar")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tabbar",[n("tabbaritems",{attrs:{path:"/home",activetextcolor:"deepPink"}},[n("img",{attrs:{slot:"tabbar-icon",src:r("9443"),alt:""},slot:"tabbar-icon"}),n("img",{attrs:{slot:"tabbar-icon-active",src:r("b508"),alt:""},slot:"tabbar-icon-active"}),n("div",{attrs:{slot:"tabbar-text"},slot:"tabbar-text"},[t._v("首页")])]),n("tabbaritems",{attrs:{path:"/caregory",activetextcolor:"deepPink"}},[n("img",{attrs:{slot:"tabbar-icon",src:r("57cd"),alt:""},slot:"tabbar-icon"}),n("img",{attrs:{slot:"tabbar-icon-active",src:r("a5ef"),alt:""},slot:"tabbar-icon-active"}),n("div",{attrs:{slot:"tabbar-text"},slot:"tabbar-text"},[t._v("分类")])]),n("tabbaritems",{attrs:{path:"/cart",activetextcolor:"deepPink"}},[n("img",{attrs:{slot:"tabbar-icon",src:r("d1c9"),alt:""},slot:"tabbar-icon"}),n("img",{attrs:{slot:"tabbar-icon-active",src:r("1f92"),alt:""},slot:"tabbar-icon-active"}),n("div",{attrs:{slot:"tabbar-text"},slot:"tabbar-text"},[t._v("购物车")])]),n("tabbaritems",{attrs:{path:"/profile",activetextcolor:"deepPink"}},[n("img",{attrs:{slot:"tabbar-icon",src:r("e55d"),alt:""},slot:"tabbar-icon"}),n("img",{attrs:{slot:"tabbar-icon-active",src:r("d151"),alt:""},slot:"tabbar-icon-active"}),n("div",{attrs:{slot:"tabbar-text"},slot:"tabbar-text"},[t._v("我的")])])],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tabbar"}},[t._t("default")],2)},u=[],l={name:"tabbar"},b=l,f=(r("8505"),r("2877")),d=Object(f["a"])(b,s,u,!1,null,"eb6af3a6",null),p=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tabbar-items",on:{click:t.up}},[t.isActive?r("div",[t._t("tabbar-icon-active")],2):r("div",[t._t("tabbar-icon")],2),r("div",{style:t.textcolor},[t._t("tabbar-text")],2)])},v=[],m=(r("c975"),{name:"tabbaritems",props:{path:String,activetextcolor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},textcolor:function(){return this.isActive?{color:this.activetextcolor}:{}}},methods:{up:function(){this.$router.push(this.path)}}}),g=m,x=(r("8822"),Object(f["a"])(g,h,v,!1,null,"5c6f5f8a",null)),k=x.exports,y={name:"maintabbar",components:{tabbar:p,tabbaritems:k}},_=y,w=Object(f["a"])(_,c,i,!1,null,"43f3c4f3",null),O=w.exports,P={name:"App",components:{maintabbar:O}},j=P,E=(r("034f"),Object(f["a"])(j,a,o,!1,null,null,null)),S=E.exports,A=(r("d3b7"),r("8c4f"));n["a"].use(A["a"]);var C=function(){return Promise.all([r.e("chunk-3bfe843a"),r.e("chunk-29ce96a7")]).then(r.bind(null,"77b8"))},T=function(){return r.e("chunk-2d0b363b").then(r.bind(null,"27bb"))},$=function(){return r.e("chunk-2d0e5752").then(r.bind(null,"9522"))},L=function(){return r.e("chunk-2d0df247").then(r.bind(null,"893c"))},N=function(){return Promise.all([r.e("chunk-3bfe843a"),r.e("chunk-687dec9d")]).then(r.bind(null,"7be8"))},M=[{path:"/",redirect:"/home"},{path:"/home",component:C},{path:"/caregory",component:T},{path:"/cart",component:$},{path:"/profile",component:L},{path:"/detail/:iid",component:N}],B=new A["a"]({routes:M,base:""}),q=B;n["a"].config.productionTip=!1,n["a"].prototype.$bus=new n["a"],new n["a"]({render:function(t){return t(S)},router:q}).$mount("#app")},"57cd":function(t,e,r){t.exports=r.p+"img/category.12bedb89.svg"},8505:function(t,e,r){"use strict";r("e70d")},"85ec":function(t,e,r){},8822:function(t,e,r){"use strict";r("29f9")},9443:function(t,e,r){t.exports=r.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,r){t.exports=r.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,r){t.exports=r.p+"img/home_active.cc40b6f2.svg"},d151:function(t,e,r){t.exports=r.p+"img/profile_active.fd66b281.svg"},d1c9:function(t,e,r){t.exports=r.p+"img/cart.c68224ce.svg"},e55d:function(t,e,r){t.exports=r.p+"img/profile.42d7cf12.svg"},e70d:function(t,e,r){}});
//# sourceMappingURL=app.272a17cb.js.map
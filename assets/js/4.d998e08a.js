(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{501:function(t,e,n){t.exports=n(502)},502:function(t,e){var n,a,o,c,i,u,s,d=!1,l=[];"undefined"!=typeof document&&(c=function(t){return d||"interactive"===document.readyState||"complete"===document.readyState?t.call(document):l.push((function(){return t.call(this)})),this},u=function(){for(var t=0,e=l.length;t<e;t++)l[t].apply(document);l=[]},s=function(){d||(d=!0,u.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",s,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",s),window==window.top&&(clearInterval(i),i=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",s,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){/loaded|complete/.test(document.readyState)&&s()})),window==window.top&&(i=setInterval((function(){try{d||document.documentElement.doScroll("left")}catch(t){return}s()}),5)))),n={fetch:function(t,e){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random());t=t.replace("=BusuanziCallback","="+n),(o=document.createElement("SCRIPT")).type="text/javascript",o.defer=!0,o.src=t,document.getElementsByTagName("HEAD")[0].appendChild(o),window[n]=this.evalCall(e)},evalCall:function(t){return function(e){c((function(){try{t(e),o&&o.parentElement&&o.parentElement.removeChild&&o.parentElement.removeChild(o)}catch(t){console.log(t),a.hides()}}))}}};const r=()=>{a&&a.hides(),n.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(t){a.texts(t),a.shows()}))};a={bszs:["site_pv","page_pv","site_uv"],texts:function(t){this.bszs.map((function(e){var n=document.getElementById("busuanzi_value_"+e);n&&(n.innerHTML=t[e])}))},hides:function(){this.bszs.map((function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="none")}))},shows:function(){this.bszs.map((function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="inline")}))}},"undefined"!=typeof document&&r(),t.exports={fetch:r}},509:function(t,e,n){"use strict";n.r(e);var a,o={mounted:function(){a=n(501)},watch:{$route:function(t,e){t.path!=e.path&&a.fetch()}}},c=n(25),i=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"busuanzi"},[e("span",{attrs:{id:"busuanzi_container_site_pv"}},[this._v("本站总访问量"),e("span",{attrs:{id:"busuanzi_value_site_pv"}}),this._v("次")])])}],!1,null,null,null);e.default=i.exports}}]);
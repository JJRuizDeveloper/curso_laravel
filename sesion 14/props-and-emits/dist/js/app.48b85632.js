(function(){"use strict";var n={4197:function(n,t,r){var e=r(9242),o=r(3396);function i(n,t,r,e,i,u){const a=(0,o.up)("ChildComponent");return(0,o.wg)(),(0,o.j4)(a,{onSayHi:n.showAlert},null,8,["onSayHi"])}function u(n,t,r,i,u,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>n.msg=t)},null,512),[[e.nr,n.msg]]),(0,o._)("button",{onClick:t[1]||(t[1]=(...t)=>n.notify&&n.notify(...t))},"Notify parent")],64)}var a=r(4870),f=(0,o.aZ)({name:"ChildComponent",emits:["sayHi"],setup(n,{emit:t}){let r=(0,a.iH)("");function e(){t("sayHi",r.value)}return{msg:r,notify:e}}}),c=r(89);const s=(0,c.Z)(f,[["render",u]]);var l=s,p=(0,o.aZ)({name:"ParentComponent",components:{ChildComponent:l},setup(){function n(n){alert(n)}return{showAlert:n}}});const v=(0,c.Z)(p,[["render",i]]);var d=v,m={__name:"App",setup(n){return(n,t)=>((0,o.wg)(),(0,o.j4)(d))}};const h=m;var y=h;(0,e.ri)(y).mount("#app")}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,i){if(!e){var u=1/0;for(s=0;s<n.length;s++){e=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,f=0;f<e.length;f++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](e[f])}))?e.splice(f--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,o,i]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,i,u=e[0],a=e[1],f=e[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(f)var s=f(r)}for(t&&t(e);c<u.length;c++)i=u[c],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(s)},e=self["webpackChunkprops_and_emits"]=self["webpackChunkprops_and_emits"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(4197)}));e=r.O(e)})();
//# sourceMappingURL=app.48b85632.js.map
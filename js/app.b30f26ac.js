(function(){"use strict";var e={5131:function(e,n,o){var u=o(9242),t=o(3396),a=o(4870),l=(o(7658),o(7139)),r={__name:"BoardItem",props:{iconId:{type:Number,required:!1,default:0},selected:{type:Boolean,required:!1,default:!1},closed:{type:Boolean,required:!1,default:!1}},setup(e){const n=e;return(o,u)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,l.C_)("board-item "+(n.selected?"selected":"")+(n.closed?"closed":""))},[e.iconId?((0,t.wg)(),(0,t.iD)("i",{key:0,class:(0,l.C_)("icon icon-"+e.iconId)},null,2)):(0,t.kq)("",!0)],2))}};const i=r;var c=i;const v={key:0,class:"win"};var s={__name:"Board",setup(e){let n=(0,a.iH)([3,1,0,1,0,0,0,0,2,0,0,0,2,0,0,3]);const o=(0,a.iH)([]),u=(0,a.iH)(4),r=(0,a.iH)([]);let i=(0,a.iH)(1);const s=2;let d=(0,a.iH)(0);const f=e=>{1===e&&(n.value=[3,1,0,1,0,0,0,0,2,0,0,0,2,0,0,3],u.value=4),2===e&&(n.value=[0,0,4,0,2,0,1,1,0,0,4,0,0,2,0,0,0,0,0,0,3,0,3,4,0],u.value=5),o.value=[],r.value=[]},h=()=>{f(i.value)},p=()=>{let e=!0;n.value.forEach(((n,o)=>{n&&!y(o)&&(e=!1)})),e&&w()},w=()=>{i.value+=1,d.value=0,i.value>s&&(i.value=1,d.value=1),f(i.value)},b=e=>{o.value=[],n.value[e]&&!y(e)&&o.value.push(e)},g=e=>{e!==o.value[0]&&n.value[e]===n.value[o.value[0]]&&(r.value=r.value.concat(o.value)),o.value=[],p()},m=e=>{if(o.value.length){const t=o.value[o.value.length-1];1!==Math.abs(t-e)&&Math.abs(t-e)!==u.value||y(e)||o.value.push(e),(y(e)||n.value[e]&&n.value[e]!==n.value[o.value[0]])&&(o.value=[])}},_=e=>o.value.findIndex((n=>n===e))>-1,y=e=>r.value.findIndex((n=>n===e))>-1;return(0,t.bv)((()=>{f(i.value)})),(e,o)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[1===(0,a.SU)(d)?((0,t.wg)(),(0,t.iD)("div",v,"Congratulations! You won!")):(0,t.kq)("",!0),(0,t._)("h2",null,"Level "+(0,l.zw)((0,a.SU)(i)),1),(0,t._)("div",{class:"board",style:(0,l.j5)({width:100*u.value+"px",height:100*u.value+"px"})},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,a.SU)(n),((e,n)=>((0,t.wg)(),(0,t.j4)((0,a.SU)(c),{key:n,"icon-id":e,onMousedown:e=>b(n),onMousemove:e=>m(n),onMouseup:e=>g(n),onTouchstart:e=>b(n),onTouchmove:e=>m(n),onTouchend:e=>g(n),selected:_(n),closed:y(n)},null,8,["icon-id","onMousedown","onMousemove","onMouseup","onTouchstart","onTouchmove","onTouchend","selected","closed"])))),128))],4),(0,t._)("div",{onClick:o[0]||(o[0]=e=>h()),class:"reload"},"Reload")],64))}};const d=s;var f=d,h={__name:"App",setup(e){return(e,n)=>((0,t.wg)(),(0,t.j4)((0,a.SU)(f)))}};const p=h;var w=p;(0,u.ri)(w).mount("#app")}},n={};function o(u){var t=n[u];if(void 0!==t)return t.exports;var a=n[u]={exports:{}};return e[u](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(n,u,t,a){if(!u){var l=1/0;for(v=0;v<e.length;v++){u=e[v][0],t=e[v][1],a=e[v][2];for(var r=!0,i=0;i<u.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](u[i])}))?u.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(v--,1);var c=t();void 0!==c&&(n=c)}}return n}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[u,t,a]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var u in n)o.o(n,u)&&!o.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:n[u]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,u){var t,a,l=u[0],r=u[1],i=u[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(t in r)o.o(r,t)&&(o.m[t]=r[t]);if(i)var v=i(o)}for(n&&n(u);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(v)},u=self["webpackChunkvue3_match_two"]=self["webpackChunkvue3_match_two"]||[];u.forEach(n.bind(null,0)),u.push=n.bind(null,u.push.bind(u))}();var u=o.O(void 0,[998],(function(){return o(5131)}));u=o.O(u)})();
//# sourceMappingURL=app.b30f26ac.js.map
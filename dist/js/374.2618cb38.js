(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[374],{6374:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),r("div",{staticClass:"logo-container"},[e.recipe.vegetarian?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(6395)}})]):e._e(),e.recipe.vegan?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(5118)}})]):e._e(),e.recipe.glutenFree?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(785)}})]):e._e(),r("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[r("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])]),e._v(" Summary: "),r("p",{domProps:{innerHTML:e._s(e.recipe.summary)}}),r("p",[e._v("Ingredients:")]),r("ul",e._l(e.recipe.ingredients,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t)+" ")])})),0),r("p",[e._v("Instructions:")]),r("ol",e._l(e.recipe.instructions,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t)+" ")])})),0)])])])]):e._e()])},i=[],a=t(6835),s=t(8534),c=(t(4916),t(5306),t(3318));const o={data:function(){return{isFull:!1,recipe:null}},created:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function r(){var t,n;return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t=(0,c.ku)(e.$route.params.recipeId),n=t.data.recipe,n){r.next=6;break}return e.$router.replace("/NotFound"),r.abrupt("return");case 6:e.recipe=n,r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.error(r.t0),e.$router.replace("/NotFound");case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){this.isFull=!this.isFull}}},u=o;var l=t(1001),v=(0,l.Z)(u,n,i,!1,null,"00bbcb2e",null);const p=v.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),i=t(8052),a=t(2261),s=t(7293),c=t(5112),o=t(8880),u=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,i,s){var c=n(e),o=r.exec;return o===a||o===l.exec?d&&!s?{done:!0,value:g(r,t,i)}:{done:!0,value:c(t,r,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(l,p,h[1])}v&&o(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),i=t(7908),a=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,f=n.length,g=l;return void 0!==v&&(v=i(v),g=u),c(p,g,(function(i,c){var u;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(r,0,t);case"'":return o(r,d);case"<":u=v[o(c,1,-1)];break;default:var l=+c;if(0===l)return i;if(l>f){var p=a(l/10);return 0===p?i:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):i}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),i=t(9670),a=t(614),s=t(4326),c=t(2261),o=TypeError;e.exports=function(e,r){var t=e.exec;if(a(t)){var u=n(t,e,r);return null!==u&&i(u),u}if("RegExp"===s(e))return n(c,e,r);throw o("RegExp#exec called on incompatible receiver")}},5306:(e,r,t)=>{"use strict";var n=t(2104),i=t(6916),a=t(1702),s=t(7007),c=t(7293),o=t(9670),u=t(614),l=t(8554),v=t(9303),p=t(7466),d=t(1340),f=t(4488),g=t(1530),h=t(8173),_=t(647),m=t(7651),x=t(5112),b=x("replace"),k=Math.max,$=Math.min,y=a([].concat),C=a([].push),w=a("".indexOf),I=a("".slice),F=function(e){return void 0===e?e:String(e)},M=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),E=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var a=S?"$":"$0";return[function(e,t){var n=f(this),a=l(e)?void 0:h(e,b);return a?i(a,e,n,t):i(r,d(n),e,t)},function(e,i){var s=o(this),c=d(e);if("string"==typeof i&&-1===w(i,a)&&-1===w(i,"$<")){var l=t(r,s,c,i);if(l.done)return l.value}var f=u(i);f||(i=d(i));var h=s.global;if(h){var x=s.unicode;s.lastIndex=0}var b=[];while(1){var M=m(s,c);if(null===M)break;if(C(b,M),!h)break;var S=d(M[0]);""===S&&(s.lastIndex=g(c,p(s.lastIndex),x))}for(var E="",R=0,Z=0;Z<b.length;Z++){M=b[Z];for(var L=d(M[0]),A=k($(v(M.index),c.length),0),N=[],T=1;T<M.length;T++)C(N,F(M[T]));var H=M.groups;if(f){var O=y([L],N,A,c);void 0!==H&&C(O,H);var P=d(n(i,void 0,O))}else P=_(L,c,A,N,H,i);A>=R&&(E+=I(c,R,A)+P,R=A+L.length)}return E+I(c,R)}]}),!E||!M||S)}}]);
//# sourceMappingURL=374.2618cb38.js.map
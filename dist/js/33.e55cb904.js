(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[33],{3033:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),t("div",[e._v("Servings: "+e._s(e.recipe.servings))]),t("div",{staticClass:"logo-container"},[e.recipe.vegetarian?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(6395)}})]):e._e(),e.recipe.vegan?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(5118)}})]):e._e(),e.recipe.glutenFree?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(785)}})]):e._e(),t("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[t("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])]),e._v(" Ingredients: "),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)])]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe._instructions,(function(r,n){return t("li",{key:n},[e._v(" "+e._s(r.step)+" ")])})),0)])])]):e._e()])},i=[],a=r(124),s=r(8534),c=(r(4916),r(5306),r(1249),r(4293));const o={data:function(){return{isFull:!1,recipe:{}}},created:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var r,n,i,s,o,u,l,v,d,p,g,f,h,_,m;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.prev=0,t.prev=1,r=(0,c.iG)(e.$route.params.recipeId),t.next=10;break;case 5:return t.prev=5,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 10:n=r.data.recipe,i=n.analyzedInstructions,s=n.instructions,o=n.extendedIngredients,u=n.aggregateLikes,l=n.readyInMinutes,v=n.image,d=n.vegetarian,p=n.vegan,g=n.glutenFree,f=n.servings,h=n.title,_=i.map((function(e,t){return{number:t+1,step:e}})),m={instructions:s,_instructions:_,analyzedInstructions:i,extendedIngredients:o,aggregateLikes:u,readyInMinutes:l,image:v,vegetarian:d,vegan:p,glutenFree:g,servings:f,title:h},e.recipe=m,t.next=19;break;case 16:t.prev=16,t.t1=t["catch"](0),console.log(t.t1);case 19:case"end":return t.stop()}}),t,null,[[0,16],[1,5]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){this.isFull=!this.isFull}}},u=o;var l=r(1001),v=(0,l.Z)(u,n,i,!1,null,"67d5099a",null);const d=v.exports},1530:(e,t,r)=>{"use strict";var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),i=r(8052),a=r(2261),s=r(7293),c=r(5112),o=r(8880),u=c("species"),l=RegExp.prototype;e.exports=function(e,t,r,v){var d=c(e),p=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=p&&!s((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!p||!g||r){var f=n(/./[d]),h=t(d,""[e],(function(e,t,r,i,s){var c=n(e),o=t.exec;return o===a||o===l.exec?p&&!s?{done:!0,value:f(t,r,i)}:{done:!0,value:c(r,t,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(l,d,h[1])}v&&o(l[d],"sham",!0)}},647:(e,t,r)=>{var n=r(1702),i=r(7908),a=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,v,d){var p=r+e.length,g=n.length,f=l;return void 0!==v&&(v=i(v),f=u),c(d,f,(function(i,c){var u;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(t,0,r);case"'":return o(t,p);case"<":u=v[o(c,1,-1)];break;default:var l=+c;if(0===l)return i;if(l>g){var d=a(l/10);return 0===d?i:d<=g?void 0===n[d-1]?s(c,1):n[d-1]+s(c,1):i}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,t,r)=>{var n=r(6916),i=r(9670),a=r(614),s=r(4326),c=r(2261),o=TypeError;e.exports=function(e,t){var r=e.exec;if(a(r)){var u=n(r,e,t);return null!==u&&i(u),u}if("RegExp"===s(e))return n(c,e,t);throw o("RegExp#exec called on incompatible receiver")}},1249:(e,t,r)=>{"use strict";var n=r(2109),i=r(2092).map,a=r(1194),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5306:(e,t,r)=>{"use strict";var n=r(2104),i=r(6916),a=r(1702),s=r(7007),c=r(7293),o=r(9670),u=r(614),l=r(8554),v=r(9303),d=r(7466),p=r(1340),g=r(4488),f=r(1530),h=r(8173),_=r(647),m=r(7651),x=r(5112),k=x("replace"),b=Math.max,y=Math.min,C=a([].concat),I=a([].push),$=a("".indexOf),w=a("".slice),F=function(e){return void 0===e?e:String(e)},M=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[k]&&""===/./[k]("a","$0")}(),E=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,r){var a=S?"$":"$0";return[function(e,r){var n=g(this),a=l(e)?void 0:h(e,k);return a?i(a,e,n,r):i(t,p(n),e,r)},function(e,i){var s=o(this),c=p(e);if("string"==typeof i&&-1===$(i,a)&&-1===$(i,"$<")){var l=r(t,s,c,i);if(l.done)return l.value}var g=u(i);g||(i=p(i));var h=s.global;if(h){var x=s.unicode;s.lastIndex=0}var k=[];while(1){var M=m(s,c);if(null===M)break;if(I(k,M),!h)break;var S=p(M[0]);""===S&&(s.lastIndex=f(c,d(s.lastIndex),x))}for(var E="",L=0,R=0;R<k.length;R++){M=k[R];for(var Z=p(M[0]),A=b(y(v(M.index),c.length),0),z=[],G=1;G<M.length;G++)I(z,F(M[G]));var N=M.groups;if(g){var O=C([Z],z,A,c);void 0!==N&&I(O,N);var T=p(n(i,void 0,O))}else T=_(Z,c,A,z,N,i);A>=L&&(E+=w(c,L,A)+T,L=A+Z.length)}return E+w(c,L)}]}),!E||!M||S)}}]);
//# sourceMappingURL=33.e55cb904.js.map
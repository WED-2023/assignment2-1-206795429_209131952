(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[364],{3364:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),r("div",[e._v("Servings: "+e._s(e.recipe.servings))]),r("div",{staticClass:"logo-container"},[e.recipe.vegetarian?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(6395)}})]):e._e(),e.recipe.vegan?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(5118)}})]):e._e(),e.recipe.glutenFree?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(785)}})]):e._e(),r("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[r("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])]),e._v(" Ingredients: "),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)])]),r("div",{staticClass:"wrapped"},[e._v(" Instructions: "),r("ol",e._l(e.recipe._instructions,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t.step)+" ")])})),0)])])]):e._e()])},i=[],a=t(124),s=t(5957),c=t(8534),o=(t(4916),t(5306),t(9826),t(1539),t(1058),t(5827),t(1249),t(8309),t(2222),t(3318));const u={data:function(){return{isFull:!1,recipe:{}}},created:function(){var e=this;return(0,c.Z)((0,a.Z)().mark((function r(){var t,n,i,c,u,l,v,p,d,f,g,h,_,m,x,y;return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.prev=0,t=e.$route.params.response,r.prev=2,t=(0,o.iG)(e.$route.params.recipeId),r.next=11;break;case 6:return r.prev=6,r.t0=r["catch"](2),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 11:if(n=t.data.recipe,i=n.find((function(r){return r.id===parseInt(e.$route.params.recipeId)})),i){r.next=16;break}return e.$router.replace("/NotFound"),r.abrupt("return");case 16:c=i.analyzedInstructions,u=i.instructions,l=i.extendedIngredients,v=i.aggregateLikes,p=i.readyInMinutes,d=i.image,f=i.vegetarian,g=i.vegan,h=i.glutenFree,_=i.servings,m=i.title,x=c.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,s.Z)(e),(0,s.Z)(r))}),[]),y={instructions:u,_instructions:x,analyzedInstructions:c,extendedIngredients:l,aggregateLikes:v,readyInMinutes:p,image:d,vegetarian:f,vegan:g,glutenFree:h,servings:_,title:m},e.recipe=y,r.next=25;break;case 22:r.prev=22,r.t1=r["catch"](0),console.log(r.t1);case 25:case"end":return r.stop()}}),r,null,[[0,22],[2,6]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){this.isFull=!this.isFull}}},l=u;var v=t(1001),p=(0,v.Z)(l,n,i,!1,null,"4fd59738",null);const d=p.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},3671:(e,r,t)=>{var n=t(9662),i=t(7908),a=t(8361),s=t(6244),c=TypeError,o=function(e){return function(r,t,o,u){n(t);var l=i(r),v=a(l),p=s(l),d=e?p-1:0,f=e?-1:1;if(o<2)while(1){if(d in v){u=v[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw c("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in v&&(u=t(u,v[d],d,l));return u}};e.exports={left:o(!1),right:o(!0)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),i=t(8052),a=t(2261),s=t(7293),c=t(5112),o=t(8880),u=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,i,s){var c=n(e),o=r.exec;return o===a||o===l.exec?d&&!s?{done:!0,value:g(r,t,i)}:{done:!0,value:c(t,r,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(l,p,h[1])}v&&o(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),i=t(7908),a=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,f=n.length,g=l;return void 0!==v&&(v=i(v),g=u),c(p,g,(function(i,c){var u;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(r,0,t);case"'":return o(r,d);case"<":u=v[o(c,1,-1)];break;default:var l=+c;if(0===l)return i;if(l>f){var p=a(l/10);return 0===p?i:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):i}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),i=t(9670),a=t(614),s=t(4326),c=t(2261),o=TypeError;e.exports=function(e,r){var t=e.exec;if(a(t)){var u=n(t,e,r);return null!==u&&i(u),u}if("RegExp"===s(e))return n(c,e,r);throw o("RegExp#exec called on incompatible receiver")}},2222:(e,r,t)=>{"use strict";var n=t(2109),i=t(7293),a=t(3157),s=t(111),c=t(7908),o=t(6244),u=t(7207),l=t(6135),v=t(5417),p=t(1194),d=t(5112),f=t(7392),g=d("isConcatSpreadable"),h=f>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),_=function(e){if(!s(e))return!1;var r=e[g];return void 0!==r?!!r:a(e)},m=!h||!p("concat");n({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var r,t,n,i,a,s=c(this),p=v(s,0),d=0;for(r=-1,n=arguments.length;r<n;r++)if(a=-1===r?s:arguments[r],_(a))for(i=o(a),u(d+i),t=0;t<i;t++,d++)t in a&&l(p,d,a[t]);else u(d+1),l(p,d++,a);return p.length=d,p}})},1249:(e,r,t)=>{"use strict";var n=t(2109),i=t(2092).map,a=t(1194),s=a("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,r,t)=>{"use strict";var n=t(2109),i=t(3671).left,a=t(9341),s=t(7392),c=t(5268),o=!c&&s>79&&s<83,u=o||!a("reduce");n({target:"Array",proto:!0,forced:u},{reduce:function(e){var r=arguments.length;return i(this,e,r,r>1?arguments[1]:void 0)}})},5306:(e,r,t)=>{"use strict";var n=t(2104),i=t(6916),a=t(1702),s=t(7007),c=t(7293),o=t(9670),u=t(614),l=t(8554),v=t(9303),p=t(7466),d=t(1340),f=t(4488),g=t(1530),h=t(8173),_=t(647),m=t(7651),x=t(5112),y=x("replace"),b=Math.max,k=Math.min,I=a([].concat),$=a([].push),C=a("".indexOf),w=a("".slice),F=function(e){return void 0===e?e:String(e)},M=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),Z=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var a=S?"$":"$0";return[function(e,t){var n=f(this),a=l(e)?void 0:h(e,y);return a?i(a,e,n,t):i(r,d(n),e,t)},function(e,i){var s=o(this),c=d(e);if("string"==typeof i&&-1===C(i,a)&&-1===C(i,"$<")){var l=t(r,s,c,i);if(l.done)return l.value}var f=u(i);f||(i=d(i));var h=s.global;if(h){var x=s.unicode;s.lastIndex=0}var y=[];while(1){var M=m(s,c);if(null===M)break;if($(y,M),!h)break;var S=d(M[0]);""===S&&(s.lastIndex=g(c,p(s.lastIndex),x))}for(var Z="",A=0,E=0;E<y.length;E++){M=y[E];for(var R=d(M[0]),L=b(k(v(M.index),c.length),0),z=[],N=1;N<M.length;N++)$(z,F(M[N]));var T=M.groups;if(f){var G=I([R],z,L,c);void 0!==T&&$(G,T);var O=d(n(i,void 0,G))}else O=_(R,c,L,z,T,i);L>=A&&(Z+=w(c,A,L)+O,A=L+R.length)}return Z+w(c,A)}]}),!Z||!M||S)}}]);
//# sourceMappingURL=364.725ffe73.js.map
(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[162],{2162:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container",staticStyle:{"border-radius":"10px","background-color":"rgba(255, 255, 255, 0.7)"}},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Servings: "+e._s(e.recipe.servings)+" ")]),r("div",{staticClass:"logo-container"},[e.recipe.vegetarian?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(6395)}})]):e._e(),e.recipe.vegan?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(5118)}})]):e._e(),e.recipe.glutenFree?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(785)}})]):e._e()])]),e._v(" Summary: "),r("p",{domProps:{innerHTML:e._s(e.recipe.summary)}}),r("p",[e._v("Ingredients:")]),r("ul",e._l(e.recipe.ingredients,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t.amount)+" "+e._s(t.ingredient)+" ")])})),0),r("p",[e._v("Instructions:")]),r("ol",e._l(e.recipe.instructions,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t.instruction)+" ")])})),0)])])])]):e._e()])},a=[],s=t(6835),i=t(8534);t(2222),t(4916),t(5306),t(9669),t(3318);const c={data:function(){return{recipe:null}},created:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function r(){var t,n,a,i,c,o,u,l,v,p,d,g,f;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=e.$route.params.response,r.prev=2,r.next=5,e.axios.get("".concat(e.$root.store.server_domain,"/users/my_recipes/").concat(e.$route.params.title),{withCredentials:!0});case 5:t=r.sent,console.log("response.status",t.status),console.log("response.data",t.data),200!==t.status&&e.$router.replace("/NotFound"),r.next=16;break;case 11:return r.prev=11,r.t0=r["catch"](2),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 16:if(n=t.data,console.log("recipe",n),n){r.next=21;break}return e.$router.replace("/NotFound"),r.abrupt("return");case 21:a=n.servings,i=n.instructions,c=n.readyInMinutes,o=n.image,u=n.vegetarian,l=n.vegan,v=n.summary,p=n.ingredients,d=n.glutenFree,g=n.title,f={servings:a,instructions:i,readyInMinutes:c,image:o,vegetarian:u,vegan:l,summary:v,ingredients:p,glutenFree:d,title:g},console.log("_recipe",f),e.recipe=f,r.next=30;break;case 27:r.prev=27,r.t1=r["catch"](0),console.log(r.t1);case 30:case"end":return r.stop()}}),r,null,[[0,27],[2,11]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){this.isFull=!this.isFull}}},o=c;var u=t(1001),l=(0,u.Z)(o,n,a,!1,null,"a20e1f2c",null);const v=l.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),a=t(8052),s=t(2261),i=t(7293),c=t(5112),o=t(8880),u=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!i((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),g=d&&!i((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!g||t){var f=n(/./[p]),x=r(p,""[e],(function(e,r,t,a,i){var c=n(e),o=r.exec;return o===s||o===l.exec?d&&!i?{done:!0,value:f(r,t,a)}:{done:!0,value:c(t,r,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(l,p,x[1])}v&&o(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),s=Math.floor,i=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,g=n.length,f=l;return void 0!==v&&(v=a(v),f=u),c(p,f,(function(a,c){var u;switch(i(c,0)){case"$":return"$";case"&":return e;case"`":return o(r,0,t);case"'":return o(r,d);case"<":u=v[o(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>g){var p=s(l/10);return 0===p?a:p<=g?void 0===n[p-1]?i(c,1):n[p-1]+i(c,1):a}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),s=t(614),i=t(4326),c=t(2261),o=TypeError;e.exports=function(e,r){var t=e.exec;if(s(t)){var u=n(t,e,r);return null!==u&&a(u),u}if("RegExp"===i(e))return n(c,e,r);throw o("RegExp#exec called on incompatible receiver")}},2261:(e,r,t)=>{"use strict";var n=t(6916),a=t(1702),s=t(1340),i=t(7066),c=t(2999),o=t(2309),u=t(30),l=t(9909).get,v=t(9441),p=t(7168),d=o("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,f=g,x=a("".charAt),h=a("".indexOf),m=a("".replace),_=a("".slice),y=function(){var e=/a/,r=/b*/g;return n(g,e,"a"),n(g,r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),b=c.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],$=y||I||b||v||p;$&&(f=function(e){var r,t,a,c,o,v,p,$=this,C=l($),k=s(e),E=C.raw;if(E)return E.lastIndex=$.lastIndex,r=n(f,E,k),$.lastIndex=E.lastIndex,r;var R=C.groups,w=b&&$.sticky,S=n(i,$),F=$.source,A=0,M=k;if(w&&(S=m(S,"y",""),-1===h(S,"g")&&(S+="g"),M=_(k,$.lastIndex),$.lastIndex>0&&(!$.multiline||$.multiline&&"\n"!==x(k,$.lastIndex-1))&&(F="(?: "+F+")",M=" "+M,A++),t=new RegExp("^(?:"+F+")",S)),I&&(t=new RegExp("^"+F+"$(?!\\s)",S)),y&&(a=$.lastIndex),c=n(g,w?t:$,M),w?c?(c.input=_(c.input,A),c[0]=_(c[0],A),c.index=$.lastIndex,$.lastIndex+=c[0].length):$.lastIndex=0:y&&c&&($.lastIndex=$.global?c.index+c[0].length:a),I&&c&&c.length>1&&n(d,c[0],t,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&R)for(c.groups=v=u(null),o=0;o<R.length;o++)p=R[o],v[p[0]]=c[p[1]];return c}),e.exports=f},7066:(e,r,t)=>{"use strict";var n=t(9670);e.exports=function(){var e=n(this),r="";return e.hasIndices&&(r+="d"),e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.unicodeSets&&(r+="v"),e.sticky&&(r+="y"),r}},2999:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp,i=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=i||n((function(){return!s("a","y").sticky})),o=i||n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:i}},9441:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2222:(e,r,t)=>{"use strict";var n=t(2109),a=t(7293),s=t(3157),i=t(111),c=t(7908),o=t(6244),u=t(7207),l=t(6135),v=t(5417),p=t(1194),d=t(5112),g=t(7392),f=d("isConcatSpreadable"),x=g>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),h=function(e){if(!i(e))return!1;var r=e[f];return void 0!==r?!!r:s(e)},m=!x||!p("concat");n({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var r,t,n,a,s,i=c(this),p=v(i,0),d=0;for(r=-1,n=arguments.length;r<n;r++)if(s=-1===r?i:arguments[r],h(s))for(a=o(s),u(d+a),t=0;t<a;t++,d++)t in s&&l(p,d,s[t]);else u(d+1),l(p,d++,s);return p.length=d,p}})},4916:(e,r,t)=>{"use strict";var n=t(2109),a=t(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),s=t(1702),i=t(7007),c=t(7293),o=t(9670),u=t(614),l=t(8554),v=t(9303),p=t(7466),d=t(1340),g=t(4488),f=t(1530),x=t(8173),h=t(647),m=t(7651),_=t(5112),y=_("replace"),b=Math.max,I=Math.min,$=s([].concat),C=s([].push),k=s("".indexOf),E=s("".slice),R=function(e){return void 0===e?e:String(e)},w=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),F=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,r,t){var s=S?"$":"$0";return[function(e,t){var n=g(this),s=l(e)?void 0:x(e,y);return s?a(s,e,n,t):a(r,d(n),e,t)},function(e,a){var i=o(this),c=d(e);if("string"==typeof a&&-1===k(a,s)&&-1===k(a,"$<")){var l=t(r,i,c,a);if(l.done)return l.value}var g=u(a);g||(a=d(a));var x=i.global;if(x){var _=i.unicode;i.lastIndex=0}var y=[];while(1){var w=m(i,c);if(null===w)break;if(C(y,w),!x)break;var S=d(w[0]);""===S&&(i.lastIndex=f(c,p(i.lastIndex),_))}for(var F="",A=0,M=0;M<y.length;M++){w=y[M];for(var N=d(w[0]),T=b(I(v(w.index),c.length),0),O=[],Z=1;Z<w.length;Z++)C(O,R(w[Z]));var K=w.groups;if(g){var P=$([N],O,T,c);void 0!==K&&C(P,K);var B=d(n(a,void 0,P))}else B=h(N,c,T,O,K,a);T>=A&&(F+=E(c,A,T)+B,A=T+N.length)}return F+E(c,A)}]}),!F||!w||S)}}]);
//# sourceMappingURL=162.e6f520bf.js.map
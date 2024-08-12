(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[916],{916:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")]),t("div",[e._v("Servings: "+e._s(e.recipe.servings))]),t("div",{staticClass:"logo-container"},[e.recipe.vegetarian?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(6395)}})]):e._e(),e.recipe.vegan?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(5118)}})]):e._e(),e.recipe.glutenFree?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:r(785)}})]):e._e(),t("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[t("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])]),e._v(" Ingredients: "),t("ul",e._l(e.recipe.extendedIngredients,(function(r,n){return t("li",{key:n+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe._instructions,(function(r,n){return t("li",{key:n},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])},a=[],s=r(6835),i=r(5957),o=r(8534),c=(r(2222),r(4916),r(5306),r(5827),r(1539),r(1249),r(8309),r(3318),r(9669)),u=r.n(c);const l={data:function(){return{isFull:!1,recipe:{}}},created:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r,n,a,o,c,u,l,v,d,p,f,g,x,h,y,m,b;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$route.params.response,t.prev=2,t.next=5,e.axios.get("".concat(e.$root.store.server_domain,"/recipes/recipe/").concat(e.$route.params.recipeId),{withCredentials:!0});case 5:r=t.sent,console.log("response.status",r.status),console.log("response.data",r.data),200!==r.status&&e.$router.replace("/NotFound"),t.next=16;break;case 11:return t.prev=11,t.t0=t["catch"](2),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 16:if(n=r.data,console.log("recipe",n),n){t.next=21;break}return e.$router.replace("/NotFound"),t.abrupt("return");case 21:return a=n.analyzedInstructions,o=n.instructions,c=n.extendedIngredients,u=n.aggregateLikes,l=n.readyInMinutes,v=n.image,d=n.vegetarian,p=n.vegan,f=n.glutenFree,g=n.servings,x=n.title,h=a.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat((0,i.Z)(e),(0,i.Z)(t))}),[]),y={instructions:o,_instructions:h,analyzedInstructions:a,extendedIngredients:c,aggregateLikes:u,readyInMinutes:l,image:v,vegetarian:d,vegan:p,glutenFree:f,servings:g,title:x},console.log("_recipe",y),e.recipe=y,m=e.$root.store.username,t.next=29,e.axios.get("".concat(e.$root.store.server_domain,"/users/favorites/check"),{params:{username:m,recipeId:e.$route.params.recipeId},withCredentials:!0});case 29:b=t.sent,b.data.isFavorite&&(e.isFull=!0),t.next=36;break;case 33:t.prev=33,t.t1=t["catch"](0),console.log(t.t1);case 36:case"end":return t.stop()}}),t,null,[[0,33],[2,11]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r,n;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,u().defaults.withCredentials=!0,t.next=4,u().post(e.$root.store.server_domain+"/users/favorites",{recipeId:e.$route.params.recipeId});case 4:r=t.sent,console.log("this is response: ",r),200===r.status&&(e.isFull=!e.isFull,n=e.isFull?"added to":"removed from",e.$root.toast("".concat(n," favorites"),"Recipe successfully ".concat(n," your favorites"),"success")),u().defaults.withCredentials=!1,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error("Error toggling favorite:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},v=l;var d=r(1001),p=(0,d.Z)(v,n,a,!1,null,"703a8dcb",null);const f=p.exports},1530:(e,t,r)=>{"use strict";var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},8457:(e,t,r)=>{"use strict";var n=r(9974),a=r(6916),s=r(7908),i=r(3411),o=r(7659),c=r(4411),u=r(6244),l=r(6135),v=r(4121),d=r(1246),p=Array;e.exports=function(e){var t=s(e),r=c(this),f=arguments.length,g=f>1?arguments[1]:void 0,x=void 0!==g;x&&(g=n(g,f>2?arguments[2]:void 0));var h,y,m,b,I,_,w=d(t),k=0;if(!w||this===p&&o(w))for(h=u(t),y=r?new this(h):p(h);h>k;k++)_=x?g(t[k],k):t[k],l(y,k,_);else for(b=v(t,w),I=b.next,y=r?new this:[];!(m=a(I,b)).done;k++)_=x?i(b,g,[m.value,k],!0):m.value,l(y,k,_);return y.length=k,y}},3671:(e,t,r)=>{var n=r(9662),a=r(7908),s=r(8361),i=r(6244),o=TypeError,c=function(e){return function(t,r,c,u){n(r);var l=a(t),v=s(l),d=i(l),p=e?d-1:0,f=e?-1:1;if(c<2)while(1){if(p in v){u=v[p],p+=f;break}if(p+=f,e?p<0:d<=p)throw o("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=f)p in v&&(u=r(u,v[p],p,l));return u}};e.exports={left:c(!1),right:c(!0)}},3411:(e,t,r)=>{var n=r(9670),a=r(9212);e.exports=function(e,t,r,s){try{return s?t(n(r)[0],r[1]):t(r)}catch(i){a(e,"throw",i)}}},7007:(e,t,r)=>{"use strict";r(4916);var n=r(1470),a=r(8052),s=r(2261),i=r(7293),o=r(5112),c=r(8880),u=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,v){var d=o(e),p=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=p&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!p||!f||r){var g=n(/./[d]),x=t(d,""[e],(function(e,t,r,a,i){var o=n(e),c=t.exec;return c===s||c===l.exec?p&&!i?{done:!0,value:g(t,r,a)}:{done:!0,value:o(r,t,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(l,d,x[1])}v&&c(l[d],"sham",!0)}},647:(e,t,r)=>{var n=r(1702),a=r(7908),s=Math.floor,i=n("".charAt),o=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,v,d){var p=r+e.length,f=n.length,g=l;return void 0!==v&&(v=a(v),g=u),o(d,g,(function(a,o){var u;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,p);case"<":u=v[c(o,1,-1)];break;default:var l=+o;if(0===l)return a;if(l>f){var d=s(l/10);return 0===d?a:d<=f?void 0===n[d-1]?i(o,1):n[d-1]+i(o,1):a}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,t,r)=>{var n=r(6916),a=r(9670),s=r(614),i=r(4326),o=r(2261),c=TypeError;e.exports=function(e,t){var r=e.exec;if(s(r)){var u=n(r,e,t);return null!==u&&a(u),u}if("RegExp"===i(e))return n(o,e,t);throw c("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{"use strict";var n=r(6916),a=r(1702),s=r(1340),i=r(7066),o=r(2999),c=r(2309),u=r(30),l=r(9909).get,v=r(9441),d=r(7168),p=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,x=a("".charAt),h=a("".indexOf),y=a("".replace),m=a("".slice),b=function(){var e=/a/,t=/b*/g;return n(f,e,"a"),n(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),I=o.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],w=b||_||I||v||d;w&&(g=function(e){var t,r,a,o,c,v,d,w=this,k=l(w),$=s(e),C=k.raw;if(C)return C.lastIndex=w.lastIndex,t=n(g,C,$),w.lastIndex=C.lastIndex,t;var A=k.groups,E=I&&w.sticky,R=n(i,w),S=w.source,F=0,Z=$;if(E&&(R=y(R,"y",""),-1===h(R,"g")&&(R+="g"),Z=m($,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==x($,w.lastIndex-1))&&(S="(?: "+S+")",Z=" "+Z,F++),r=new RegExp("^(?:"+S+")",R)),_&&(r=new RegExp("^"+S+"$(?!\\s)",R)),b&&(a=w.lastIndex),o=n(f,E?r:w,Z),E?o?(o.input=m(o.input,F),o[0]=m(o[0],F),o.index=w.lastIndex,w.lastIndex+=o[0].length):w.lastIndex=0:b&&o&&(w.lastIndex=w.global?o.index+o[0].length:a),_&&o&&o.length>1&&n(p,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&A)for(o.groups=v=u(null),c=0;c<A.length;c++)d=A[c],v[d[0]]=o[d[1]];return o}),e.exports=g},7066:(e,t,r)=>{"use strict";var n=r(9670);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp,i=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=i||n((function(){return!s("a","y").sticky})),c=i||n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:i}},9441:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2222:(e,t,r)=>{"use strict";var n=r(2109),a=r(7293),s=r(3157),i=r(111),o=r(7908),c=r(6244),u=r(7207),l=r(6135),v=r(5417),d=r(1194),p=r(5112),f=r(7392),g=p("isConcatSpreadable"),x=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),h=function(e){if(!i(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},y=!x||!d("concat");n({target:"Array",proto:!0,arity:1,forced:y},{concat:function(e){var t,r,n,a,s,i=o(this),d=v(i,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(s=-1===t?i:arguments[t],h(s))for(a=c(s),u(p+a),r=0;r<a;r++,p++)r in s&&l(d,p,s[r]);else u(p+1),l(d,p++,s);return d.length=p,d}})},1038:(e,t,r)=>{var n=r(2109),a=r(8457),s=r(7072),i=!s((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},9753:(e,t,r)=>{var n=r(2109),a=r(3157);n({target:"Array",stat:!0},{isArray:a})},1249:(e,t,r)=>{"use strict";var n=r(2109),a=r(2092).map,s=r(1194),i=s("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,t,r)=>{"use strict";var n=r(2109),a=r(3671).left,s=r(9341),i=r(7392),o=r(5268),c=!o&&i>79&&i<83,u=c||!s("reduce");n({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return a(this,e,t,t>1?arguments[1]:void 0)}})},4916:(e,t,r)=>{"use strict";var n=r(2109),a=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},7601:(e,t,r)=>{"use strict";r(4916);var n=r(2109),a=r(6916),s=r(614),i=r(9670),o=r(1340),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=/./.test;n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=i(this),r=o(e),n=t.exec;if(!s(n))return a(u,t,r);var c=a(n,t,r);return null!==c&&(i(c),!0)}})},5306:(e,t,r)=>{"use strict";var n=r(2104),a=r(6916),s=r(1702),i=r(7007),o=r(7293),c=r(9670),u=r(614),l=r(8554),v=r(9303),d=r(7466),p=r(1340),f=r(4488),g=r(1530),x=r(8173),h=r(647),y=r(7651),m=r(5112),b=m("replace"),I=Math.max,_=Math.min,w=s([].concat),k=s([].push),$=s("".indexOf),C=s("".slice),A=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),R=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),S=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var s=R?"$":"$0";return[function(e,r){var n=f(this),s=l(e)?void 0:x(e,b);return s?a(s,e,n,r):a(t,p(n),e,r)},function(e,a){var i=c(this),o=p(e);if("string"==typeof a&&-1===$(a,s)&&-1===$(a,"$<")){var l=r(t,i,o,a);if(l.done)return l.value}var f=u(a);f||(a=p(a));var x=i.global;if(x){var m=i.unicode;i.lastIndex=0}var b=[];while(1){var E=y(i,o);if(null===E)break;if(k(b,E),!x)break;var R=p(E[0]);""===R&&(i.lastIndex=g(o,d(i.lastIndex),m))}for(var S="",F=0,Z=0;Z<b.length;Z++){E=b[Z];for(var M=p(E[0]),O=I(_(v(E.index),o.length),0),T=[],N=1;N<E.length;N++)k(T,A(E[N]));var L=E.groups;if(f){var j=w([M],T,O,o);void 0!==L&&k(j,L);var K=p(n(a,void 0,j))}else K=h(M,o,O,T,L,a);O>=F&&(S+=C(o,F,O)+K,F=O+M.length)}return S+C(o,F)}]}),!S||!E||R)},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(9753);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){if(Array.isArray(e))return n(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function i(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}r(1703),r(6647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return a(e)||s(e)||i(e)||o()}}}]);
//# sourceMappingURL=916.2f09a7b3.js.map
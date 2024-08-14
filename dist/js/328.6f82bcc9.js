(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[328],{5328:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>f});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container",staticStyle:{"border-radius":"10px","background-color":"rgba(255, 255, 255, 0.7)"}},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.popularity)+" likes")]),r("div",[e._v("Servings: "+e._s(e.recipe.servings))]),r("div",{staticClass:"logo-container"},[e.recipe.vegetarian?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(6395)}})]):e._e(),e.recipe.vegan?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(5118)}})]):e._e(),e.recipe.glutenFree?r("div",[r("img",{staticClass:"tiny_logo",attrs:{src:t(785)}})]):e._e(),r("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[r("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])]),e._v(" Ingredients: "),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[e._v(" Instructions: "),r("ol",e._l(e.recipe._instructions,(function(t,n){return r("li",{key:n},[e._v(" "+e._s(t.step)+" ")])})),0)])])])]):e._e()])},a=[],s=t(6835),i=t(5957),o=t(8534),c=(t(2222),t(4916),t(5306),t(5827),t(1539),t(1249),t(8309),t(3318),t(9669)),u=t.n(c);const l={data:function(){return{isFull:!1,recipe:{}}},created:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function r(){var t,n,a,o,c,u,l,p,d,v,f,g,x,h,y,m,b;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t=e.$route.params.response,r.prev=2,r.next=5,e.axios.get("".concat(e.$root.store.server_domain,"/recipes/recipe/").concat(e.$route.params.recipeId),{withCredentials:!0});case 5:t=r.sent,console.log("response.status",t.status),console.log("response.data",t.data),200!==t.status&&e.$router.replace("/NotFound"),r.next=16;break;case 11:return r.prev=11,r.t0=r["catch"](2),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 16:if(n=t.data,console.log("recipe",n),n){r.next=21;break}return e.$router.replace("/NotFound"),r.abrupt("return");case 21:return a=n.analyzedInstructions,o=n.instructions,c=n.extendedIngredients,u=n.popularity,l=n.readyInMinutes,p=n.image,d=n.vegetarian,v=n.vegan,f=n.glutenFree,g=n.servings,x=n.title,h=a.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,i.Z)(e),(0,i.Z)(r))}),[]),y={instructions:o,_instructions:h,analyzedInstructions:a,extendedIngredients:c,popularity:u,readyInMinutes:l,image:p,vegetarian:d,vegan:v,glutenFree:f,servings:g,title:x},console.log("_recipe",y),e.recipe=y,m=e.$root.store.username,r.next=29,e.axios.get("".concat(e.$root.store.server_domain,"/users/favorites/check"),{params:{username:m,recipeId:e.$route.params.recipeId},withCredentials:!0});case 29:b=r.sent,b.data.isFavorite&&(e.isFull=!0),r.next=36;break;case 33:r.prev=33,r.t1=r["catch"](0),console.log(r.t1);case 36:case"end":return r.stop()}}),r,null,[[0,33],[2,11]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function r(){var t,n;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,u().defaults.withCredentials=!0,r.next=4,u().post(e.$root.store.server_domain+"/users/favorites",{recipeId:e.$route.params.recipeId});case 4:t=r.sent,console.log("this is response: ",t),201===t.status&&(e.isFull=!e.isFull,n=e.isFull?"added to":"removed from",e.$root.toast("".concat(n," favorites"),"Recipe successfully ".concat(n," your favorites"),"success")),u().defaults.withCredentials=!1,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error("Error toggling favorite:",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},p=l;var d=t(1001),v=(0,d.Z)(p,n,a,!1,null,"0521333a",null);const f=v.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},8457:(e,r,t)=>{"use strict";var n=t(9974),a=t(6916),s=t(7908),i=t(3411),o=t(7659),c=t(4411),u=t(6244),l=t(6135),p=t(4121),d=t(1246),v=Array;e.exports=function(e){var r=s(e),t=c(this),f=arguments.length,g=f>1?arguments[1]:void 0,x=void 0!==g;x&&(g=n(g,f>2?arguments[2]:void 0));var h,y,m,b,I,_,w=d(r),$=0;if(!w||this===v&&o(w))for(h=u(r),y=t?new this(h):v(h);h>$;$++)_=x?g(r[$],$):r[$],l(y,$,_);else for(b=p(r,w),I=b.next,y=t?new this:[];!(m=a(I,b)).done;$++)_=x?i(b,g,[m.value,$],!0):m.value,l(y,$,_);return y.length=$,y}},3671:(e,r,t)=>{var n=t(9662),a=t(7908),s=t(8361),i=t(6244),o=TypeError,c=function(e){return function(r,t,c,u){n(t);var l=a(r),p=s(l),d=i(l),v=e?d-1:0,f=e?-1:1;if(c<2)while(1){if(v in p){u=p[v],v+=f;break}if(v+=f,e?v<0:d<=v)throw o("Reduce of empty array with no initial value")}for(;e?v>=0:d>v;v+=f)v in p&&(u=t(u,p[v],v,l));return u}};e.exports={left:c(!1),right:c(!0)}},3411:(e,r,t)=>{var n=t(9670),a=t(9212);e.exports=function(e,r,t,s){try{return s?r(n(t)[0],t[1]):r(t)}catch(i){a(e,"throw",i)}}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),a=t(8052),s=t(2261),i=t(7293),o=t(5112),c=t(8880),u=o("species"),l=RegExp.prototype;e.exports=function(e,r,t,p){var d=o(e),v=!i((function(){var r={};return r[d]=function(){return 7},7!=""[e](r)})),f=v&&!i((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[d]=/./[d]),t.exec=function(){return r=!0,null},t[d](""),!r}));if(!v||!f||t){var g=n(/./[d]),x=r(d,""[e],(function(e,r,t,a,i){var o=n(e),c=r.exec;return c===s||c===l.exec?v&&!i?{done:!0,value:g(r,t,a)}:{done:!0,value:o(t,r,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(l,d,x[1])}p&&c(l[d],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),s=Math.floor,i=n("".charAt),o=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,p,d){var v=t+e.length,f=n.length,g=l;return void 0!==p&&(p=a(p),g=u),o(d,g,(function(a,o){var u;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return c(r,0,t);case"'":return c(r,v);case"<":u=p[c(o,1,-1)];break;default:var l=+o;if(0===l)return a;if(l>f){var d=s(l/10);return 0===d?a:d<=f?void 0===n[d-1]?i(o,1):n[d-1]+i(o,1):a}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),s=t(614),i=t(4326),o=t(2261),c=TypeError;e.exports=function(e,r){var t=e.exec;if(s(t)){var u=n(t,e,r);return null!==u&&a(u),u}if("RegExp"===i(e))return n(o,e,r);throw c("RegExp#exec called on incompatible receiver")}},2261:(e,r,t)=>{"use strict";var n=t(6916),a=t(1702),s=t(1340),i=t(7066),o=t(2999),c=t(2309),u=t(30),l=t(9909).get,p=t(9441),d=t(7168),v=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,x=a("".charAt),h=a("".indexOf),y=a("".replace),m=a("".slice),b=function(){var e=/a/,r=/b*/g;return n(f,e,"a"),n(f,r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),I=o.BROKEN_CARET,_=void 0!==/()??/.exec("")[1],w=b||_||I||p||d;w&&(g=function(e){var r,t,a,o,c,p,d,w=this,$=l(w),k=s(e),C=$.raw;if(C)return C.lastIndex=w.lastIndex,r=n(g,C,k),w.lastIndex=C.lastIndex,r;var A=$.groups,E=I&&w.sticky,R=n(i,w),S=w.source,F=0,Z=k;if(E&&(R=y(R,"y",""),-1===h(R,"g")&&(R+="g"),Z=m(k,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==x(k,w.lastIndex-1))&&(S="(?: "+S+")",Z=" "+Z,F++),t=new RegExp("^(?:"+S+")",R)),_&&(t=new RegExp("^"+S+"$(?!\\s)",R)),b&&(a=w.lastIndex),o=n(f,E?t:w,Z),E?o?(o.input=m(o.input,F),o[0]=m(o[0],F),o.index=w.lastIndex,w.lastIndex+=o[0].length):w.lastIndex=0:b&&o&&(w.lastIndex=w.global?o.index+o[0].length:a),_&&o&&o.length>1&&n(v,o[0],t,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&A)for(o.groups=p=u(null),c=0;c<A.length;c++)d=A[c],p[d[0]]=o[d[1]];return o}),e.exports=g},7066:(e,r,t)=>{"use strict";var n=t(9670);e.exports=function(){var e=n(this),r="";return e.hasIndices&&(r+="d"),e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.unicodeSets&&(r+="v"),e.sticky&&(r+="y"),r}},2999:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp,i=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=i||n((function(){return!s("a","y").sticky})),c=i||n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:i}},9441:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,r,t)=>{var n=t(7293),a=t(7854),s=a.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},2222:(e,r,t)=>{"use strict";var n=t(2109),a=t(7293),s=t(3157),i=t(111),o=t(7908),c=t(6244),u=t(7207),l=t(6135),p=t(5417),d=t(1194),v=t(5112),f=t(7392),g=v("isConcatSpreadable"),x=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),h=function(e){if(!i(e))return!1;var r=e[g];return void 0!==r?!!r:s(e)},y=!x||!d("concat");n({target:"Array",proto:!0,arity:1,forced:y},{concat:function(e){var r,t,n,a,s,i=o(this),d=p(i,0),v=0;for(r=-1,n=arguments.length;r<n;r++)if(s=-1===r?i:arguments[r],h(s))for(a=c(s),u(v+a),t=0;t<a;t++,v++)t in s&&l(d,v,s[t]);else u(v+1),l(d,v++,s);return d.length=v,d}})},1038:(e,r,t)=>{var n=t(2109),a=t(8457),s=t(7072),i=!s((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},9753:(e,r,t)=>{var n=t(2109),a=t(3157);n({target:"Array",stat:!0},{isArray:a})},1249:(e,r,t)=>{"use strict";var n=t(2109),a=t(2092).map,s=t(1194),i=s("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,r,t)=>{"use strict";var n=t(2109),a=t(3671).left,s=t(9341),i=t(7392),o=t(5268),c=!o&&i>79&&i<83,u=c||!s("reduce");n({target:"Array",proto:!0,forced:u},{reduce:function(e){var r=arguments.length;return a(this,e,r,r>1?arguments[1]:void 0)}})},4916:(e,r,t)=>{"use strict";var n=t(2109),a=t(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},7601:(e,r,t)=>{"use strict";t(4916);var n=t(2109),a=t(6916),s=t(614),i=t(9670),o=t(1340),c=function(){var e=!1,r=/[ac]/;return r.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&e}(),u=/./.test;n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var r=i(this),t=o(e),n=r.exec;if(!s(n))return a(u,r,t);var c=a(n,r,t);return null!==c&&(i(c),!0)}})},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),s=t(1702),i=t(7007),o=t(7293),c=t(9670),u=t(614),l=t(8554),p=t(9303),d=t(7466),v=t(1340),f=t(4488),g=t(1530),x=t(8173),h=t(647),y=t(7651),m=t(5112),b=m("replace"),I=Math.max,_=Math.min,w=s([].concat),$=s([].push),k=s("".indexOf),C=s("".slice),A=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),R=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),S=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,r,t){var s=R?"$":"$0";return[function(e,t){var n=f(this),s=l(e)?void 0:x(e,b);return s?a(s,e,n,t):a(r,v(n),e,t)},function(e,a){var i=c(this),o=v(e);if("string"==typeof a&&-1===k(a,s)&&-1===k(a,"$<")){var l=t(r,i,o,a);if(l.done)return l.value}var f=u(a);f||(a=v(a));var x=i.global;if(x){var m=i.unicode;i.lastIndex=0}var b=[];while(1){var E=y(i,o);if(null===E)break;if($(b,E),!x)break;var R=v(E[0]);""===R&&(i.lastIndex=g(o,d(i.lastIndex),m))}for(var S="",F=0,Z=0;Z<b.length;Z++){E=b[Z];for(var M=v(E[0]),O=I(_(p(E.index),o.length),0),T=[],N=1;N<E.length;N++)$(T,A(E[N]));var j=E.groups;if(f){var K=w([M],T,O,o);void 0!==j&&$(K,j);var U=v(n(a,void 0,K))}else U=h(M,o,O,T,j,a);O>=F&&(S+=C(o,F,O)+U,F=O+M.length)}return S+C(o,F)}]}),!S||!E||R)},5957:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});t(9753);function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e){if(Array.isArray(e))return n(e)}t(2526),t(1817),t(1539),t(2165),t(8783),t(3948),t(1038);function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t(7042),t(8309),t(4916),t(7601);function i(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}t(1703),t(6647);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return a(e)||s(e)||i(e)||o()}}}]);
//# sourceMappingURL=328.6f82bcc9.js.map
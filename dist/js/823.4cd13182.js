(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[823],{8823:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("My Favorite Recipes Page")]),t("div",[t("FavoriteRecipePreviewList",{staticClass:"FavoriteRecipe center"})],1)])},i=[],a=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},o=[],s=r(6835),c=r(5957),u=r(8534),l=(r(7658),r(1701)),p=r(3318);const f={name:"RecipePreviewList",components:{RecipePreview:l.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,u.Z)((0,s.Z)().mark((function t(){var r,n,i,a;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{n=3,i=(0,p.ij)(n),console.log(i),a=i.data.recipes,console.log(a),e.recipes=[],(r=e.recipes).push.apply(r,(0,c.Z)(a))}catch(o){console.log(o)}case 1:case"end":return t.stop()}}),t)})))()}}},v=f;var d=r(1001),h=(0,d.Z)(v,a,o,!1,null,"6a646356",null);const y=h.exports,m={components:{FavoriteRecipePreviewList:y}},g=m;var w=(0,d.Z)(g,n,i,!1,null,null,null);const b=w.exports},8457:(e,t,r)=>{"use strict";var n=r(9974),i=r(6916),a=r(7908),o=r(3411),s=r(7659),c=r(4411),u=r(6244),l=r(6135),p=r(4121),f=r(1246),v=Array;e.exports=function(e){var t=a(e),r=c(this),d=arguments.length,h=d>1?arguments[1]:void 0,y=void 0!==h;y&&(h=n(h,d>2?arguments[2]:void 0));var m,g,w,b,_,A,x=f(t),R=0;if(!x||this===v&&s(x))for(m=u(t),g=r?new this(m):v(m);m>R;R++)A=y?h(t[R],R):t[R],l(g,R,A);else for(b=p(t,x),_=b.next,g=r?new this:[];!(w=i(_,b)).done;R++)A=y?o(b,h,[w.value,R],!0):w.value,l(g,R,A);return g.length=R,g}},3411:(e,t,r)=>{var n=r(9670),i=r(9212);e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(o){i(e,"throw",o)}}},1038:(e,t,r)=>{var n=r(2109),i=r(8457),a=r(7072),o=!a((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:o},{from:i})},9753:(e,t,r)=>{var n=r(2109),i=r(3157);n({target:"Array",stat:!0},{isArray:i})},7601:(e,t,r)=>{"use strict";r(4916);var n=r(2109),i=r(6916),a=r(614),o=r(9670),s=r(1340),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=/./.test;n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=o(this),r=s(e),n=t.exec;if(!a(n))return i(u,t,r);var c=i(n,t,r);return null!==c&&(o(c),!0)}})},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(9753);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){if(Array.isArray(e))return n(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function o(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}r(1703),r(6647);function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||a(e)||o(e)||s()}}}]);
//# sourceMappingURL=823.4cd13182.js.map
"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[709],{4709:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("My Favorite Recipes Page")]),t("div",[t("FavoriteRecipePreviewList",{staticClass:"FavoriteRecipe center"})],1)])},i=[],n=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},c=[],a=r(6835),o=r(8534),l=(r(9669),r(5445));const u={name:"RecipePreviewList",components:{RecipePreview:l.Z},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,o.Z)((0,a.Z)().mark((function t(){var r,s;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:r=t.sent,console.log(r),s=r.data,e.recipes=s,console.log(s),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},p=u;var v=r(1001),d=(0,v.Z)(p,n,c,!1,null,"04f2d711",null);const f=d.exports,_={components:{FavoriteRecipePreviewList:f}},h=_;var w=(0,v.Z)(h,s,i,!1,null,null,null);const m=w.exports}}]);
//# sourceMappingURL=709.9200e236.js.map
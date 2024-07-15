"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[165],{4165:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",{staticClass:"logo-container"},[e.recipe.vegetarian?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:s(6395)}})]):e._e(),e.recipe.vegan?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:s(5118)}})]):e._e(),e.recipe.glutenFree?t("div",[t("img",{staticClass:"tiny_logo",attrs:{src:s(785)}})]):e._e()])]),e._v(" Summary: "),t("p",{domProps:{innerHTML:e._s(e.recipe.summary)}}),t("p",[e._v("Ingredients:")]),t("ul",e._l(e.recipe.ingredients,(function(s,r){return t("li",{key:r},[e._v(" "+e._s(s)+" ")])})),0),t("p",[e._v("Instructions:")]),t("ol",e._l(e.recipe.instructions,(function(s,r){return t("li",{key:r},[e._v(" "+e._s(s)+" ")])})),0)])])])]):e._e()])},n=[],i=s(6835),a=s(5957),c=s(8534);s(2222),s(4916),s(5306),s(5827),s(1539),s(1249),s(8309),s(9669),s(3318);const o={data:function(){return{isFull:!1,recipe:{}}},created:function(){var e=this;return(0,c.Z)((0,i.Z)().mark((function t(){var s,r,n,c,o,u,l,p,d,g,v,_,m,f,h;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=e.$route.params.response,t.prev=2,t.next=5,e.axios.get("".concat(e.$root.store.server_domain,"/users/my_recipes/").concat(e.$root.p.title),{withCredentials:!0});case 5:s=t.sent,console.log("response.status",s.status),console.log("response.data",s.data),200!==s.status&&e.$router.replace("/NotFound"),t.next=16;break;case 11:return t.prev=11,t.t0=t["catch"](2),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 16:if(r=s.data,console.log("recipe",r),r){t.next=21;break}return e.$router.replace("/NotFound"),t.abrupt("return");case 21:n=r.analyzedInstructions,c=r.instructions,o=r.extendedIngredients,u=r.aggregateLikes,l=r.readyInMinutes,p=r.image,d=r.vegetarian,g=r.vegan,v=r.glutenFree,_=r.servings,m=r.title,f=n.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,t){return[].concat((0,a.Z)(e),(0,a.Z)(t))}),[]),h={instructions:c,_instructions:f,analyzedInstructions:n,extendedIngredients:o,aggregateLikes:u,readyInMinutes:l,image:p,vegetarian:d,vegan:g,glutenFree:v,servings:_,title:m},console.log("_recipe",h),e.recipe=h,t.next=31;break;case 28:t.prev=28,t.t1=t["catch"](0),console.log(t.t1);case 31:case"end":return t.stop()}}),t,null,[[0,28],[2,11]])})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"}},methods:{toggleIcon:function(){this.isFull=!this.isFull}}},u=o;var l=s(1001),p=(0,l.Z)(u,r,n,!1,null,"cbea4eae",null);const d=p.exports}}]);
//# sourceMappingURL=165.3d70d773.js.map
(()=>{var e={3238:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview",class:{viewed:e.isViewed}},[t("router-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body",on:{click:e.markRecipeAsViewed}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})])]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.popularity)+" likes")]),this.recipe.vegetarian?t("li",[t("img",{staticClass:"tiny_logo",attrs:{src:r(6395)}})]):e._e(),this.recipe.vegan?t("li",[t("img",{staticClass:"tiny_logo",attrs:{src:r(5118)}})]):e._e(),this.recipe.glutenFree?t("li",[t("img",{staticClass:"tiny_logo",attrs:{src:r(785)}})]):e._e(),t("li",[t("button",{staticClass:"icon-button",staticStyle:{"background-color":"transparent","border-color":"transparent",padding:"0"},attrs:{title:"Strikethrough"},on:{click:e.toggleIcon}},[t("b-icon",{staticClass:"no-background",attrs:{icon:e.icon}})],1)])])])],1)},i=[],a=r(6835),s=r(8534),o=r(9669),c=r.n(o);r(7625);const u={data:function(){return{isFull:!1,isViewed:!1}},props:{recipe:{type:Object,required:!0}},created:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.checkIfViewed(),t.next=3,e.checkIfFavorite();case 3:case"end":return t.stop()}}),t)})))()},computed:{icon:function(){return this.isFull?"star-fill":"star"},Strikethrough:function(){return this.isFull?"Remove from favorites":"Add to favorites"}},methods:{checkIfFavorite:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var r,n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$root.store.username,t.next=4,c().get("".concat(e.$root.store.server_domain,"/users/favorites/check"),{params:{username:r,recipeId:e.recipe.id},withCredentials:!0});case 4:n=t.sent,n.data.isFavorite&&(e.isFull=!0),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error checking favorite status:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},toggleIcon:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){var r,n;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,c().defaults.withCredentials=!0,t.next=4,c().post(e.$root.store.server_domain+"/users/favorites",{recipeId:e.recipe.id});case 4:r=t.sent,console.log("this is response: ",r),200===r.status&&(e.isFull=!e.isFull,n=e.isFull?"added to":"removed from",e.$root.toast("".concat(n," favorites"),"Recipe successfully ".concat(n," your favorites"),"success")),c().defaults.withCredentials=!1,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error("Error toggling favorite:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},markRecipeAsViewed:function(){var e=this;return(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isViewed=!0,sessionStorage.setItem("recipe-viewed-".concat(e.recipe.id),"true"),t.prev=2,t.next=5,c().post("".concat(e.$root.store.server_domain,"/users/last_viewed_recipes"),{recipe_id:e.recipe.id},{withCredentials:!0});case 5:e.isViewed=!0,console.log("Recipe marked as viewed:",recipeId),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.error("Error marking recipe as viewed:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},checkIfViewed:function(){var e=sessionStorage.getItem("recipe-viewed-".concat(this.recipe.id));e&&(this.isViewed=!0)}}},l=u;var p=r(1001),d=(0,p.Z)(l,n,i,!1,null,"92f8bf60",null);const m=d.exports},6066:(e,t,r)=>{"use strict";r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),i=(r(8309),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("b-navbar",{staticClass:"sticky-top",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("img",{staticClass:"logo",attrs:{src:r(1221)}}),t("b-navbar-brand",{staticClass:"navbar-brand"},[e._v("Foody Shmoody")]),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Main")]),t("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")])],1),e.$root.store.username?t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" "+e._s(e.$root.store.username)+" ")]},proxy:!0}])},[t("b-dropdown-item",{attrs:{to:{name:"favoriteRecipes"}}},[e._v("My favorite recipes")]),t("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("My recipes")]),t("b-dropdown-item",{attrs:{to:{name:"myFamilyRecipes"}}},[e._v("My family recipes")])],1),t("b-nav-item",{on:{click:e.Logout}},[e._v("Logout")]),t("b-nav-item",[t("nav-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}]},[e._v("Add New Recipe")])],1)],1):t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-text",[e._v("Hello Guest!")]),t("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1)],1),t("router-view"),t("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Submit Your Recipe"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[t("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Image URL","label-for":"image-input","invalid-feedback":"Image URL is required",state:e.imageState}},[t("b-form-input",{attrs:{id:"image-input",state:e.imageState,required:""},model:{value:e.recipe.image,callback:function(t){e.$set(e.recipe,"image",t)},expression:"recipe.image"}})],1),t("b-form-group",{attrs:{label:"Title","label-for":"title-input","invalid-feedback":"Title is required",state:e.titleState}},[t("b-form-input",{attrs:{id:"title-input",state:e.titleState,required:""},model:{value:e.recipe.title,callback:function(t){e.$set(e.recipe,"title",t)},expression:"recipe.title"}})],1),t("b-form-group",{attrs:{label:"Ready In Minutes","label-for":"minutes-input","invalid-feedback":"Ready In Minutes is required",state:e.minutesState}},[t("b-form-input",{attrs:{id:"minutes-input",type:"number",state:e.minutesState,required:""},model:{value:e.recipe.readyInMinutes,callback:function(t){e.$set(e.recipe,"readyInMinutes",t)},expression:"recipe.readyInMinutes"}})],1),t("b-form-group",{attrs:{label:"Servings","label-for":"serving-input","invalid-feedback":"Servings is required",state:e.servingsState}},[t("b-form-input",{attrs:{id:"servings-input",type:"number",state:e.servingsState,required:""},model:{value:e.recipe.servings,callback:function(t){e.$set(e.recipe,"servings",t)},expression:"recipe.servings"}})],1),t("b-form-group",{attrs:{label:"Vegetarian","label-for":"vegetarian-input",state:e.vegetarianState}},[t("b-form-checkbox",{attrs:{id:"vegetarian-input"},model:{value:e.recipe.vegetarian,callback:function(t){e.$set(e.recipe,"vegetarian",t)},expression:"recipe.vegetarian"}})],1),t("b-form-group",{attrs:{label:"Vegan","label-for":"vegan-input",state:e.veganState}},[t("b-form-checkbox",{attrs:{id:"vegan-input"},model:{value:e.recipe.vegan,callback:function(t){e.$set(e.recipe,"vegan",t)},expression:"recipe.vegan"}})],1),t("b-form-group",{attrs:{label:"Gluten Free","label-for":"gluten-input",state:e.glutenState}},[t("b-form-checkbox",{attrs:{id:"gluten-input"},model:{value:e.recipe.glutenFree,callback:function(t){e.$set(e.recipe,"glutenFree",t)},expression:"recipe.glutenFree"}})],1),t("b-form-group",{attrs:{label:"Summary","label-for":"summary-input","invalid-feedback":"Summary is required",state:e.summaryState}},[t("b-form-textarea",{attrs:{id:"summary-input",state:e.summaryState,required:""},model:{value:e.recipe.summary,callback:function(t){e.$set(e.recipe,"summary",t)},expression:"recipe.summary"}})],1),t("b-form-group",{attrs:{label:"Ingredients","label-for":"ingredients-input"}},[e._l(e.recipe.ingredients,(function(r,n){return t("div",{key:n,staticClass:"d-flex mb-2 align-items-center"},[t("b-form-input",{attrs:{placeholder:"Ingredient name",required:""},model:{value:e.recipe.ingredients[n].name,callback:function(t){e.$set(e.recipe.ingredients[n],"name",t)},expression:"recipe.ingredients[index].name"}}),t("b-form-input",{attrs:{placeholder:"Amount",required:""},model:{value:e.recipe.ingredients[n].amount,callback:function(t){e.$set(e.recipe.ingredients[n],"amount",t)},expression:"recipe.ingredients[index].amount"}}),t("b-button",{staticClass:"ml-2",attrs:{variant:"danger"},on:{click:function(t){return e.removeIngredient(n)}}},[e._v("Remove")])],1)})),t("b-button",{attrs:{variant:"success"},on:{click:e.addIngredient}},[e._v("Add Ingredient")])],2),t("b-form-group",{attrs:{label:"Instructions","label-for":"instructions-input"}},[e._l(e.recipe.instructions,(function(r,n){return t("div",{key:n,staticClass:"d-flex mb-2"},[t("b-form-textarea",{attrs:{required:""},model:{value:e.recipe.instructions[n],callback:function(t){e.$set(e.recipe.instructions,n,t)},expression:"recipe.instructions[index]"}}),t("b-button",{staticClass:"ml-2",attrs:{variant:"danger"},on:{click:function(t){return e.removeInstruction(n)}}},[e._v("Remove")])],1)})),t("b-button",{attrs:{variant:"success"},on:{click:e.addInstruction}},[e._v("Add Instruction")])],2)],1)])],1)}),a=[],s=r(6835),o=r(8534),c=(r(7658),r(561),r(9669)),u=r.n(c);const l={name:"App",data:function(){return{recipe:{servings:"",image:"",title:"",readyInMinutes:"",vegetarian:!1,vegan:!1,glutenFree:!1,summary:"",ingredients:[{name:"",amount:""}],instructions:[""]},servingsState:null,imageState:null,titleState:null,minutesState:null,vegetarianState:null,veganState:null,glutenState:null}},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.imageState=!!this.recipe.image,this.titleState=!!this.recipe.title,this.minutesState=!!this.recipe.readyInMinutes,this.servingsState=!!this.recipe.servings,e},resetModal:function(){this.recipe={servings:"",image:"",title:"",readyInMinutes:"",vegetarian:!1,vegan:!1,glutenFree:!1,summary:"",ingredients:[{name:"",amount:""}],instructions:[""]},this.servingsState=null,this.imageState=null,this.titleState=null,this.minutesState=null,this.vegetarianState=null,this.veganState=null,this.glutenState=null},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,u().post(e.$root.store.server_domain+"/users/my_recipes",e.recipe);case 5:r=t.sent,console.log("Recipe added successfully:",r.data),e.$root.toast("Add Recipe","Recipe Added successfully","success"),e.$router.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.error("There was an error adding the recipe:",t.t0);case 14:e.$nextTick((function(){e.$bvModal.hide("modal-prevent-closing")}));case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))()},addIngredient:function(){this.recipe.ingredients.push({name:"",amount:""})},removeIngredient:function(e){this.recipe.ingredients.splice(e,1)},addInstruction:function(){this.recipe.instructions.push("")},removeInstruction:function(e){this.recipe.instructions.splice(e,1)}}},p=l;var d=r(1001),m=(0,d.Z)(p,i,a,!1,null,null,null);const v=m.exports;var f=r(1939),g=r.n(f),h=r(869),b=r(3017),y=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("br"),t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"columns"},[t("div",{staticClass:"left-column"},[t("div",{staticClass:"button-container"},[t("button",{on:{click:e.fetchRandomRecipe}},[e._v("Random Recipe")])]),t("RecipePreviewList",{ref:"randomRecipesList",staticClass:"RandomRecipes center",attrs:{title:"Explore Recipes",recipes:e.randomRecipes},on:{"update:recipes":e.handleUpdateRecipes}})],1),t("div",{staticClass:"right-column"},[e.$root.store.username?t("RecipePreviewList",{ref:"lastViewedRecipesList",class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",recipes:e.lastViewedRecipes,disabled:""},on:{"update:lastViewedRecipes":e.handleUpdateLastViewedRecipes}}):t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("Login to view")])],1)],1)])])}),w=[],k=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),e.recipes&&e.recipes.length>0?t("div",e._l(e.recipes,(function(e){return t("RecipePreview",{key:e.id,attrs:{recipe:e}})})),1):t("div",[e._v(" No recipes available. ")])])},_=[],R=r(3238);const x={name:"RecipePreviewList",components:{RecipePreview:R.Z},props:{title:{type:String,required:!0},recipes:{type:Array,default:function(){return[]}}},mounted:function(){this.updateRecipes(),this.fetchLastViewedRecipes()},methods:{updateRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r,n;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(e.$root.store.server_domain,"/recipes/random"));case 3:r=t.sent,n=r.data,console.log("API Response:",r),n&&n.length>0?e.$emit("update:recipes",n):console.warn("No recipes available or empty response:",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error("Error fetching random recipes:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},fetchLastViewedRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r,n;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(e.$root.store.server_domain,"/users/last_viewed_recipes"),{withCredentials:!0});case 3:r=t.sent,n=r.data.recipes,e.$emit("update:lastViewedRecipes",n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching last viewed recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},S=x;var C=(0,d.Z)(S,k,_,!1,null,"b17ab74a",null);const I=C.exports,$={components:{RecipePreviewList:I},data:function(){return{randomRecipes:[],lastViewedRecipes:[]}},methods:{fetchRandomRecipe:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.randomRecipesList.updateRecipes();case 2:case"end":return t.stop()}}),t)})))()},handleUpdateRecipes:function(e){this.randomRecipes=e},fetchLastViewedRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.lastViewedRecipesList.fetchLastViewedRecipes();case 2:case"end":return t.stop()}}),t)})))()},handleUpdateLastViewedRecipes:function(e){this.lastViewedRecipes=e}},mounted:function(){this.$root.store.username&&this.fetchLastViewedRecipes()}},Z=$;var F=(0,d.Z)(Z,y,w,!1,null,"f9d1f94a",null);const L=F.exports;var P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},V=[],A={},M=(0,d.Z)(A,P,V,!1,null,null,null);const E=M.exports;var O=[{path:"/",name:"main",component:L},{path:"/register",name:"register",component:function(){return r.e(7).then(r.bind(r,9007))}},{path:"/about",name:"about",component:function(){return r.e(411).then(r.bind(r,411))}},{path:"/login",name:"login",component:function(){return r.e(522).then(r.bind(r,4522))}},{path:"/search",name:"search",component:function(){return r.e(514).then(r.bind(r,5514))}},{path:"   ",name:"recipe",component:function(){return Promise.all([r.e(318),r.e(916)]).then(r.bind(r,916))}},{path:"   ",name:"myrecipe",component:function(){return Promise.all([r.e(318),r.e(266)]).then(r.bind(r,266))}},{path:"   ",name:"recipe_minimal",component:function(){return Promise.all([r.e(318),r.e(960)]).then(r.bind(r,5960))}},{path:"*",name:"notFound",component:E},{path:"/MyFavoriteRecipesPage",name:"favoriteRecipes",component:function(){return r.e(754).then(r.bind(r,4754))}},{path:"/MyRecipesPage",name:"myRecipes",component:function(){return Promise.all([r.e(318),r.e(824)]).then(r.bind(r,4824))}},{path:"/MyFamilyRecipesPage",name:"myFamilyRecipes",component:function(){return Promise.all([r.e(318),r.e(945)]).then(r.bind(r,2945))}}];const q=O;var j=r(8345),T=r(8620),N=(r(7024),r(508)),U=r(7563),D=r(7419),B=r(1869),G=r(295),H=r(3090),Y=r(794),K=r(4063),X=r(8793),z=r(7772);n["default"].use(h.XG7),n["default"].use(b.A7),n["default"].use(j.ZP);var J=new j.ZP({routes:q});[N.E,U.w6,D.g,B.SY,G.xL,H.u3,Y.v5,K.F,X.m$,z.A6].forEach((function(e){return n["default"].use(e)})),n["default"].use(T.ZP),u().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(g(),u()),n["default"].config.productionTip=!1;var Q={server_domain:"https://FoodyShmoody.cs.bgu.ac.il",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(Q),new n["default"]({router:J,data:function(){return{store:Q}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(v)}}).$mount("#app")},7625:()=>{},785:(e,t,r)=>{"use strict";e.exports=r.p+"img/gluten_free.62a8cc86.png"},5118:(e,t,r)=>{"use strict";e.exports=r.p+"img/vegan_logo.fc80d71b.jpg"},6395:(e,t,r)=>{"use strict";e.exports=r.p+"img/vegetarian-logo.9408e55e.png"},1221:(e,t,r)=>{"use strict";e.exports=r.p+"img/logo.a30b7a2e.png"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,a)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,i,a]=e[l],o=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,a<s&&(s=a));if(o){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,i,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{7:"9edfd6a6",266:"604ff849",318:"1bf1f067",411:"c1797e1a",514:"d58bc9d4",522:"e681f9df",754:"61d7bf50",824:"0c7c5fd8",916:"fd36b6bc",945:"6920c6ce",960:"60220dcd"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{7:"d4c4d2ff",266:"5103ea19",411:"13df5292",514:"2b3b23e7",522:"a247fd90",754:"c4437a6c",824:"82b0df59",916:"b367bd28",945:"68388e5c",960:"a35d9a03"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(n,i,a,s)=>{if(e[n])e[n].push(i);else{var o,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+a),o.src=n),e[n]=[i];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,i)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=s,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=r[n],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){i=s[n],a=i.getAttribute("data-href");if(a===e||a===t)return i}},n=n=>new Promise(((i,a)=>{var s=r.miniCssF(n),o=r.p+s;if(t(s,o))return i();e(n,o,null,i,a)})),i={143:0};r.f.miniCss=(e,t)=>{var r={7:1,266:1,411:1,514:1,522:1,754:1,824:1,916:1,945:1,960:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise(((r,n)=>i=e[t]=[r,n]));n.push(i[2]=a);var s=r.p+r.u(t),o=new Error,c=n=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,i[1](o)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[s,o,c]=n,u=0;if(s.some((t=>0!==e[t]))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(6066)));n=r.O(n)})();
//# sourceMappingURL=app.f840081b.js.map
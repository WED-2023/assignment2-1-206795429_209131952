import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  
  {
    path: "   ",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },

  {
    path: "/RecipeMinimalViewPage",
    name: "recipe_minimal",
    component: () => import("./pages/RecipeMinimalViewPage.vue"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/MyFavoriteRecipesPage",
    name: "favoriteRecipes",
    component: () => import("./pages/MyFavoriteRecipesPage"),
  },
  {
    path: "/MyRecipesPage",
    name: "myRecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/MyFamilyRecipesPage",
    name: "myFamilyRecipes",
    component: () => import("./pages/MyFamilyRecipesPage"),
  },
];

export default routes;

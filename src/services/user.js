// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";



  export function mockAddFavorite(recipeId) {
    return { status: 200, response: { data: { message: "The Recipe successfully saved as favorite", success: true}} };
  }
  
  export function mockAddUserRecipe(recipeDetails) {
    return { status: 200, response: { data: { message: "The Recipe successfully added to My Recipes", success: true}} };

  }
  
  const state = {
    // server_domain: "http://localhost:3000",
    server_domain: "https://FoodyShmoody.cs.bgu.ac.il"
  }
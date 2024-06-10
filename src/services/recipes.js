// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import my_recipe_preview from "../assets/mocks/my_recipe_preview.json";
import my_family_preview from "../assets/mocks/my_family_recipe_preview.json";



export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(recipe_preview[i % recipe_preview.length]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view } } ;
  }

export function mockGetRecipesPreviewFromSearch(amount = 5) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(recipe_full_view[i % recipe_preview.length]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetMyRecipesPreview(amount = 1) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(my_recipe_preview[i % recipe_preview.length]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetMyFamilyRecipesPreview(amount = 1) {
  let recipes = [];
  for(let i = 0; i < amount; i++){
    recipes.push(my_family_preview[i % recipe_preview.length]);
  }

  return { data: { recipes: recipes } };
}
  

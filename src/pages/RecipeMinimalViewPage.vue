<template>
    <div class="container" style="border-radius: 10px; background-color: rgba(255, 255, 255, 0.7);">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1>{{ recipe.title }}</h1>
          <img :src="recipe.image" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
              <div class="mb-3">
                <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
                <div class="logo-container">
                <div v-if="recipe.vegetarian">
                  <img src="../assets/vegetarian-logo.png" class="tiny_logo" />
                </div>
                <div v-if="recipe.vegan">
                  <img src="../assets/vegan_logo.jpg" class="tiny_logo" />
                </div>
                <div v-if="recipe.glutenFree">
                  <img src="../assets/gluten_free.png" class="tiny_logo" />
                </div>
                </div>
              </div>
              Summary:
              <p v-html="recipe.summary"></p>
              <p>Ingredients:</p>
            <ul>
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                {{ ingredient }}
              </li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li v-for="(step, index) in recipe.instructions" :key="index">
                {{ step }}
              </li>
            </ol>
            </div>
          </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import { mockFamilyRecipeView } from "../services/recipes.js";
  export default {
    data() {
      return {
         isFull: false,
        recipe: null 
      };
    },
    async created() {
    try {
      const response = mockFamilyRecipeView(this.$route.params.recipeId);
      const recipe = response.data.recipe;
      
      if (!recipe) {
        // Handle scenario where recipe is not found
        this.$router.replace("/NotFound");
        return;
      }
      
      // Set the recipe to component data
      this.recipe = recipe;
    } catch (error) {
      console.error(error);
      this.$router.replace("/NotFound");
    }
  },
      computed: {
      icon() {
        return this.isFull ? 'star-fill' : 'star';
      }
    },
      methods: {
      toggleIcon() {
        this.isFull = !this.isFull;
      },
      }
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
  }
  .wrapped {
    width: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 300px
  }
  /* .recipe-header{
  
  } */
  .tiny_logo {
    width:35px;
    height: 35px;
  }
  
  .logo-container {
    display: flex;
  }
  .logo-container > div {
    margin-right: 10px; /* Adjust as needed */
  }
  
  .no-background {
    background-color: transparent;
    color: #f0ad4e;
    font-size: 2rem;
  }

  .container{
    font-weight: bold;
  }
  
  </style>
  
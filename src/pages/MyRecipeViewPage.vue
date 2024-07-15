<template>
    <div class="container">
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
                 {{ ingredient.amount }} {{ ingredient.ingredient }}
              </li>
            </ul>
            <p>Instructions:</p>
            <ol>
              <li v-for="(instruction, index) in recipe.instructions" :key="index">
                {{ instruction.instruction }}
              </li>
            </ol>
            </div>
          </div>
          </div>
        </div>
        <!-- {{ $route.params }}
        {{ recipe }} -->
      </div>
  </template>
  
  <script>
import axios from 'axios';
import { mockGetRecipeFullDetails } from "../services/recipes.js";
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      response = this.$route.params.response;

      try {
        response = await this.axios.get(
        `${this.$root.store.server_domain}/users/my_recipes/${this.$route.params.title}`,
        { withCredentials: true }
        );

        console.log("response.status", response.status);
        console.log("response.data", response.data);  // Add this line to log the response data
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let recipe = response.data; // Adjusted to directly use response data
      console.log("recipe", recipe);  // Add this line to log the recipe data

      if (!recipe) {
        this.$router.replace("/NotFound");
        return;
      }

      let {
        instructions,
        readyInMinutes,
        image,
        vegetarian,
        vegan,
        summary,
        ingredients,
        glutenFree,
        title
      } = recipe;

    

      let _recipe = {
        instructions,
        readyInMinutes,
        image,
        vegetarian,
        vegan,
        summary,
        ingredients,
        glutenFree,
        title
      };

      console.log("_recipe", _recipe);  // Add this line to log the transformed recipe data
      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
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
  
  </style>
  
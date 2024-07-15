<template>
    <b-container>
      <h3>
        {{ title }}
        <slot></slot>
      </h3>
      <b-row>
        <b-col v-for="r in recipes" :key="r.id">
          <MyRecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import MyRecipePreview from "./MyRecipePreview.vue";
  import { mockGetMyRecipesPreview } from "../services/recipes.js";
  import axios from 'axios';
  export default {
    name: "RecipePreviewList",
    components: {
      MyRecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/my_recipes",
            
          );
          const recipes = response.data;
          this.recipes = recipes;
          //this.$emit('update:myRecipes', recipes);
  
          // const amountToFetch = 3; // Set this to how many recipes you want to fetch
          // const response = mockGetMyRecipesPreview(amountToFetch);
  
  
          console.log(response);
          //const recipes = response.data.recipes;
          console.log(recipes);
          //this.recipes = [];
          // this.recipes.push(...recipes);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .b-container {
    min-height: 400px;
  }
  </style>
  
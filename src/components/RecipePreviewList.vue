<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes && recipes.length > 0">
      <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" @viewed="handleViewedRecipe(r.id)"/>
    </div>
    <div v-else>
      No recipes available.
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import axios from 'axios';
// import { mockGetRecipesPreview } from "../services/recipes.js";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      default: () => [],
    },
    
  },
  // data() {
  //   return {
  //     recipes_data: []
  //   };
  // },
  mounted() {
    this.updateRecipes();
    this.fetchLastViewedRecipes(); 
  },
  methods: {
    async updateRecipes() {
    try {
      const response = await axios.get(`${this.$root.store.server_domain}/recipes/random`);
      const recipes = response.data;
      console.log('API Response:', response);

      // Check if recipes is not empty
      if (recipes && recipes.length > 0) {
        this.$emit('update:recipes', recipes); // Emit event to parent component with updated recipes
        // this.recipes = recipes; // Assign fetched recipes to component data
      } else {
        console.warn('No recipes available or empty response:', recipes);
        // Optionally set a default message or handle no recipes scenario
        // For example:
        // this.recipes = []; // Clear existing recipes
        // this.recipes = null; // Or set it to null
      }
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  },
  async fetchLastViewedRecipes() {
      try {
        const response = await axios.get(`${this.$root.store.server_domain}/users/last_viewed_recipes`, {
          withCredentials: true // Ensure cookies or session tokens are sent
        });
        const recipes = response.data.recipes;
        this.$emit('update:lastViewedRecipes', recipes);
      } catch (error) {
        console.error('Error fetching last viewed recipes:', error);
      }
    },
    async markAsViewed(recipeId) {
      try {
        await axios.post(`${this.$root.store.server_domain}/users/last_viewed_recipes`, { recipe_id: recipeId }, {
          withCredentials: true // Ensure cookies or session tokens are sent
        });
        console.log('Recipe marked as viewed:', recipeId);
      } catch (error) {
        console.error('Error marking recipe as viewed:', error);
      }
    },
  handleViewedRecipe(recipeId) {
    this.markAsViewed(recipeId);
    // Any additional logic when a recipe is viewed can be added here
  }
}
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

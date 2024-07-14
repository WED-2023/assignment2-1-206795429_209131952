<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes && recipes.length > 0">
      <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" />
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
  },
  methods: {
    async updateRecipes() {
    try {
      const response = await axios.get(`${this.$root.store.server_domain}/recipes/random`);
      const recipes = response.data;
      console.log('API Response:', response);

      // Check if recipes is not empty
      if (recipes && recipes.length > 0) {
        this.recipes = recipes; // Assign fetched recipes to component data
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
  }
}
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

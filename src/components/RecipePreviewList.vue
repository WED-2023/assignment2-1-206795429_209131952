<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes && recipes.length > 0">
      <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r"/>
    </div>
    <div v-else>
      No recipes available.
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import axios from 'axios';
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
      } else {
        console.warn('No recipes available or empty response:', recipes);
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
}
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>

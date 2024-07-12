<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes.length === 0">No recipes available.</div>
    <div v-else>
      <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" />
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
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        const response = mockGetRecipesPreview(amountToFetch);


        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    try {
      const response = await axios.get(this.$root.store.server_domain+'/recipes/random');
      const recipes = response.data;
      this.recipes = recipes;
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

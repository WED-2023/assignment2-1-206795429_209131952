<template>
  <div class="container">
    <br>
    <br>
    <h1 class="title">Main Page</h1>
    <div class="columns">
      <div class="left-column">
        <div class="button-container">
          <button @click="fetchRandomRecipe">Random Recipe</button>
        </div>
        <RecipePreviewList
          ref="randomRecipesList"
          title="Explore Recipes"
          :recipes="randomRecipes"
          @update:recipes="handleUpdateRecipes"
          class="RandomRecipes center"
        />
      </div>
      <div class="right-column">
        <div v-if="!$root.store.username" style="display: flex; justify-content: center;">
          <router-link to="/login" tag="button">Login to view</router-link>
        </div>
        <RecipePreviewList
          v-else
          ref="lastViewedRecipesList"
          title="Last Viewed Recipes"
          :recipes="lastViewedRecipes"
          @update:lastViewedRecipes="handleUpdateLastViewedRecipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
   data() {
    return {
      randomRecipes: [],
      lastViewedRecipes: []
    };
  },
  methods: {
    async fetchRandomRecipe() {
      await this.$refs.randomRecipesList.updateRecipes();
    },
    handleUpdateRecipes(newRecipes) {
      this.randomRecipes = newRecipes;
    },
    async fetchLastViewedRecipes() {
      await this.$refs.lastViewedRecipesList.fetchLastViewedRecipes();
    },
    handleUpdateLastViewedRecipes(newRecipes) {
      this.lastViewedRecipes = newRecipes;
    }
  },
  mounted() {
    if (this.$root.store.username) {
      this.fetchLastViewedRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.columns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.left-column,
.right-column {
  flex: 1;
  padding: 20px;
}

.left-column {
  border-right: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.right-column {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.RandomRecipes {
  margin: 10px 0;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.title{
  font-size: 2rem; /* Adjust the size as needed */
  color: #2c3e50; /* Text color */
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  padding: 5px 5px; /* Adds space around the text */
  display: inline-block;
  border-radius: 10px;
}
</style>
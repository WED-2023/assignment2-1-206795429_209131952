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
// import recipes from "../assets/mocks/recipe_preview.json";
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
  //   fetchRandomRecipe() {
  //   const shuffled = this.allRecipes.sort(() => 0.5 - Math.random());
  //   this.randomRecipes = shuffled.slice(0, 3);
  // }
  // async fetchRandomRecipe() {
  //     try {
  //       // const response = await axios.get(`${this.$root.store.server_domain}/recipes/random`);
  //       // this.randomRecipes = response.data.recipes;
  //       // Emit event to update recipes in RecipePreviewList
  //       this.$refs.randomRecipes.updateRecipes();
  //     } catch (error) {
  //       console.error('Error fetching random recipes:', error);
  //     }
  //   }
  // },
    // handleUpdateRecipes(newRecipes) {
    //   this.randomRecipes = newRecipes;
    // }
    async fetchRandomRecipe() {
      // Call fetchRandomRecipes method in RecipePreviewList.vue through ref
      await this.$refs.randomRecipesList.fetchRandomRecipes();
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
  background-color: #f9f9f9;
}

.right-column {
  background-color: #f1f1f1;
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
</style>
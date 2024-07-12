<template>
  <div class="container">
    <br>
    <br>
    <h1 class="title">Main Page</h1>
    <div class = "columns">
      <div class = "left-column">
        <div class="button-container">
          <button @click="fetchRandomRecipe">Random Recipe</button>
        </div>
        <RecipePreviewList
          title="Explore this Recipes"
          :recipes="randomRecipes"
          class="RandomRecipes center"
        />
      </div>
      <div class = "right-column">

        <div style="display: flex; justify-content: center;">
        <router-link v-if="!$root.store.username" to="/login" tag="button" style="margin: 0 auto;">You need to Login to view this</router-link>
    </div>
        <!-- {{ !$root.store.username }} -->
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>
        <!-- <div
          style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
        >
          Centeredasdasdad
        </div>-->
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
      // allRecipes: recipes,
      randomRecipes: []
    };
  },
  methods: {
  //   fetchRandomRecipe() {
  //   const shuffled = this.allRecipes.sort(() => 0.5 - Math.random());
  //   this.randomRecipes = shuffled.slice(0, 3);
  // }
  async fetchRandomRecipe() {
      try {
        const response = await axios.get('/api/recipes/random');
        this.randomRecipes = response.data.recipes; // Assuming server sends an array of recipes
      } catch (error) {
        console.error('Error fetching random recipes:', error);
      }
    }
  },
  mounted() {
    this.fetchRandomRecipe();
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.columns {
  //display: flex;
  //width: 100%;
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
  //added
  background-color: #f9f9f9;
}
.right-column {
  background-color: #f1f1f1;
}

.RandomRecipes {
  margin: 10px 0;
}
.button-container {
  /* Center the button horizontally and vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Adjust as needed */
}

</style>

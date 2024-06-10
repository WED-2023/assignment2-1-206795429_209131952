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
        <RecipePreviewList title="Explore this Recipes" class="RandomRecipes center" />
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
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  methods: {
    fetchRandomRecipe() {
      // Fetch random recipe logic goes here
      // You can make an API call to get a random recipe
      // Update the RecipePreviewList component with the fetched recipe
    }
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
  display: flex;
  width: 100%;
}

.left-column,
.right-column {
  flex: 1;
  padding: 20px;
}

.left-column {
  border-right: 1px solid #ccc;
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

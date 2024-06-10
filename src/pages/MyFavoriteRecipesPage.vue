<template>
  <div class="container">
    <br>
    <br>
    <h1 class="title">My Favorite Recipes Page</h1>
    <div>
        <FavoriteRecipePreviewList class="FavoriteRecipe center" />
        </div>
    </div>
</template>
  <script>

import FavoriteRecipePreviewList from "../components/FavoriteRecipePreviewList";
export default {
  components: {
    FavoriteRecipePreviewList
  },
};

</script>

<style>
.FavoriteRecipe {
  margin: 10px 0 10px;
}

.FavoriteRecipe {
  margin: 10px 0;
}
</style>
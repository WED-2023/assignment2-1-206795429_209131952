<template>
  <div class="container" style="border-radius: 10px; background-color: rgba(255, 255, 255, 0.7);">
    <br>
    <br>
    <h1 class="title">My Family Recipes Page</h1>
    <div>
        <MyFamilyRecipePreviewList class="FavoriteRecipe center" />
        </div>
    </div>
</template>
  <script>

import MyFamilyRecipePreviewList from "../components/MyFamilyPreviewList";
export default {
  components: {
    MyFamilyRecipePreviewList
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
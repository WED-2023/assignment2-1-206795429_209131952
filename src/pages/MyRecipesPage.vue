<template>
  <div class="container" style="border-radius: 10px; background-color: rgba(255, 255, 255, 0.7);">
    <br>
    <br>
    <h1 class="title">My Recipes Page</h1>
    <div>
        <MyRecipePreviewList class="FavoriteRecipe center" />
        </div>
    </div>
</template>
  <script>

import MyRecipePreviewList from "../components/MyRecipePreviewList";
export default {
  components: {
    MyRecipePreviewList
  },
  data(){
    return{
      myRecipes: []
    }
  }
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
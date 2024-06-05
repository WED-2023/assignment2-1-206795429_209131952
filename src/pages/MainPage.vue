<template>
  <div class="container">
    <br>
    <br>
    <h1 class="title">Main Page</h1>
    <div class = "columns">
      <div class = "left-column">
        <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
      </div>
      <div class = "right-column">
        <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>
        {{ !$root.store.username }}
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
</style>

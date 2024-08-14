<template>
  <div class="container" style="border-radius: 10px; background-color: rgba(255, 255, 255, 0.7);">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
              <div>Servings: {{ recipe.servings }}</div>
              <div class="logo-container">
                <div v-if="recipe.vegetarian">
                  <img src="../assets/vegetarian-logo.png" class="tiny_logo" />
                </div>
                <div v-if="recipe.vegan">
                  <img src="../assets/vegan_logo.jpg" class="tiny_logo" />
                </div>
                <div v-if="recipe.glutenFree">
                  <img src="../assets/gluten_free.png" class="tiny_logo" />
                </div>
                <button @click="toggleIcon" title="Strikethrough" class="icon-button" style="background-color: transparent; border-color: transparent; padding: 0;">
                  <b-icon :icon="icon" class="no-background"></b-icon>
                </button>
              </div>
            </div>
            Ingredients:
            <ul>
              <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="(step, index) in recipe._instructions" :key="index">
                {{ step.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockGetRecipeFullDetails } from "../services/recipes.js";
import axios from 'axios';
export default {
  data() {
    return {
       isFull: false,
      recipe: {}
    };
  },
  async created() {
    try {
      let response;
      response = this.$route.params.response;

      try {
        response = await this.axios.get(
        `${this.$root.store.server_domain}/recipes/recipe/${this.$route.params.recipeId}`,
        { withCredentials: true }
        );

        console.log("response.status", response.status);
        console.log("response.data", response.data);  // Add this line to log the response data
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let recipe = response.data; // Adjusted to directly use response data
      console.log("recipe", recipe);  // Add this line to log the recipe data

      if (!recipe) {
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        vegetarian,
        vegan,
        glutenFree,
        servings,
        title
      } = recipe;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        vegetarian,
        vegan,
        glutenFree,
        servings,
        title
      };

      console.log("_recipe", _recipe);  // Add this line to log the transformed recipe data
      this.recipe = _recipe;
      //added
      const username = this.$root.store.username; // Assuming you have the username stored here
      const favoriteCheck = await this.axios.get(
        `${this.$root.store.server_domain}/users/favorites/check`,
        {
          params: {
            username: username,
            recipeId: this.$route.params.recipeId,
          },
          withCredentials: true,
        }
      );

      if (favoriteCheck.data.isFavorite) {
        this.isFull = true;
      }
      //
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    icon() {
      return this.isFull ? 'star-fill' : 'star';
    }
  },
  methods: {
    async toggleIcon() {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(this.$root.store.server_domain+'/users/favorites', {
          recipeId: this.$route.params.recipeId,
        });
        console.log("this is response: ", response)

        if (response.status === 201) {
          this.isFull = !this.isFull;
          const action = this.isFull ? 'added to' : 'removed from';
          this.$root.toast(`${action} favorites`, `Recipe successfully ${action} your favorites`, "success");
        }
        axios.defaults.withCredentials = false;
      } catch (error) {
        // Handle error
        console.error('Error toggling favorite:', error);
      }
    },
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 300px
}
.tiny_logo {
  width:35px;
  height: 35px;
}

.logo-container {
  display: flex;
}
.logo-container > div {
  margin-right: 10px; /* Adjust as needed */
}

.no-background {
  background-color: transparent;
  color: #f0ad4e;
  font-size: 1.5rem;
}
.recipe-header img {
  width: 200px; /* Adjust the width as needed */
  height: 200px; /* Adjust the height as needed */
}

.icon-button {
  pointer-events: auto;
  position: relative;
  z-index: 10; /* Ensure it's on top */
}

.container{
    font-weight: bold;
  }
</style>

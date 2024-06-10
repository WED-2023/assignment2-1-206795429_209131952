<template>
    <div class="container">
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
                <div>Likes: {{ recipe.aggregateLikes }} likes</div>
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
              Summary:
              <ul>
                <li>
                  {{ r.summary }}
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <!-- <pre>
        {{ $route.params }}
        {{ recipe }}
      </pre
        > -->
      </div>
  </template>
  
  <script>
  import { mockGetMyFamilyRecipesPreview } from "../services/recipes.js";
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
        // response = this.$route.params.response;
  
        try {
          // response = await this.axios.get(
          //   this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
          //   {
          //     withCredentials: true
          //   }
          // );
  
          response = mockGetMyFamilyRecipesPreview(this.$route.params.recipeId);
  
          // console.log("response.status", response.status);
          //if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
  
        const recipes = response.data.recipe; // Get the array of recipes
        const recipe = recipes.find(r => r.id === parseInt(this.$route.params.recipeId));
        
        if (!recipe) {
        this.$router.replace("/NotFound");
        return;
      }
  
        let {
          summary,
          glutenFree,
          vegan,
          vegetarian,
          aggregateLikes,
          readyInMinutes,
          image,
          title
        } = recipe;
  
        // let _instructions = analyzedInstructions
        //   .map((fstep) => {
        //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
        //     return fstep.steps;
        //   })
        //   .reduce((a, b) => [...a, ...b], []);

  
        let _recipe = {
          aggregateLikes,
          readyInMinutes,
          image,
          vegetarian,
          vegan,
          glutenFree,
          title
        };
  
        this.recipe = _recipe;
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
      toggleIcon() {
        this.isFull = !this.isFull;
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
  /* .recipe-header{
  
  } */
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
    font-size: 2rem;
  }
  
  </style>
  
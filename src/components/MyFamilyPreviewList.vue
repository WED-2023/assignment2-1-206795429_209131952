  <template>
      <b-container>
        <h3>
          {{ title }}
          <slot></slot>
        </h3>
        <b-row>
          <b-col v-for="r in recipes" :key="r.id">
            <RecipeMinimalPreview class="recipePreview" :recipe="r" />
          </b-col>
        </b-row>
      </b-container>
    </template>
    
    <script>
    import RecipeMinimalPreview from "./RecipeMinimalPreview.vue";
    import { mockGetMyFamilyRecipesPreview } from "../services/recipes.js";
    export default {
      name: "MyFamilyRecipePreviewList",
      components: {
        RecipeMinimalPreview
      },
      props: {
        title: {
          type: String,
          required: true
        },
        recipes: {
        type: Array,
        default: () => [],
      },
      },
      // data() {
      //   return {
      //     recipes: []
      //   };
      // },
      mounted() {
        this.updateRecipes();
      },
      methods: {
        async updateRecipes() {
          try {
            const response = await this.axios.get(
              this.$root.store.server_domain + "/recipes/random",
            );
    
            const amountToFetch = 3; // Set this to how many recipes you want to fetch
            // const response = mockGetMyFamilyRecipesPreview(amountToFetch);
    
    
            console.log(response);
            const recipes = response.data.recipes;
            console.log(recipes);
            this.recipes = [];
            this.recipes.push(...recipes);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    </script>
    
    <style lang="scss" scoped>
    .container {
      min-height: 400px;
    }
    </style>
    
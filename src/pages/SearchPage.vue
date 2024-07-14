<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-form @submit.prevent="onSearch">
      <b-form-group
        id="input-group-search"
        label-cols-sm="3"
        label="Search:"
        label-for="search"
      >
        <b-form-input
          id="search"
          v-model="$v.form.search.$model"
          type="text"
          :state="validateState('search')"
        ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.search.required">
            Search is required
          </b-form-invalid-feedback>
      </b-form-group>

      <!-- Select number of recipes to display -->
      <b-form-group
        id="input-group-count"
        label-cols-sm="3"
        label="Recipes per page:"
        label-for="count"
      >
        <b-form-select
          id="count"
          v-model="recipesPerPage"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </b-form-select>
      </b-form-group>
      
      <!-- Cuisines filter -->
      <b-form-group
        id="input-group-cuisines"
        label-cols-sm="3"
        label="Cuisines:"
        label-for="cuisines"
      >
        <b-button v-b-toggle.cuisines-collapse variant="link" class="dropdown-toggle">Select Cuisines</b-button>
        <b-collapse id="cuisines-collapse">
          <b-form-checkbox-group v-model="selectedCuisines" class="checkbox-group">
            <b-form-checkbox v-for="cuisine in cuisines" :key="cuisine.value" :value="cuisine.value" class="checkbox-item">
              {{ cuisine.label }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-collapse>
      </b-form-group>

      <!-- Diets filter -->
      <b-form-group
        id="input-group-diets"
        label-cols-sm="3"
        label="Diets:"
        label-for="diets"
      >
        <b-button v-b-toggle.diets-collapse variant="link" class="dropdown-toggle">Select Diets</b-button>
        <b-collapse id="diets-collapse">
          <b-form-checkbox-group v-model="selectedDiets" class="checkbox-group">
            <b-form-checkbox v-for="diet in diets" :key="diet.value" :value="diet.value" class="checkbox-item">
              {{ diet.label }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-collapse>
      </b-form-group>

      <!-- Intolerances filter -->
      <b-form-group
        id="input-group-intolerances"
        label-cols-sm="3"
        label="Intolerances:"
        label-for="intolerances"
      >
        <b-button v-b-toggle.intolerances-collapse variant="link" class="dropdown-toggle">Select Intolerances</b-button>
        <b-collapse id="intolerances-collapse">
          <b-form-checkbox-group v-model="selectedIntolerances" class="checkbox-group">
            <b-form-checkbox v-for="intolerance in intolerances" :key="intolerance.value" :value="intolerance.value" class="checkbox-item">
              {{ intolerance.label }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-collapse>
      </b-form-group>
      
        
      <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
      >Search</b-button>
    </b-form>

    <!-- Display sort dropdown only when there are search results -->
    <div v-if="searchPerformed">
      <b-dropdown variant="primary" class="sort-dropdown">
        <template #button-content>
          Sort <i class="fas fa-sort"></i>
        </template>
        <b-dropdown-item @click="sortRecipes('liked')">Likes (High to Low)</b-dropdown-item>
        <b-dropdown-item @click="sortRecipes('time')">Preparation Time (Low to High)</b-dropdown-item>
      </b-dropdown>
      <div v-if="recipes.length > 0">
        <h2>Search Results</h2>
        <div v-for="recipe in recipes" :key="recipe.id">
          <!-- Display recipe details -->
          <SearchRecipePreview class="recipePreview" :recipe="recipe" />
        </div>
      </div>
      
      <div v-else>
        <br>
        <p>No results found.</p>
      </div>
    </div>
  </div>
</template>






<script>
import { required } from "vuelidate/lib/validators";
// import { mockGetRecipesPreviewFromSearch } from "../services/recipes.js";
import SearchRecipePreview from "../components/SearchRecipePreview.vue";
import { cuisines, diets, intolerances } from '../assets/filters.js';
import axios from 'axios';

export default {
  name: "search",
  components: {
    SearchRecipePreview
  },
  data() {
    return {
      form: {
        search: "",
        submitError: undefined
      },
      recipesPerPage: 5,
      selectedFilter: "",
      selectedCuisines: [], // New data property for selected cuisines
      selectedDiets: [], // New data property for selected diets
      selectedIntolerances: [], // New data property for selected intolerances
      cuisines: [], // Data property for cuisines filter
      diets: [], // Data property for diets filter
      intolerances: [], // Data property for intolerances filter
      recipes: [], // Array to hold search results
      searchPerformed: false, // Flag to indicate if search has been performed
      sortOption: ""
    };
  },
  created() {
    // Check if user is logged in and load last search if true
  if (this.$root.loggedIn) {
    this.loadLastSearch();
  }
    // Populate the filters from the imported file
    this.cuisines = cuisines.map(c => ({ label: c.text, value: c.value }));
    this.diets = diets.map(d => ({ label: d.text, value: d.value }));
    this.intolerances = intolerances.map(i => ({ label: i.text, value: i.value }));
    if (this.$root.loggedIn) {
      this.loadLastSearch();
    }
  },
  validations: {
    form: {
      search: {
        required
      }
    }
  },

  methods: {
    async loadLastSearch() {
    try {
      // Make an API call to fetch last search results
      const response = await axios.get(this.$root.store.server_domain+'/recipes/last-search'); // Adjust API endpoint as per your backend implementation
      this.recipes = response.data.recipes; // Assuming your response contains a 'recipes' array
      this.searchPerformed = true; // Indicate search has been performed
    } catch (error) {
      console.error('Error loading last search:', error);
      // Handle error as needed
    }
  },

        validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    
    //   async Search() {
    //   try {
        
    //     const response = await this.axios.post(
    //       this.$root.store.server_domain +"/Login",


    //       {
    //         username: this.form.username,
    //         password: this.form.password
    //       }
    //     );

    //     const success = true; // modify this to test the error handling
    //     // const response = mockSearch(this.form.search, success);

    //     // const response = mockGetRecipesPreviewFromSearch(5);
    //     this.searchPerformed = true; // Set searchPerformed to true after search

    //     console.log(response);
    //     this.$root.loggedIn = true;
    //     console.log(this.$root.store.login);
    //     this.$root.store.login(this.form.username);
    //     this.$router.push("/");
    //     const recipes = response.data.recipes; // Assuming your response contains a 'recipes' array
    //     this.recipes = recipes
    //   } catch (err) {
    //     console.log(err.response);
    //     this.form.submitError = err.response.data.message;
    //   }
    // },
    async Search() {
    try {
      const response = await axios.get(this.$root.store.server_domain+`/recipes/search`, {
      params: {
        recipeName: this.form.search,
        cuisine: this.selectedCuisines,
        diet: this.selectedDiets,
        intolerance: this.selectedIntolerances,
        number: this.recipesPerPage
      }
    });

      this.searchPerformed = true; // Indicate search has been performed
      this.recipes = response.data; // Assuming response.data contains an array of recipes

      // Save search results if user is logged in
      if (this.$root.loggedIn) {
        this.saveLastSearch(response.data);
      }
    } catch (err) {
      console.error('Error searching recipes:', err);
      // Handle error here, such as setting an error message
    }
  },

  async saveLastSearch(recipes) {
    try {
      // Make an API call to save last search results
      await axios.post(this.$root.store.server_domain+'/recipes/save-last-search', { recipes }); // Adjust API endpoint as per your backend implementation
    } catch (error) {
      console.error('Error saving last search:', error);
      // Handle error as needed
    }
  },

    onSearch() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Search();

    },
    sortRecipes(option) {
    this.sortOption = option;
  }
    },
    computed: {
      sortedRecipes() {
        // Create a copy of recipes to avoid mutating the original array
        let sorted = [...this.recipes];
        if (this.sortOption === "liked") {
        // Sort by likes (high to low)
        sorted.sort((a, b) => b.likes - a.likes);
        } else if (this.sortOption === "time") {
          // Sort by prepTime (low to high)
          sorted.sort((a, b) => a.prepTime - b.prepTime);
        }
        return sorted;
      }
  }
};
</script>

<style scoped>
.sort-dropdown {
  margin-top: 10px;
  align-self: flex-end; /* Ensure it aligns to the right */
  justify-self: end; /* Align content within the container */
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Ensure items align to the left */
}

.checkbox-item {
  margin-bottom: 0.5rem;
  flex: 1 1 20%;
  max-width: 20%; /* Ensure items don't spread out */
  box-sizing: border-box;
}

.dropdown-toggle {
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding-right: 1.5rem; /* Add space for the arrow */
}


.dropdown-toggle::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  border: solid transparent;
  border-width: 0 4px 4px 4px;
  border-bottom-color: #000; /* Adjust the color of the arrow */
  pointer-events: none;
}

.dropdown-toggle:hover {
  color: #007bff; /* Change the color on hover */
  text-decoration: underline; /* Add underline on hover */
}
</style>


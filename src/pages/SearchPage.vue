<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
      <b-form @submit.prevent="Search">
      <b-form-group
        id="input-group-search"
        label-cols-sm="3"
        label="search:"
        label-for="search"
      >
        <b-form-input
          id="search"
          v-model="$v.form.search.$model"
          type="text"
          :state="validateState('search')"
        ></b-form-input>
        <b-form-invalid-feedback>
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
      
      <!-- Filter dropdown with checkboxes -->
      <b-form-group
        id="input-group-filter"
        label-cols-sm="3"
        label="Filter:"
        label-for="filter"
      >
        <b-dropdown id="filter-dropdown" text="Select Filters" no-caret>
          <b-form-checkbox-group v-model="selectedFilters">
            <b-form-checkbox v-for="filter in filters" :key="filter.value" :value="filter.value">
              {{ filter.label }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-dropdown>
      </b-form-group>
        
        
        <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        >Search</b-button
      >
      </b-form>

    <!-- Display search results -->
    <div v-if="searchPerformed">
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
import { mockGetRecipesPreviewFromSearch } from "../services/recipes.js";
import SearchRecipePreview from "../components/SearchRecipePreview.vue";
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
      filters: [ // Define your filters here
        { label: "Filter 1", value: "filter1" },
        { label: "Filter 2", value: "filter2" },
        { label: "Filter 3", value: "filter3" }
      ],
      recipes: [], // Array to hold search results
      searchPerformed: false // Flag to indicate if search has been performed
    };
  },
  validations: {
    form: {
      search: {
        required
      }
    }
  },

  methods: {
        validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    
      async Search() {
      try {
        
        // const response = await this.axios.post(
        //   this.$root.store.server_domain +"/Login",


        //   {
        //     username: this.form.username,
        //     password: this.form.password
        //   }
        // );

        const success = true; // modify this to test the error handling
        // const response = mockSearch(this.form.search, success);

        const response = mockGetRecipesPreviewFromSearch(5);
        this.searchPerformed = true; // Set searchPerformed to true after search

        // console.log(response);
        // this.$root.loggedIn = true;
        //console.log(this.$root.store.login);
        //this.$root.store.login(this.form.username);
        //this.$router.push("/");
        const recipes = response.data.recipes; // Assuming your response contains a 'recipes' array
        this.recipes = recipes
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
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

    }
  }
};
</script>

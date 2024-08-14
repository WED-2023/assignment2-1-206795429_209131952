<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="sticky-top">
      <img src="../src/logo.png" class="logo">
      <b-navbar-brand :to="{ name: 'main' }" class="navbar-brand" >Foody Shmoody Main</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <b-nav-text>Hello Guest!</b-nav-text>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item-dropdown right>
            <template #button-content>
              {{ $root.store.username }}
            </template>
            <b-dropdown-item :to="{ name: 'favoriteRecipes' }">My favorite recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myRecipes' }">My recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'myFamilyRecipes' }">My family recipes</b-dropdown-item>
          </b-nav-item-dropdown>
            <b-nav-item @click="Logout">Logout</b-nav-item>
           <b-nav-item> <nav-button v-b-modal.modal-prevent-closing>Add New Recipe</nav-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
   
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Recipe"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- <b-form-group label="ID" label-for="id-input" invalid-feedback="ID is required" :state="idState">
          <b-form-input id="id-input" v-model="recipe.id" :state="idState" required></b-form-input>
        </b-form-group> -->
       
        <b-form-group label="Image URL" label-for="image-input" invalid-feedback="Image URL is required" :state="imageState">
          <b-form-input id="image-input" v-model="recipe.image" :state="imageState" required></b-form-input>
        </b-form-group>
       
        <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required" :state="titleState">
          <b-form-input id="title-input" v-model="recipe.title" :state="titleState" required></b-form-input>
        </b-form-group>
       
        <b-form-group label="Ready In Minutes" label-for="minutes-input" invalid-feedback="Ready In Minutes is required" :state="minutesState">
          <b-form-input id="minutes-input" type="number" v-model="recipe.readyInMinutes" :state="minutesState" required></b-form-input>
        </b-form-group>

        <b-form-group label="Servings" label-for="serving-input" invalid-feedback="Servings is required" :state="servingsState">
          <b-form-input id="servings-input" type="number" v-model="recipe.servings" :state="servingsState" required></b-form-input>
        </b-form-group>
       
       
        <b-form-group label="Vegetarian" label-for="vegetarian-input" :state="vegetarianState">
          <b-form-checkbox id="vegetarian-input" v-model="recipe.vegetarian"></b-form-checkbox>
        </b-form-group>
       
        <b-form-group label="Vegan" label-for="vegan-input" :state="veganState">
          <b-form-checkbox id="vegan-input" v-model="recipe.vegan"></b-form-checkbox>
        </b-form-group>
       
        <b-form-group label="Gluten Free" label-for="gluten-input" :state="glutenState">
          <b-form-checkbox id="gluten-input" v-model="recipe.glutenFree"></b-form-checkbox>
        </b-form-group>

        <b-form-group label="Summary" label-for="summary-input" invalid-feedback="Summary is required" :state="summaryState">
          <b-form-textarea id="summary-input" v-model="recipe.summary" :state="summaryState" required></b-form-textarea>
        </b-form-group>
       
        <b-form-group label="Ingredients" label-for="ingredients-input">
          <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="d-flex mb-2 align-items-center">
            <!-- Input for ingredient name -->
            <b-form-input v-model="recipe.ingredients[index].name" placeholder="Ingredient name" required></b-form-input>
            <!-- Input for ingredient amount -->
            <b-form-input v-model="recipe.ingredients[index].amount" placeholder="Amount" required></b-form-input>
            <!-- Button to remove ingredient -->
            <b-button @click="removeIngredient(index)" variant="danger" class="ml-2">Remove</b-button>
          </div>
          <!-- Button to add new ingredient -->
          <b-button @click="addIngredient" variant="success">Add Ingredient</b-button>
        </b-form-group>
       
        <b-form-group label="Instructions" label-for="instructions-input">
          <div v-for="(instruction, index) in recipe.instructions" :key="index" class="d-flex mb-2">
            <b-form-textarea v-model="recipe.instructions[index]" required></b-form-textarea>
            <b-button @click="removeInstruction(index)" variant="danger" class="ml-2">Remove</b-button>
          </div>
          <b-button @click="addInstruction" variant="success">Add Instruction</b-button>
        </b-form-group>
        
       
        <!-- <b-form-group label="Ingredients" label-for="ingredients-input">
          <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="d-flex mb-2">
            <b-form-input v-model="recipe.ingredients[index]" required></b-form-input>
            <b-button @click="removeIngredient(index)" variant="danger" class="ml-2">Remove</b-button>
          </div>
          <b-button @click="addIngredient" variant="success">Add Ingredient</b-button>
        </b-form-group>
        
        <b-form-group label="Instructions" label-for="instructions-input">
          <div v-for="(instruction, index) in recipe.instructions" :key="index" class="d-flex mb-2">
            <b-form-textarea v-model="recipe.instructions[index]" required></b-form-textarea>
            <b-button @click="removeInstruction(index)" variant="danger" class="ml-2">Remove</b-button>
          </div>
          <b-button @click="addInstruction" variant="success">Add Instruction</b-button>
        </b-form-group> -->
      </form>
    </b-modal>

  </div>
</template>

<script>
// import { mockAddUserRecipe } from '@/services/user.js';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      recipe: {
        // id: '',
        servings: '',
        image: '',
        title: '',
        readyInMinutes: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: '',
        ingredients: [{ name: '', amount: '' }],
        instructions: ['']
      },
      // idState: null,
      servingsState: null,
      imageState: null,
      titleState: null,
      minutesState: null,
      vegetarianState: null,
      veganState: null,
      glutenState: null
      // submittedRecipes: []
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      sessionStorage.removeItem('lastSearchResults');
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      // this.idState = this.recipe.id ? true : false;
      this.imageState = this.recipe.image ? true : false;
      this.titleState = this.recipe.title ? true : false;
      this.minutesState = this.recipe.readyInMinutes ? true : false;
      this.servingsState = this.recipe.servings ? true : false;
      return valid;
    },
    resetModal() {
      this.recipe = {
        // id: '',
        servings: '',
        image: '',
        title: '',
        readyInMinutes: '',
  
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: '',
        ingredients: [{ name: '', amount: '' }],
        instructions: ['']
      };
      // this.idState = null;
      this.servingsState = null;
      this.imageState = null;
      this.titleState = null;
      this.minutesState = null;
      this.vegetarianState = null;
      this.veganState = null;
      this.glutenState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    // handleSubmit() {
    //   // Exit when the form isn't valid
    //   if (!this.checkFormValidity()) {
    //     return;
    //   }
    //   this.RecipeSeccssfullyAdded()
    //   // Push the recipe to submitted recipes
    //   this.submittedRecipes.push({ ...this.recipe });
    //   // Hide the modal manually
    //   this.$nextTick(() => {
    //     this.$bvModal.hide('modal-prevent-closing');
    //   });
    // },
    // RecipeSeccssfullyAdded() {
    //   const result = mockAddUserRecipe(this.recipe);
    //   this.$root.toast("Add Recipe", "Recipe Added successfully", "success");
    //   this.$router.push("/").catch(() => {
    //     this.$forceUpdate();
    //   });
    // },
    // addIngredient() {
    //   this.recipe.ingredients.push('');
    // },
    async handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      try {
        // this.axios.defaulta.withCredentials = true;
        const response = await axios.post(this.$root.store.server_domain + '/users/my_recipes', this.recipe);
        console.log("Recipe added successfully:", response.data);
        this.$root.toast("Add Recipe", "Recipe Added successfully", "success");
        this.$router.push("/");
        // this.axios.defaulta.withCredentials = false;
      } catch (error) {
        console.error("There was an error adding the recipe:", error);
      }
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
    
    addIngredient() {
      this.recipe.ingredients.push({ name: '', amount: '' });
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    addInstruction() {
      this.recipe.instructions.push('');
    },
    removeInstruction(index) {
      this.recipe.instructions.splice(index, 1);
    }
  }
  };
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 9999;
  align-items: center;
}
.nav-container {
  display: flex;
  justify-content: space-between; /* Evenly distribute items across the width */
  align-items: center;
  max-width: 1200px; /* Limit the maximum width of the navigation */
  margin: 0 auto; /* Center the navigation horizontally */
  padding: 0 20px; /* Adjust padding as needed */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1000; /* Adjust as needed */
}

.nav-icon {
  width: 70px; /* Adjust the width of the logo */
  height: auto; /* Maintain aspect ratio */
}

.navbar-brand {
  padding-right: 50px; /* Adjust the padding to create space for the logo */
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px; /* Adjust the width of the logo */
  height: auto; /* Maintain aspect ratio */
}

/* Adjust navbar padding to prevent overlap */
.b-navbar {
  padding-left: 100px; /* Adjust as needed based on the logo width */
}


.nav-button {
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: white;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.navbar-brand {
  padding-left: 60px; /* Adjust the padding to create space for the logo */
}


.b-navbar-nav {
  margin-left: auto; /* Align navbar items to the right */
}
</style>
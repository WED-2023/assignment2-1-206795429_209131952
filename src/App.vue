<template>
  <div id="app">
    <div id="nav">
       <div class="nav-container">
        <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
        <router-link :to="{ name: 'search' }">Search</router-link>|
        <router-link :to="{ name: 'about' }">About</router-link>|
        {{ !$root.store.username }}
        <span v-if="!$root.store.username">
          Hello Guest!
          <router-link :to="{ name: 'register' }">Register</router-link>|
          <router-link :to="{ name: 'login' }">Login</router-link>|
        </span>
        <span v-else>
          Hello {{username}} 
          {{ $root.store.username }}: 
          <div>
            <b-dropdown :text="$root.store.username" class="m-md-2">
            <b-dropdown-item><router-link :to="{ name: 'favoriteRecipes' }">My favorite recipes</router-link></b-dropdown-item>
            <b-dropdown-item><router-link :to="{ name: 'myRecipes' }">My recipes</router-link></b-dropdown-item>
            <b-dropdown-item><router-link :to="{ name: 'myFamilyRecipes' }">My family recipes</router-link></b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>
        </div>
          <button @click="Logout">Logout</button>|
          <b-button v-b-modal.modal-prevent-closing>Add New Recipe</b-button>
        </span>
       </div>
    </div>
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
        <b-form-group label="ID" label-for="id-input" invalid-feedback="ID is required" :state="idState">
          <b-form-input id="id-input" v-model="recipe.id" :state="idState" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Image URL" label-for="image-input" invalid-feedback="Image URL is required" :state="imageState">
          <b-form-input id="image-input" v-model="recipe.image" :state="imageState" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required" :state="titleState">
          <b-form-input id="title-input" v-model="recipe.title" :state="titleState" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Ready In Minutes" label-for="minutes-input" invalid-feedback="Ready In Minutes is required" :state="minutesState">
          <b-form-input id="minutes-input" type="number" v-model="recipe.readyInMinutes" :state="minutesState" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Aggregate Likes" label-for="likes-input" invalid-feedback="Aggregate Likes is required" :state="likesState">
          <b-form-input id="likes-input" type="number" v-model="recipe.aggregateLikes" :state="likesState" required></b-form-input>
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
      </form>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      recipe: {
        id: '',
        image: '',
        title: '',
        readyInMinutes: '',
        aggregateLikes: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: ''
      },
      idState: null,
      imageState: null,
      titleState: null,
      minutesState: null,
      likesState: null,
      vegetarianState: null,
      veganState: null,
      glutenState: null,
      summaryState: null,
      submittedRecipes: []
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.idState = this.recipe.id ? true : false;
      this.imageState = this.recipe.image ? true : false;
      this.titleState = this.recipe.title ? true : false;
      this.minutesState = this.recipe.readyInMinutes ? true : false;
      this.likesState = this.recipe.aggregateLikes ? true : false;
      this.summaryState = this.recipe.summary ? true : false;
      return valid;
    },
    resetModal() {
      this.recipe = {
        id: '',
        image: '',
        title: '',
        readyInMinutes: '',
        aggregateLikes: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: ''
      };
      this.idState = null;
      this.imageState = null;
      this.titleState = null;
      this.minutesState = null;
      this.likesState = null;
      this.vegetarianState = null;
      this.veganState = null;
      this.glutenState = null;
      this.summaryState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the recipe to submitted recipes
      this.submittedRecipes.push({ ...this.recipe });
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
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
</style>

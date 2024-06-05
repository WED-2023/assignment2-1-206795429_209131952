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
          <button @click="Logout">Logout</button>|
          <router-link :to="{ name: 'createnewrecipe' }">Create New Recipe</router-link>|
        </span>
       </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
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

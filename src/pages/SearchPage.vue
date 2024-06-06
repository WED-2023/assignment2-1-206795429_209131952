<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
      <b-form @submit.prevent="onSearch">
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
        
        
        <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        >Search</b-button
      >
      </b-form>
  </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "search",
  data() {
    return {
      form: {
        search: "",
        submitError: undefined
      }
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
        const response = mockSearch(this.form.search, success);

        // console.log(response);
        // this.$root.loggedIn = true;
        //console.log(this.$root.store.login);
        //this.$root.store.login(this.form.username);
        //this.$router.push("/");
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

<template>
  <div class="recipe-preview">
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
  >
    <div class="recipe-body" >
      <img :src="recipe.image" class="recipe-image" />
    </div>
  </router-link>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
        <li v-if="this.recipe.vegetarian">
          <img src="../assets/vegetarian-logo.png" class="tiny_logo" />
        </li>
        <li v-if="this.recipe.vegan">
          <img src="../assets/vegan_logo.jpg" class="tiny_logo" />
        </li>
        <li v-if="this.recipe.glutenFree">
          <img src="../assets/gluten_free.png" class="tiny_logo" />
        </li>
        <li>
          <button @click="toggleIcon" title="Strikethrough" class="icon-button" style="background-color: transparent; border-color: transparent; padding: 0;">
    <b-icon :icon="icon" class="no-background"></b-icon>
  </button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  data() {
    return {
      isFull: false

    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
  },
  computed: {
    icon() {
      return this.isFull ? 'star-fill' : 'star';
    }
  },
  methods: {
    toggleIcon() {
      this.isFull = !this.isFull;
    }
  }
 

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
 
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 60%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

.tiny_logo {
  width:30px;
  height: 30px;
}

/* .icon-button {
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  border-color: transparent;
  border: 1px solid transparent;
} */

.no-background {
  background-color: transparent;
  color: #f0ad4e;
  font-size: 1.5rem;
}
/* .icon-button:focus {
  background-color: transparent !important;
  border-color: transparent;
  border: 1px solid transparent;


}
.icon-button:hover {
  background-color: transparent !important;
  border-color: transparent !important;
  border: 1px solid transparent;
} */

</style>
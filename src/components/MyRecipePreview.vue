<template>
    <div class="recipe-preview" :class="{'viewed': isViewed}">
    <router-link
      :to="{ name: 'myrecipe', params: { title: recipe.title } }"
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
          <li v-if="this.recipe.vegetarian">
            <img src="../assets/vegetarian-logo.png" class="tiny_logo" />
          </li>
          <li v-if="this.recipe.vegan">
            <img src="../assets/vegan_logo.jpg" class="tiny_logo" />
          </li>
          <li v-if="this.recipe.glutenFree">
            <img src="../assets/gluten_free.png" class="tiny_logo" />
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { mockAddFavorite } from '@/services/user';
  import { computed } from 'vue';
  export default {
    data() {
      return {
        isFull: false,
        isViewed: false
  
      };
    },
    props: {
      recipe: {
        type: Object,
        required: true
      },
    },
  };
   
  </script>
  
  <style scoped>
  .recipe-preview {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 10px 0;
    font-weight: bold;
  }
  .recipe-preview > .recipe-body {
    width: 100%;
    height: 200px;
    position: relative;
  }
  
  .recipe-preview .recipe-body .recipe-image {
    margin: 0 auto; /* Center the image horizontally */
    width: 100%; /* Set the width to fill the container */
    height: 200px; /* Fixed height for all images */
    object-fit: cover; /* Ensure the image covers the entire container */
    border-radius: 15px; /* Added border-radius for rounded edges */
  }
  
  .recipe-preview .recipe-body:hover .recipe-image {
    transform: scale(1.1); /* Scale the image on hover */
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
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    text-align: center;
  
  }
  
  .recipe-preview.viewed .recipe-footer .recipe-title,
  .recipe-preview.viewed .recipe-footer ul.recipe-overview li {
    color: purple; /* Change font color to purple */
    font-weight: bold; /* Make font bold */
  }
  
  
  .recipe-preview .recipe-footer ul.recipe-overview {
    padding: 5px 10px;
    width: 100%;
    display: flex; /* Changed to flex to avoid overflow */
    table-layout: fixed;
    list-style-type: none; /* Remove bullet points */
    margin-bottom: 0px;
    font-size: 10pt;
  }
  
  .recipe-preview .recipe-footer ul.recipe-overview li {
    flex: 1; /* Use flex property to distribute width */
    text-align: center;
  }
  .tiny_logo {
    width:25px;
    height: 25px;
  }
  
  
  .no-background {
    background-color: transparent;
    color: #f0ad4e;
    font-size: 1.5rem;
  }
  
  </style>
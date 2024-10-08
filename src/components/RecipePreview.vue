<template>
  <div class="recipe-preview" :class="{'viewed': isViewed}">
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
    <div class="recipe-body" @click="markRecipeAsViewed">
      <img :src="recipe.image" class="recipe-image" />
    </div>
  </router-link>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
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
import axios from 'axios';
import store from '@/store';
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
  async created() {
    this.checkIfViewed();
    await this.checkIfFavorite();
  },
  computed: {
    icon() {
      return this.isFull ? 'star-fill' : 'star';
    },
    Strikethrough() {
      return this.isFull ? 'Remove from favorites' : 'Add to favorites';
    }
  },
  methods: {
    async checkIfFavorite() {
      try {
        const username = this.$root.store.username;
        const favoriteCheck = await axios.get(
          `${this.$root.store.server_domain}/users/favorites/check`,
          {
            params: {
              username: username,
              recipeId: this.recipe.id,
            },
            withCredentials: true,
          }
        );

        if (favoriteCheck.data.isFavorite) {
          this.isFull = true;
        }
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    },
    async toggleIcon() {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(this.$root.store.server_domain+'/users/favorites', {
          recipeId: this.recipe.id
        });
        console.log("this is response: ", response)

        if (response.status === 201) {
          this.isFull = !this.isFull;
          const action = this.isFull ? 'added to' : 'removed from';
          this.$root.toast(`${action} favorites`, `Recipe successfully ${action} your favorites`, "success");
        }
        axios.defaults.withCredentials = false;
      } catch (error) {
        // Handle error
        console.error('Error toggling favorite:', error);
      }
    },
  async markRecipeAsViewed() {
    this.isViewed = true;
    sessionStorage.setItem(`recipe-viewed-${this.recipe.id}`, 'true');
    try {
        await axios.post(`${this.$root.store.server_domain}/users/last_viewed_recipes`, { recipe_id: this.recipe.id }, {
          withCredentials: true // Ensure cookies or session tokens are sent
        });
        this.isViewed = true;
        console.log('Recipe marked as viewed:', recipeId);
      } catch (error) {
        console.error('Error marking recipe as viewed:', error);
      }
    },
  checkIfViewed() {
    const viewed = sessionStorage.getItem(`recipe-viewed-${this.recipe.id}`);
    if (viewed) {
      this.isViewed = true;
    }
  }
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
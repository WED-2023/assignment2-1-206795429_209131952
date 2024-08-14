<template>
  <div class="recipe-preview" :class="{'viewed': isViewed}">
    <router-link
      :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
      @click.native="markRecipeAsViewed"
    >
      <div class="recipe-body">
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
        <li v-if="recipe.vegetarian">
          <img src="../assets/vegetarian-logo.png" class="tiny_logo" />
        </li>
        <li v-if="recipe.vegan">
          <img src="../assets/vegan_logo.jpg" class="tiny_logo" />
        </li>
        <li v-if="recipe.glutenFree">
          <img src="../assets/gluten_free.png" class="tiny_logo" />
        </li>
        <li>
          <button @click="toggleIcon" title="Strikethrough" class="icon-button" style="background-color: transparent; border-color: transparent; padding: 0;">
            <b-icon :icon="icon" class="no-background"></b-icon>
          </button>
        </li>
      </ul>
      <div v-if="recipe.analyzedInstructions.length" class="instructions">
        <h4>Instructions:</h4>
        <ol>
          <li v-for="(instruction, index) in recipe.analyzedInstructions[0].steps" :key="index">
            {{ instruction.step }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import axios from 'axios';

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
  computed: {
    icon() {
      return this.isFull ? 'star-fill' : 'star';
    }
  },
  methods: {
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
    markRecipeAsViewed() {
      this.isViewed = true;
      sessionStorage.setItem(`recipe-viewed-${this.recipe.id}`, 'true');
    },
    checkIfViewed() {
      const viewed = sessionStorage.getItem(`recipe-viewed-${this.recipe.id}`);
      if (viewed) {
        this.isViewed = true;
      }
    }
  },
  created() {
    this.checkIfViewed();
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
  margin: auto;
  display: block;
  width: 40%;
  height: auto;
  border-radius: 15px;
  transition: transform 0.3s ease;
}
.recipe-preview .recipe-body:hover .recipe-image {
  transform: scale(1.1);
}
.recipe-preview .recipe-footer {
  width: 40%;
  overflow: hidden;
  text-align: center;
  margin: auto;

}
.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: bold;
}
.recipe-preview.viewed .recipe-footer .recipe-title,
.recipe-preview.viewed .recipe-footer ul.recipe-overview li {
  color: purple;
  font-weight: bold;
}
.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: flex;
  table-layout: fixed;
  list-style-type: none;
  margin-bottom: 0px;
  font-size: 10pt;
}
.recipe-preview .recipe-footer ul.recipe-overview li {
  flex: 1;
  text-align: center;
}
.tiny_logo {
  width: 25px;
  height: 25px;
}
.no-background {
  background-color: transparent;
  color: #f0ad4e;
  font-size: 1.5rem;
}

.instructions {
  text-align: left;
  margin-top: 10px;
  font-size: 10pt;
  font-weight: bold;
}
.instructions h4 {
  margin: 0;
  font-size: 12pt;
  text-align: center;
  font-weight: bold;
}
.instructions ol {
  padding-left: 20px;
  margin: 5px 0;

}
</style>

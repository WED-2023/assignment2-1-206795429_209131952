<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col>
          <h1>About Foody Shmoody</h1>
          <p>
            Welcome to Foody Shmoody, your one-stop destination for delicious recipes and a vibrant community of food enthusiasts. Whether you're looking for inspiration or want to share your culinary creations, Foody Shmoody has you covered.
          </p>
          <h2>Our Mission</h2>
          <p>
            At Foody Shmoody, our mission is to bring people together through the love of food. We provide a platform where you can explore a wide range of recipes, add your own, and even share cherished family recipes with our community.
          </p>
          <h2>Meet the Team</h2>
          <p>
            Foody Shmoody was developed by Sapir Tzaig and Liron Miriam Shemen, both 3rd-year students in the Department of Software and Information Systems Engineering at Ben Gurion University of the Negev. With a passion for technology and a love for food, we set out to create a website that would make it easy for anyone to discover and share amazing recipes.
          </p>
          <h2>Our Previous Work</h2>
          <p>
            We've worked on various projects during our academic journey. Here are a few examples of our previous work:
          </p>
          <ul>
            <li><a href="https://wed-2023.github.io/209131952/" target="_blank">Project 1</a></li>
            <li><a href="https://wed-2023.github.io/206795429/" target="_blank">Project 2</a></li>
          </ul>
          <h2>Join Us</h2>
          <p>
            Become a part of our community and start sharing your recipes today! We can't wait to see what delicious dishes you'll bring to the table.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: #f8f9fa;
}

.about h1 {
  margin-bottom: 20px;
  color: #17a2b8;
}

.about h2 {
  margin-top: 20px;
  color: #343a40;
}

.about p {
  font-size: 16px;
  line-height: 1.5;
}

.about a {
  color: #17a2b8;
}

.about a:hover {
  text-decoration: underline;
}
</style>

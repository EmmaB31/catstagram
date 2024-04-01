<template>
  <div class="home">
      <div class="posts">
        <div class="post" v-for="cat in posts" :key="cat.id">
          <h2>Someone Submitted</h2>
          <img :src="cat.url" alt="Cat Image">
          <p style="font-weight: bold;">Posted By User</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae voluptatum itaque. Ipsam, tempora nisi.</p>
          <br>
          <LikeButton></LikeButton>
        </div>
      </div>
  </div>
</template>

<script>
  import LikeButton from "../components/LikeButton.vue";


export default {
  name: 'HomeView',
  components: {
    LikeButton
  },
   data(){
    return{
      posts: [],

    }
  },
  mounted() {
    fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(posts => {this.posts = posts
      console.log(posts)
    })
    .catch(error => console.log(error))
    console.log( 'posts')
  },

}
</script>

<style scoped>
.posts {
    display: block;
    max-width: 600px;
    margin: auto;
    text-align: left;
  }
  .post {
    padding: 20px;
    border-bottom: 1px solid rgb(17, 17, 17);
    margin: 20px;
   
    
  }

  img{
    max-width: 500px;
    max-height: 500px;
   object-fit: scale-down;
   padding: 0;
   margin:0;
  }

</style>

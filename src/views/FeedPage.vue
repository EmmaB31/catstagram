<template>
    <Header></Header>
    <div class="feed">
        <div class="posts">
          <div class="post" v-for="cat in posts" :key="cat.id">
            <div v-if="!posts">
                Loading Posts
            </div>
            <div v-else>
              <img class="user-pic" src="../assets/person_placeholder_2_0.webp">
            <h2>Someone Submitted</h2>
            <img :src="cat.url" alt="Cat Image">
            <br>
          <div class="text">
            <p style="font-weight: bold;">Posted By User</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae voluptatum itaque. Ipsam, tempora nisi.</p>
          </div>
          <br>
            <LikeButton></LikeButton>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
    import LikeButton from "../components/LikeButton.vue"
    import Header from "../components/Header.vue"

  
  export default {
    name: 'FeedPage',
    components: {
      LikeButton,
      Header

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
      console.log( 'posts', this.username)
    },
  
  }
  </script>
  
  <style scoped>
  .feed {
    background: rgba(255, 255, 255, 0.623);
  }
  .posts {
      display: block;
      max-width: 600px;
      margin: auto;
      text-align: left;
      
    }
    .post {
      padding: 20px;
      margin: 20px;
      background: linear-gradient(130deg, rgba(190, 93, 255, 0.252) 0%, rgba(225, 106, 231, 0.482) 50%, rgba(69, 252, 249, 0.334) 100%);
      box-shadow: 5px 5px 5px rgb(120, 120, 120);
      border: 1px solid rgba(152, 152, 152, 0.049);
      border-radius: 10px;
    
    }
  
    img{
      max-width: 500px;
      max-height: 500px;
     object-fit: scale-down;
     padding: 0;
     margin:0;
    }
    .user-pic{
        width:35px
    }
    h2 {
        display: inline;
        padding-left: 15px;
    }
    .text {
        background: rgba(255, 255, 255, 0.334);
        border-radius: 10px;
        padding: 2px 5px;
        
    }
  </style>
  
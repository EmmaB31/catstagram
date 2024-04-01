<template>
    <button @click="toggleLike" :class="{ liked: isLiked }">
            {{ isLiked? 'Liked' : 'Like' }}
    </button>
</template>

<script>
    export default{
        data(){
            return{
             isLiked: false
            }
            
        },
        methods: {
            toggleLike() {
                this.isLiked = !this.isLiked }
        }
    }
</script>

<style scoped>
  button{
    background: white;
    color:black;
    border: 1px solid black;
    font-size: medium;
  }
  .liked {
    background: rgb(230, 67, 94);
    color:white;
    border: 1px solid rgb(230, 67, 94)

  }
</style>
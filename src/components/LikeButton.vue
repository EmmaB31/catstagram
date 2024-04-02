<template>
    <button @click="toggleLike" :class="{ liked: isLiked }">
            {{ isLiked? 'Liked' : 'Like' }}
    </button>
    {{ likeCount }} likes
</template>

<script>
    export default{
        data(){
            return{
             isLiked: false,
             likeCount: 0
            }
            
        },
        methods: {
            toggleLike() {
                this.isLiked = !this.isLiked;
                if(this.isLiked) {
                    this.likeCount++;
                } else {
                    this.likeCount--;
                }
             }
            
        }
    }
</script>

<style scoped>
  button{
    background: rgb(255, 225, 248);
    color:black;
    font-weight: bold;
    border: 1px solid rgb(255, 225, 248);
    font-size: medium;
    border-radius: 10px;
  }
  .liked {
    background: rgb(239, 42, 153);
    color:white;
    border: 1px solid rgb(239, 42, 153);
    border-radius: 10px;

  }
</style>
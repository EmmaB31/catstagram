<template>
        
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav> -->
  <router-view/>
</template>
<script>
  import Header from "./components/Header.vue"

  export default {
    components: {
      Header
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: rgba(255, 255, 255, 0.953);



}
body{
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
template{
  width: 100%;
}
h1 {
    padding: 0 10px;
    margin:0;
    background-image: linear-gradient(180deg, rgba(190,93,255,1) 0%, rgba(225,106,231,1) 50%, rgba(69,252,250,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; 
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style:italic;
    
 }
</style>

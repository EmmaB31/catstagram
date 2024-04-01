<template>
        <Header></Header>
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
</style>

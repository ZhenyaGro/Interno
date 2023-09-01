<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <BlogMain></BlogMain>
</template>

<script>
import BlogMain from './components/BlogMain.vue';

// const dataExchange = new Vue();
export default {
  name: 'App',
  components: {
    // HelloWorld,
    BlogMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

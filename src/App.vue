<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div>
    <BlogMain></BlogMain>
  </div>
</template>

<script>
import styles from '../styles/style.css'
import BlogMain from './components/elements/BlogMain.vue';

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
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

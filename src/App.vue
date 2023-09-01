<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <BlogData></BlogData>
  <BlogItem></BlogItem>
  <BlogList></BlogList>
  <TagList></TagList>
  <BlogDetails></BlogDetails>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BlogData from './components/BlogData.vue';
import BlogDetails from './components/BlogDetails.vue';
import BlogItem from './components/BlogItem.vue';
import BlogList from './components/BlogList.vue';
import TagList from './components/TagList.vue';

// const dataExchange = new Vue();
export default {
  name: 'App',
  components: {
    // HelloWorld,
    BlogData,
    BlogDetails,
    BlogItem,
    BlogList,
    TagList
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

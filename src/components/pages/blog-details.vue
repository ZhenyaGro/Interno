<template>
  <div>
    <Header></Header>
    <BlogMain></BlogMain>
    <Footer></Footer>
  </div>
</template>

<script>
import styles from '../styles/style.css'
import Header from './components/elements/Header.vue';
import BlogMain from './components/elements/BlogMain.vue';
import Footer from './components/elements/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    BlogMain,
    Footer
  }
}
</script>

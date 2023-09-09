<template>
  <div>
    <Header></Header>
    <BlogMain></BlogMain>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BlogMain from '@/components/BlogMain.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    BlogMain,
    Footer
  }
}
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import styles from '../styles/style.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';




export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      page: 'home',
    }
  }
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'DM Serif Display', serif;
  color: $fontColorMain;
  font-style: normal;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: $fontColorMain;
  text-decoration: none;
}

.container {
  padding-left: $containerPadding;
  padding-right: $containerPadding;
}

// For Blog page
.page-view {
  @include page-view_background('/public/img/blog-background.jpg', 356);
}
</style>

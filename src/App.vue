<template>
  <div>
    <Header />
    <PageView :data="getBlogPageViewData" />
    <Footer />
  </div>
</template>

<script>
import styles from '../styles/style.css'
import Header from './components/elements/Header.vue';
import PageView from './components/elements/PageView.vue'
import Footer from './components/elements/Footer.vue';
import { mapGetters } from 'vuex';



export default {
  name: 'App',
  components: {
    Header,
    PageView,
    Footer
  },
  computed: {
    ...mapGetters(['getBlogPageViewData'])
  },
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
  @include page-view_background('/images/blog-background.jpg', 356);
}
</style>

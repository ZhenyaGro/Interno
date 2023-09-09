<template>
  <div>
    <Header />
    <IndexMain />
    <OurProjects />
    <Results />
    <News />
    <Footer />
  </div>
</template>

<script>
import styles from '../styles/style.css'
import Header from './components/elements/Header.vue';
import IndexMain from './components/elements/IndexMain.vue';
import OurProjects from './components/elements/OurProjects.vue';
import Results from './components/elements/Results.vue';
import News from './components/elements/News.vue';
import Footer from './components/elements/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    IndexMain,
    OurProjects,
    Results,
    News,
    Footer
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
</style>

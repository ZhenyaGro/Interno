<template>
  <div>
    <Header />
    <IndexMain />
    <OurProjects />
    <Results />
    <Footer />
  </div>
</template>

<script>
import styles from '../styles/style.css'
import Header from './components/elements/Header.vue';
import IndexMain from './components/elements/IndexMain.vue';
import OurProjects from './components/elements/OurProjects.vue';
import Results from './components/elements/Results.vue';
import Footer from './components/elements/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    IndexMain,
    OurProjects,
    Results,
    Footer
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

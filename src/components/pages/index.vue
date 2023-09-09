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
  name: 'Index',
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
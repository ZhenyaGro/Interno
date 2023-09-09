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
import Header from './components/Header.vue';
import IndexMain from './components/IndexMain.vue';
import OurProjects from './components/OurProjects.vue';
import Results from './components/Results.vue';
import News from './components/News.vue';
import Footer from './components/Footer.vue';


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
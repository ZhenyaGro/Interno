<template>
  <div>
    <IndexMain />
    <OurProjects />
    <Results />
    <News />
  </div>
</template>

<script>
import IndexMain from '@/components/IndexMain.vue';
import OurProjects from '@/components/OurProjects.vue';
import Results from '@/components/Results.vue';
import News from '@/components/News.vue';


export default {
  name: 'Home',
  components: {
    IndexMain,
    OurProjects,
    Results,
    News
  }
}
</script>
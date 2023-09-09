<template>
  <div>
    <IndexMain />
    <OurProjects />
    <Results />
    <News :data="getHomeNewsData" />
  </div>
</template>

<script>
import IndexMain from '@/components/IndexMain.vue';
import OurProjects from '@/components/OurProjects.vue';
import Results from '@/components/Results.vue';
import News from '@/components/News.vue';
import { mapGetters } from 'vuex';


export default {
  name: 'Home',
  components: {
    IndexMain,
    OurProjects,
    Results,
    News
  },
  computed: {
    ...mapGetters(['getHomeNewsData'])
  },
}
</script>
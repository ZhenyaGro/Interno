<template>
  <section class="projects container">
    <header class="projects__header">
      <h1 class="projects__heading">{{ getProjectsData.heading }}</h1>
      <p class="projects__text">{{ getProjectsData.paragraph }}</p>
    </header>
    <div class="projects__content">
      <ProjectsBlock v-for="(block, index) in getProjectsData.blocks" :key="index" :imgUrl="block.imgPath"
        :heading="block.heading" :paragraph="block.text"></ProjectsBlock>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import ProjectsBlock from './ProjectsBlock.vue';

export default {
  name: 'OurProjects',
  components: {
    ProjectsBlock
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getProjectsData']),
  },
}
</script>

<style lang="scss">
// .projects {}
</style>
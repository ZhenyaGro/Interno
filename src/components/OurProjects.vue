<template>
  <section class="projects container">
    <header class="projects__header">
      <h1 class="projects__heading">{{ getProjectsData.heading }}</h1>
      <p class="projects__text">{{ getProjectsData.paragraph }}</p>
    </header>
    <div class="projects__content">
      <ProjectsBlock class="home-projects" v-for="(block, index) in getProjectsData.blocks" :key="index" :data="block">
      </ProjectsBlock>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
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
.home-projects {
  &:first-child>img {
    border-radius: 0 80px 0 0;
  }

  &:nth-child(2)>img {
    border-radius: 80px 0 0 0;
  }

  &:nth-child(3)>img {
    border-radius: 0 0 80px 0;
  }

  &:last-child>img {
    border-radius: 0 0 0 80px;
  }
}
</style>
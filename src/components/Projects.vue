<template>
  <div class="projects container">
    <ProjectsBlock v-for="(block, index) in getProjectData.bedroom" :key="index" :data="block" class="projects__card" />
  </div>
</template>

<script>
import ProjectsBlock from './ProjectsBlock.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProjectsBlock
  },
  computed: {
    ...mapGetters(['getProjectData']),
  }
}
</script>

<style lang="scss" scoped>
.projects {
  columns: 2;
  gap: 24px;

  &__card {
    width: 100%;
    margin-bottom: 24px;
    break-inside: avoid;
  }
}
</style>
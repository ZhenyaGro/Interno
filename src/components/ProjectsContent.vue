<template>
  <div class="project container">
    <ProjectsBlock v-for="(block, index) in getProjectData.bedroom" :key="index" :data="block" class="project__card" />
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

<style lang="scss">
.project {
  columns: 2;
  gap: 24px;

  &__card {
    width: 100%;
    margin-bottom: 24px;
    break-inside: avoid;
  }
}
</style>
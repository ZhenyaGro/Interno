<template>
  <div>
    <PageView class="page-view" />
    <p>test</p>
  </div>
</template>

<script>
import PageView from '@/components/PageView.vue';

export default {
  name: 'Project',
  components: {
    PageView
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/project-view.jpg', 356);
}
</style>
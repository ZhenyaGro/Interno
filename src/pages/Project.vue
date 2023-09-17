<template>
  <div>
    <PageView class="page-view" :data="getProjectPageViewData" />
  </div>
</template>

<script>
import PageView from '@/components/PageView.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Project',
  components: {
    PageView
  },
  computed: {
    ...mapGetters(['getProjectPageViewData'])
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/project-view.jpg', 356);
}
</style>
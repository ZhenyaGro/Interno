<template>
  <div>
    <PageView :data="getBlogPageViewData" />
  </div>
</template>

<script>
// import styles from '../styles/style.css';
import PageView from '@/components/PageView.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Blog',
  components: {
    PageView
  },
  computed: {
    ...mapGetters(['getBlogPageViewData'])
  },
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/blog-background.jpg', 356);
}
</style>
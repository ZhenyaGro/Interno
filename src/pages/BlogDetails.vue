<template>
  <div>
    <PageView class="page-view_blog-details" />
    <BlogMain></BlogMain>
  </div>
</template>

<script>
import PageView from '@/components/PageView.vue';
import BlogMain from '@/components/BlogMain.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    PageView,
    BlogMain,
  },
  computed: {
    ...mapGetters([''])
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/blog-details-background.jpg', 356);
}
</style>
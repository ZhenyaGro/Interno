<template>
  <div>
    <PageView :data="getBlogPageViewData" />
    <BlogPost />
    <News :data="getBlogNewsData" />
  </div>
</template>

<script>
import PageView from '@/components/PageView.vue';
import BlogPost from '@/components/BlogPost.vue';
import News from '@/components/News.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Blog',
  components: {
    PageView,
    BlogPost,
    News,
  },
  computed: {
    ...mapGetters(['getBlogPageViewData', 'getBlogNewsData'])
  },
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/blog-background.jpg', 356);
}

.news {
  &__pagination {
    margin-top: 51px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  &__page-number {
    height: 52px;
    width: 52px;
    color: #292F36;
    font-family: 'Jost';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; // 24px
    text-transform: capitalize;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CDA274;
    transition: background-color .2s;
  }

  &__page-number_current {
    background-color: #F4F0EC;
    border: 0;
  }

  &__page-next svg circle {
    transition: all 2s;
  }
}
</style>
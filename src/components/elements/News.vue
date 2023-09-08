<template>
  <section class="news container">
    <header class="news__header">
      <h1 class="news__heading">{{ getNewsData.heading }}</h1>
      <p class="news__text">{{ getNewsData.text }}</p>
    </header>
    <div class="news__blocks">
      <NewsBlock v-for="(block, index) in getNewsData.blocks" :key="index" :link="block.link" :imgUrl="block.imgUrl"
        :sticker="block.sticker" :description="block.description" :date="block.date" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsBlock from './NewsBlock.vue';

export default {
  name: 'News',
  components: {
    NewsBlock
  },
  computed: {
    ...mapGetters(['getNewsData'])
  },
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.news {
  margin-bottom: 96px;

  &__header {
    margin-bottom: 52px;
  }

  &__heading {
    text-align: center;
    font-size: 50px;
    line-height: 125%; // 62.5px
    letter-spacing: 1px;
  }

  &__text {
    @extend %textAdditional;
    text-align: center;
    letter-spacing: 0.22px;
    max-width: 811px;
    margin: 0 auto;
  }

  &__blocks {
    display: flex;
    flex-wrap: wrap;
    gap: 27px;
  }
}
</style>
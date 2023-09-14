<template>
  <section class="news container">
    <header class="news__header">
      <h1 :class="headingStyle">{{ data.heading }}</h1>
      <p v-if="data.text" class="news__text">{{ data.text }}</p>
    </header>
    <div class="news__blocks">
      <NewsBlock v-for="(block, index) in displayedBlocks" :key="index" :link="block.link" :imgUrl="block.imgUrl"
        :sticker="block.sticker" :description="block.description" :date="block.date" />
    </div>
    <Pagination :visible="data.pagination.visible" :pageCount="totalPages" :currentPage="data.pagination.currentPage" />
  </section>
</template>

<script>
import NewsBlock from './NewsBlock.vue';
import Pagination from './Pagination.vue';

export default {
  props: ['data'],
  name: 'News',
  components: {
    NewsBlock,
    Pagination
  },
  computed: {
    headingStyle() {
      return this.data.text ? 'news__heading' :
        ['news__heading', 'news__heading_left']
    },
    totalPages() {
      return Math.ceil(this.data.blocks.length / this.data.blocksPerPage);
    },
    displayedBlocks() {
      const startIndex = (this.data.pagination.currentPage - 1) * this.data.blocksPerPage;
      const endIndex = startIndex + this.data.blocksPerPage;
      return this.data.blocks.slice(startIndex, endIndex);
    },
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

  &__heading_left {
    text-align: left;
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

@media (any-hover: hover) {
  .news {
    &__page-number:hover {
      background-color: $brandColor;
    }

    &__page-next:hover svg circle {
      fill: $brandColor;
    }
  }
}
</style>
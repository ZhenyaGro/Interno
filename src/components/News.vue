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
    <Pagination :visible="data.paginationVisible" :pageCount="totalPages" :currentPage="data.currentPage"
      :visiblePages="visiblePages" />
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
        ['news__heading', 'news__heading_left'];
    },
    totalPages() {
      if (!this.data.paginationVisible)
        return;

      return Math.ceil(this.data.blocks.length / this.data.blocksPerPage);
    },
    visiblePages() {
      const totalPages = this.totalPages;
      if (totalPages < 4)
        return totalPages;

      const currentPage = this.data.currentPage;
      const minPage = Math.max(currentPage - 1, 1);
      const maxPage = Math.min(currentPage + 1, totalPages);
      let visiblePages = [];

      if (currentPage == totalPages) visiblePages.push(currentPage - 2);
      for (let i = minPage; i <= maxPage; i++)
        visiblePages.push(i);
      if (currentPage == 1) visiblePages.push(3);

      return visiblePages;
    },
    displayedBlocks() {
      if (!this.data.paginationVisible)
        return this.data.blocks;

      const startIndex = (this.data.currentPage - 1) * this.data.blocksPerPage;
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
</style>
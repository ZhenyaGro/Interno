<template>
  <section class="news container">
    <header class="news__header">
      <h1 :class="headingStyle">{{ data.heading }}</h1>
      <p v-if="data.text" class="news__text">{{ data.text }}</p>
    </header>
    <div class="news__blocks">
      <NewsBlock v-for="(block, index) in data.blocks" :key="index" :link="block.link" :imgUrl="block.imgUrl"
        :sticker="block.sticker" :description="block.description" :date="block.date" />
    </div>
    <div v-if="data.pagination" class="news__pagination">
      <a href="#" class="news__page-number news__page-number_current">01</a>
      <a href="#" class="news__page-number">02</a>
      <a href="#" class="news__page-number">03</a>
      <a href="#" class="news__page-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import NewsBlock from './NewsBlock.vue';

export default {
  props: ['data'],
  name: 'News',
  components: {
    NewsBlock
  },
  computed: {
    headingStyle() {
      return this.data.text ? 'news__heading' :
        ['news__heading', 'news__heading_left']
    }
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
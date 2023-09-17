<template>
  <div>
    <BlogItem v-for="(article, index) in getArticlesData" :key="index" :article="article" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogItem from './BlogItem.vue';

export default {
  components: {
    BlogItem
  },
  name: 'BlogList',
  props: ['filterProp'],
  computed: {
    ...mapGetters(['getArticlesData']),
    filteredArticles() {
      return !this.filterProp ? this.articles
        : this.articles.filter(article => article.tags.includes(this.filterProp));
    },
  }
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.tags {
  min-width: 345px;

  &__heading {
    font-size: 25px;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__container {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
  }

  &__tag {
    padding: 10px 30px;
    border-radius: 10px;
    background: #F4F0EC;
    width: max-content;
    @extend %textAdditional;
    text-align: center;
    font-size: 18px;
    line-height: 125%; // 22.5px
    letter-spacing: 0.36px;
    transition: all .2s;
    cursor: pointer;

    &__tag:hover {
      background-color: $fontColorMain;
      color: white;
    }

    &_clicked {
      background-color: $fontColorMain;
      color: white;
    }
  }
}
</style>
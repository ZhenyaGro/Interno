<template>
  <div>
    <BlogItem class="blog-item" v-for="(article, index) in filteredArticles" :key="index" :article="article" />
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
      return !this.filterProp ?
        this.getArticlesData :
        this.getArticlesData.filter(article => article.tags.includes(this.filterProp));
    },
  }
}
</script>
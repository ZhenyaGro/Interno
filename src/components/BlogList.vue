<template>
  <div>
    <ol class="blog__ol">
      <li v-for="(article, index) in filteredArticles" :key="index" class="blog__li">
        <blog-item :text="article.text" />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  computed: {
    filteredArticles() {
      if (!this.selectedTag)
        return this.articles;
      return this.articles.filter(article => article.tags.includes(this.selectedTag));
    }
  },

  methods: {
    handleTagClicked(tag) {
      this.selectedTag = tag;
      console.log(this.selectedTag);
    }
  },

  created() {
    dataExchange.$on('selected-tag', tag => {
      this.selectedTag = tag;
    });
  }
}
</script>

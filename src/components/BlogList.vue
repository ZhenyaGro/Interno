<template>
  <div>
    <ol class="blog__ol">
      <li v-for="(article, index) in filteredArticles" :key="index" class="blog__li">
        <BlogItem :text="article.text" />
      </li>
    </ol>
  </div>
</template>

<script>
import BlogItem from './BlogItem.vue';

export default {
  components: {
    BlogItem
  },
  name: 'BlogList',
  data() {
    return {
      articles: [
        {
          text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          tags: ['Kitchen', 'Bedroom'],
        },
        {
          text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          tags: ['Building', 'Architecture'],
        },
        {
          text: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          tags: ['Kitchen Planning', 'Bedroom2'],
        }
      ],
      selectedTag: '',
    };
  },
  computed: {
    filteredArticles() {
      return !this.selectedTag ? this.articles
        : this.articles.filter(article => article.tags.includes(this.selectedTag));
    }
  },

  methods: {
    handleTagClicked(tag) {
      this.selectedTag = tag;
      console.log(this.selectedTag);
    }
  },

  created() {
    // dataExchange.$on('selected-tag', tag => {
    //   this.selectedTag = tag;
    // });
  }
}
</script>

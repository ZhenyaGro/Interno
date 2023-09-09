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
  props: ['filterProp'],
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
    };
  },
  computed: {
    filteredArticles() {
      return !this.filterProp ? this.articles
        : this.articles.filter(article => article.tags.includes(this.filterProp));
    }
  }
}
</script>

<template>
  <div class="content container">
    <BlogDetails></BlogDetails>
    <TagList @selectTag="getSelectedTag"></TagList>
  </div>
</template>

<script>
import BlogDetails from './BlogDetails.vue';
import TagList from './TagList.vue';
export default {
  data() {
    return {
      selectedTag: ''
    }
  },
  components: {
    BlogDetails,
    TagList
  },
  methods: {
    getSelectedTag(tag) {
      this.selectedTag = tag;
    }
  },
}
</script>
<template>
  <div class="content container">
    <div>
      <BlogDetails></BlogDetails>
      <BlogList></BlogList>
    </div>
    <TagList @selectTag="getSelectedTag"></TagList>
  </div>
</template>

<script>
import BlogDetails from './BlogDetails.vue';
import BlogList from './BlogList.vue';
import TagList from './TagList.vue';
export default {
  data() {
    return {
      selectedTag: ''
    }
  },
  components: {
    BlogDetails,
    BlogList,
    TagList
  },
  methods: {
    getSelectedTag(tag) {
      this.selectedTag = tag;
    }
  },
}
</script>
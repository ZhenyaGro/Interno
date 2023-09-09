<template>
  <div class="content container">
    <div>
      <BlogDetails />
      <BlogList :filterProp="selectedTag" />
    </div>
    <TagList @selectTag="getSelectedTag" />
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
<template>
  <div class="content container">
    <div>
      <BlogDetailsComp />
      <BlogList :filterProp="selectedTag" />
    </div>
    <TagList @selectTag="getSelectedTag" />
  </div>
</template>

<script>
import BlogDetailsComp from './BlogDetailsComp.vue';
import BlogList from './BlogList.vue';
import TagList from './TagList.vue';


export default {
  data() {
    return {
      selectedTag: ''
    }
  },
  components: {
    BlogDetailsComp,
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

<style lang="scss">
.content {
  display: flex;
  gap: 52px;
  margin-bottom: 60px;
}
</style>
<template>
  <div class="content container">
    <div>
      <BlogList :filterProp="getSelectedTag" />
    </div>
    <TagList :tags="getTags" @selectTag="getSelectedTag" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogList from './BlogList.vue';
import TagList from './TagList.vue';

export default {
  components: {
    BlogList,
    TagList
  },
  computed: {
    ...mapGetters(['getTags', 'getSelectedTag'])
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  gap: 52px;
  margin-bottom: 60px;
}
</style>
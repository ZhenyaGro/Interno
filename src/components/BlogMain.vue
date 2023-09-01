<template>
  <div>
    <BlogDetails></BlogDetails>
    <TagList></TagList>
  </div>
</template>

<script>
import BlogDetails from './BlogDetails.vue';
import TagList from './TagList.vue';
export default {
  components: {
    BlogDetails,
    TagList
  }
}
</script>
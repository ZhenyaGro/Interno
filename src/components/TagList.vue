<template>
  <div class="tags__container">
    <div v-for="(tag, index) in tags" :key="index" class="tags__tag" @click="handleClick(tag)"
      :class="{ 'tags__tag_clicked': tag === selectedTag }">{{ tag }}</div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom2'],
      selectedTag: '',
    };
  },

  methods: {
    handleClick(tag) {
      dataExchange.$emit('selected-tag', tag);
      this.selectedTag = tag;
    }
  },
}
</script>

<template>
  <div class="tags__container">
    <div v-for="(tag, index) in tags" :key="index" class="tags__tag" @click="selectTag(tag)"
      :class="{ 'tags__tag_clicked': tag === getSelectedTag }">{{ tag }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['tags'],
  name: 'BlogList',
  computed: {
    ...mapGetters(['getSelectedTag'])
  },

  methods: {
    ...mapActions(['selectTag']),
  },
}
</script>

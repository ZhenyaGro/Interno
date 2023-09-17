<template>
  <div class="tags__container">
    <div v-for="(tag, index) in tags" :key="index" class="tags__tag" @click="selectTag(tag)"
      :class="{ 'tags__tag_clicked': tag == getSelectedTag }">{{ tag }}</div>
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

<style lang="scss">
@import '/styles/_variables.scss';

.tags {

  &__heading {
    font-size: 25px;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__container {
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
  }

  &__tag {
    padding: 10px 30px;
    border-radius: 10px;
    background: #F4F0EC;
    width: max-content;
    @extend %textAdditional;
    text-align: center;
    font-size: 18px;
    line-height: 125%; // 22.5px
    letter-spacing: 0.36px;
    transition: all .2s;
    cursor: pointer;

    &__tag:hover {
      background-color: $fontColorMain;
      color: white;
    }

    &_clicked {
      background-color: $fontColorMain;
      color: white;
    }
  }
}
</style>
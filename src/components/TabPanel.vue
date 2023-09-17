<template>
  <div class="categories__panel">
    <div v-for="(tab, index) in tabs" :key="index" class="categories__tab"
      :class="{ 'categories__tab_selected': tab == tabs[selectedTab] }" @click="selectTab(index)">{{ tab }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tabs', 'selectedTab'],
  methods: {
    ...mapActions(['selectTab'])
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.categories {
  &__panel {
    display: flex;
    justify-content: center;
    border: 1px solid $brandColor;
    width: fit-content;
    border-radius: 18px;
  }

  &__tab {
    font-family: 'Jost';
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 26px 66px;
    border-radius: 18px;
    transition: all .3s;
  }

  &__tab:hover {
    cursor: pointer;
    background-color: papayawhip;
  }

  &__tab_selected {
    background-color: $brandColor;
    color: white;
  }

  &__tab_selected:hover {
    border: none;
    background-color: $brandColor;
  }
}
</style>
<template>
  <div class="results container">
    <div v-for="(result, index) in getResultsData" :key="index" class="results__block">
      <h1 class="results__heading">{{ result.heading }}</h1>
      <p class="results__text">{{ result.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Results',
  computed: {
    ...mapGetters(['getResultsData'])
  }
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.results {
  padding-top: 151px;
  padding-bottom: 151px;
  background-color: $hoverAddColor;
  display: flex;
  justify-content: center;
  gap: 76px;
  margin-bottom: 96px;

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid $brandColor;
    padding-right: 56px;
  }

  &__block:last-child {
    border: none;
  }

  &__heading {
    color: #CDA274;
    font-size: 85px;
    line-height: 125%; // 106.25px
    letter-spacing: 1.7px;
  }

  &__text {
    @extend %textAdditional;
    letter-spacing: 0.22px;
  }
}
</style>
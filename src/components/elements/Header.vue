<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header container">
    <a :href="getHeaderData.homelink" class="header__homelink">
      <img :src="getHeaderData.logoUrl" alt="logo" class="header__logo">
      {{ getHeaderData.companyName }}
    </a>
    <nav class="header__links">
      <a v-for="(navObj, index) in getHeaderData.navigator" :key="index" :href="navObj.link" class="header__link">{{
        navObj.text }}</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getHeaderData']),
  },

};
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 45px;

  &__homelink {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 40px;
    line-height: 125%;
  }

  &__links {
    display: flex;
    gap: 48px;
  }

  &__link {
    @extend %textAdditional;
    font-size: 20px;
    transition: color .1s;
  }
}

@media (any-hover: hover) {
  .header {
    &__link:hover {
      color: $brandColor;
    }
  }
}
</style>

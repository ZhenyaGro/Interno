<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header container">
    <Logo />
    <nav class="header__links">
      <router-link v-for="(navObj, index) in getNavData" :key="index" class="header__link" :to="navObj.link">{{
        navObj.text }}</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['getHeaderData', 'getNavData']),
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

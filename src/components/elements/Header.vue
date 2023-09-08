<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header container">
    <a href="index.html" class="header__homelink">
      <img :src="logoUrl" alt="logo" class="header__logo">
      Interno
    </a>
    <nav class="header__links">
      <a href="index.html" class="header__link">Home</a>
      <a href="#" class="header__link">Project</a>
      <a href="blog.html" class="header__link">Blog</a>
    </nav>
  </header>
</template>

<script>
export default {

  computed: {
    logoUrl() {
      return require(`/src/assets/images/logo.png`);
    }
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

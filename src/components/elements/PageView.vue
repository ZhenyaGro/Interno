<template>
  <div class="page-view container">
    <div v-if="data" class="page-view__info">
      <h1 class="page-view__heading">{{ data.heading }}</h1>
      <ul class="page-view__breadcrumbs">
        <li v-for="(breadcrumb, index) in data.breadcrumbs" :key="index" class="page-view__breadcrumb">
          <a href="index.html" class="page-view__link">{{ breadcrumb }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'PageView'
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/images/blog-background.jpg', 356);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;


  &__info {
    background-color: white;
    border-radius: 37px 37px 0px 0px;
    padding: 41px 78px;
  }

  &__heading {
    font-size: 50px;
    line-height: 125%; // 62.5px
  }

  &__breadcrumbs {
    list-style: none;
    display: flex;
    justify-content: center
  }

  &__breadcrumb {
    @extend %textAdditional;
    letter-spacing: 0.22px;
  }

  &__breadcrumbs li:not(:last-child)::after {
    display: inline-block;
    content: "/";
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
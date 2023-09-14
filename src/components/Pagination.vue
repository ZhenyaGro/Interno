<template>
  <div v-if="visible" class="news__pagination">
    <a v-for="(pageNumber, index) in  pageCount " :key="index" href="#" class="news__page-number"
      :class="index + 1 == this.currentPage ? ['news__page-number', 'news__page-number_current'] : 'news__page-number'">{{
        pageNumber
      }}</a>
    <a href="#" class="news__page-next">
      <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ['visible', 'pageCount', 'currentPage'],
  computed: {
  }
}
</script>

<style lang="scss" scoped></style>
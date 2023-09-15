<template>
  <div v-if="visible" class="news__pagination">
    <button v-for="(pageNumber, index) in  visiblePages " :key="index" class="news__page-number"
      :class="pageNumber == this.currentPage ? ['news__page-number', 'news__page-number_current'] : 'news__page-number'"
      :to="`/blog/${pageNumber}`" @click="setCurrentPage(pageNumber)">{{
        pageNumber
      }}</button>
    <svg v-if="pageCount > 2" class="news__page-next" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
      viewBox="0 0 53 52" fill="none">
      <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
      <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['visible', 'pageCount', 'currentPage', 'visiblePages'],
  methods: {
    ...mapActions(['setCurrentPage'])
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

button {
  background-color: white;
}

.news {
  &__page-number {
    height: 52px;
    width: 52px;
    color: #292F36;
    font-family: 'Jost';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; // 24px
    text-transform: capitalize;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CDA274;
    transition: background-color .2s;

    &:hover {
      background-color: $brandColor;
    }

    &:active {
      background-color: #F4F0EC;
    }
  }

  &__page-number_current {
    background-color: #F4F0EC;
    border: 0;

    &:hover {
      background-color: #F4F0EC;
    }
  }

  &__page-next svg circle {
    transition: all 2s;
  }
}

@media (any-hover: hover) {
  .news {
    &__page-next:hover svg circle {
      fill: $brandColor;
    }

    svg.news__page-next:hover {
      fill: $brandColor;
    }

    svg.news__page-next:active {
      fill: #F4F0EC;
    }
  }
}
</style>
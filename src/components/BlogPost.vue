<template>
  <section class="post container">
    <h1 class="post__heading">Latest Post</h1>
    <a href="#" class="post__link">
      <div class="post__block">
        <img :src="getPostData.imgUrl" alt="post image" class="post__img">
        <div class="post__info">
          <h3 class="post__title">{{ getPostData.title }}</h3>
          <p v-for="(paragraph, index) in getPostData.text" :key="index" class="post__text">{{ paragraph }}</p>
          <div class="post__additional">
            <p class="post__date">{{ getPostData.date }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
              <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BlogPost',
  computed: {
    ...mapGetters(['getPostData'])
  },
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.post {
  margin-bottom: 150px;

  &__heading {
    font-size: 50px;
    line-height: 125%; // 62.5px;
    margin-bottom: 27px;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 65px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    transition: background-color .2s;

    & svg circle {
      transition: fill .2s;
    }
  }

  &__img {
    border-radius: 50px;
  }

  &__info {
    max-width: 489px;
  }

  &__title {
    font-size: 25px;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
    margin-bottom: 22px;
  }

  &__text {
    @extend %textAdditional;
    letter-spacing: 0.22px;
    margin-bottom: 41px;
  }

  &__additional {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @extend %textAdditional;
  }
}

@media (any-hover: hover) {

  .post {
    &__block:hover {
      background-color: #F4F0EC;

      & svg circle {
        fill: white;
      }
    }
  }
}
</style>
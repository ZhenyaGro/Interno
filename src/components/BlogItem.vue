<template>
  <article class="blog__article">
    <h1 class="blog__heading">{{ article.heading }}</h1>
    <p v-if="article.textAfterHeading" class="blog__text">{{ article.textAfterHeading }}</p>
    <ol v-if="article.listText" class="blog__ol">
      <li v-for="(listLi, index) in article.listText" :key="index" class="blog__li blog__text">{{ listLi }}
      </li>
    </ol>
    <img :src="article.imgPath" alt="article image" class="blog__img">
    <div v-if="article.breadcrumbs || article.date" class="blog__info">
      <span class="blog__date">{{ article.date }}</span>
      <span class="blog__breadcrumbs">
        <ul class="blog__breadcrumbs">
          <li v-for="(breadcrumb, index) in article.breadcrumbs" :key="index" class="blog__breadcrumb">
            <router-link :to="`${article.links}`" href="index.html" class="blog__link">{{ breadcrumb }}</router-link>
          </li>
        </ul>
      </span>
    </div>
    <p v-for="(textblock, index) in article.text" :key="index" class="blog__text">{{ textblock }}</p>
    <blockquote v-if="article.hasQuote" class="blog__blockquote">
      <svg class="blog__svg-quote" width="74" height="56" viewBox="0 0 74 56" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
          fill="#CDA274" />
      </svg>
      <q class="blog__quote">{{ article.quote }}</q>
    </blockquote>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['article'],
  computed: {
    // ...mapGetters(['getArticlesData'])
  }
}
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.blog {

  &__blog-details {
    margin-bottom: 27px;
  }

  &__heading {
    font-size: 50px;
    line-height: 125%; // 62.5px
    letter-spacing: 1px;
    margin-bottom: 21px;
  }

  &__img {
    border-radius: 50px;
    margin-bottom: 46px;
  }

  &__info {
    @extend %textAdditional;
    font-size: 16px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  &__breadcrumbs {
    list-style: none;
    display: flex;
    justify-content: center
  }

  &__breadcrumbs li:not(:last-child)::after {
    display: inline-block;
    content: "/";
    padding-right: 8px;
    padding-left: 8px
  }

  &__breadcrumb:hover a {
    color: $brandColor;
  }

  &__text {
    @extend %textAdditional;
    margin-bottom: 35px;
  }

  &__blockquote {
    border-radius: 50px;
    background: #F4F0EC;
    padding: 53px 227px;
    text-align: center;
  }

  &__svg-quote {
    margin: 0 auto;
    display: block;
  }

  &__quote {
    color: $brandColor;
    font-size: 25px;
    font-style: italic;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
  }

  &__quote::before,
  &__quote::after {
    content: '';
  }

  &__li::marker {
    color: $brandColor;
    font-size: 20px;
    line-height: 125%; // 25px
    letter-spacing: 0.4px;
  }

  &__list-image {
    border-radius: 50px;
    margin-bottom: 35px;
  }
}
</style>
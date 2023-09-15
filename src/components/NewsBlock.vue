<template>
  <a :href="link" class="news__block">
    <div class="news__main-group">
      <div class="news__picture">
        <img :src="imgUrl" alt="news image" class="news__img">
        <p class="news__sticker">{{ sticker }}</p>
      </div>
      <h3 class="news__description">{{ description }}</h3>
    </div>
    <div class="news__additional">
      <p class="news__date">{{ date }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  props: ['link', 'imgUrl', 'sticker', 'description', 'date'],
  name: 'NewsBlocks'
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.news {
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 382px;
    box-sizing: border-box;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    padding: 21px 21px 30px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: background-color .3s;

    & svg circle {
      transition: fill .3s;
    }
  }

  &__main-group {
    display: flex;
    flex-direction: column;
  }

  &__picture {
    position: relative;
    margin-bottom: 21px;
  }

  &__img {
    border-radius: 62px 62px 0 0;
  }

  &__sticker {
    position: absolute;
    left: 20px;
    bottom: 20px;
    border: 0;
    border-radius: 8px 8px 8px 0;
    background-color: white;
    padding: 8px;
    @extend %textAdditional;
    font-size: 16px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }

  &__description {
    font-size: 25px;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
    margin-bottom: 30px;
    max-width: 295px;
  }

  &__additional {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__date {
    @extend %textAdditional;
    font-size: 16px;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}

@media (any-hover: hover) {
  .news {
    &__block:hover {
      background-color: $hoverAddColor;
    }

    &__block:hover svg circle {
      fill: white;
    }
  }
}
</style>
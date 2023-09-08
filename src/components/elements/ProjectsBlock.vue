<template>
  <a href="#" class="projects__block">
    <img :src="imgUrl" alt="project image" class="projects__img">
    <div class="projects__info">
      <div class="projects__description">
        <h3 class="projects__project-name">{{ heading }}</h3>
        <p class="projects__category">{{ paragraph }}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectsBlock',
  props: ['imgUrl', 'heading', 'paragraph'],
};
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.projects {
  margin-bottom: 96px;

  &__header {
    text-align: center;
  }

  &__heading {
    font-size: 50px;
    line-height: 125%; // 62.5px
    letter-spacing: 1px;
  }

  &__text {

    @extend %textAdditional;
    letter-spacing: 0.22px;
    margin: 0 auto;
    max-width: 737px;
    margin-bottom: 93px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(547px, 1fr));
    column-gap: 100px;
    row-gap: 56px;
  }

  &__block {
    width: 547px;
    display: block;
  }

  &__block:first-child>img {
    border-radius: 0 80px 0 0;
  }

  &__block:nth-child(2)>img {
    border-radius: 80px 0 0 0;
  }

  &__block:nth-child(3)>img {
    border-radius: 0 0 80px 0;
  }

  &__block:last-child>img {
    border-radius: 0 0 0 80px;
  }

  &__block svg {

    path,
    circle {
      transition: all .2s;
    }
  }

  &__img {
    margin-bottom: 24px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__project-name {
    font-size: 25px;
    line-height: 125%; // 31.25px
    letter-spacing: 0.5px;
  }

  &__category {
    @extend %textAdditional;
    letter-spacing: 0.22px;
  }

}
</style>
<template>
  <a href="#" class="projects__block">
    <img :src="data.imgPath" alt="project image" class="projects__img">
    <div class="projects__info">
      <div class="projects__description">
        <h3 class="projects__project-name">{{ data.heading }}</h3>
        <p class="projects__category">{{ data.text }}</p>
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
  props: ['data'],
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

@media (any-hover: hover) {

  .projects {
    &__block:hover svg path {
      stroke: white;
    }

    &__block:hover svg circle {
      fill: $brandColor;
    }
  }
}
</style>
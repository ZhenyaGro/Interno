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
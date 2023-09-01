<template>
  <p class="blog__text">{{ text }}</p>
</template>

<script>
export default {
  name: 'BlogItem',
  props: ['text']
}
</script>

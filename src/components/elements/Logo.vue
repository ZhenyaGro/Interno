<template>
  <a :href="getLogoData.homelink">
    <img :src="getLogoData.logoUrl" alt="logo" class="logo">
    {{ getLogoData.companyName }}
  </a>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Logo',
  computed: {
    ...mapGetters(['getLogoData'])
  }
}
</script>

<style lang="css">
a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
  line-height: 125%;
}
</style>

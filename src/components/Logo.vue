<template>
  <router-link :to="getLogoData.homelink">
    <img :src="getLogoData.logoUrl" alt="logo" class="logo">
    {{ getLogoData.companyName }}
  </router-link>
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

<style lang="css" scoped>
a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
  line-height: 125%;
}
</style>

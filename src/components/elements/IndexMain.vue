<template>
  <div class="container">
    <main class="index-main">
      <h1 class="index-main__heading">{{ getIndexMainData.heading }}</h1>
      <p class="index-main__text">{{ getIndexMainData.text }}</p>
      <a :href="getIndexMainData.link" class="index-main__link">{{ getIndexMainData.linkText }}<svg width="19" height="17"
          viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </a>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexMain',
  computed: {
    ...mapGetters(['getIndexMainData'])
  }
};
</script>

<style lang="scss">
@import '/styles/_variables.scss';

.index-main {
  background-image: url(/src/assets/images/index-main_background.png);
  border-radius: 50px;
  background-repeat: no-repeat;
  height: 758px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 57px;
  margin-bottom: 96px;
  padding-left: 52px;
  padding-right: 52px;

  &__heading {
    font-size: 65px;
    line-height: 125%; // 81.25px
    max-width: 434px;
    margin-bottom: 18px;
  }

  &__text {
    @extend %textAdditional;
    letter-spacing: 0.22px;
    margin-bottom: 21px;
    max-width: 434px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 26px 49px 26px 48px;
    border-radius: 18px;
    background: $fontColorMain;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    font-family: 'Jost';
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%; // 22.5px
    letter-spacing: 0.36px;
    transition: all .3s;
  }
}
</style>
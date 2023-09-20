<template>
  <div>
    <PageView class="page-view" :data="getProjectPageViewData" />
    <TabPanel :tabs="getTabsData" :selectedTab="getIndexSelectedTab" class="categories" />
    <ProjectsContent />
    <Pagination />
  </div>
</template>

<script>
import PageView from '@/components/PageView.vue';
import TabPanel from '@/components/TabPanel.vue';
import ProjectsContent from '@/components/ProjectsContent.vue';
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Project',
  components: {
    PageView,
    TabPanel,
    ProjectsContent,
    Pagination
  },
  computed: {
    ...mapGetters(['getProjectPageViewData', 'getTabsData', 'getIndexSelectedTab'])
  }
}
</script>

<style lang="scss" scoped>
@import '/styles/_variables.scss';

.page-view {
  @include page-view_background('/public/img/project-view.jpg', 356);
}

.categories {
  margin: 0 auto 60px;
}
</style>
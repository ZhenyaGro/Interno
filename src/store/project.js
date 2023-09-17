export default {
  state() {
    return {
      pageView: {
        heading: 'Our Project',
        breadcrumbs: ['Home', 'Project']
      },
      tabs: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
      selectedTab: 1
    };
  },
  getters: {
    getProjectPageViewData(state) {
      return state.pageView;
    },
    getTabsData(state) {
      return state.tabs;
    },
    getIndexSelectedTab(state) {
      return state.selectedTab;
    }
  },
  mutations: {
    SET_TAB(state, tab) {
      state.selectedTab = tab;
    }
  },
  actions: {
    selectTab({ commit }, tab) {
      commit('SET_TAB', tab);
    }
  }
}
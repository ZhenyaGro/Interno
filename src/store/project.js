export default {
  state() {
    return {
      pageView: {
        heading: 'Our Project',
        breadcrumbs: ['Home', 'Project']
      },
      tabs: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
      selectedTab: 1,
      projects: {
        bedroom: [
          {
            imgPath: '/img/bedroom1.png',
            heading: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom2.png',
            heading: 'Classic Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom3.png',
            heading: 'Minimal Bedroom table',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom4.png',
            heading: 'Modern Medroom',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom5.png',
            heading: 'Minimal Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom6.png',
            heading: 'Modern Bedroom',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom7.png',
            heading: 'System Table',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: '/img/bedroom8.png',
            heading: 'Modern Bedroom',
            text: 'Decor / Artchitecture'
          }
        ]
      }
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
    },
    getProjectData(state) {
      return state.projects;
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
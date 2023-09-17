export default {
  state() {
    return {
      pageView: {
        heading: 'Our Project',
        breadcrumbs: ['Home', 'Project']
      },
    };
  },
  getters: {
    getProjectPageViewData(state) {
      return state.pageView;
    },
  }
}
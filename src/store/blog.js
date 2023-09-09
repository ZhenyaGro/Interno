export default {
  state() {
    return {
      pageView: {
        heading: 'Articles & News',
        breadcrumbs: ['Home', 'Blog']
      },
    }
  },
  getters: {
    getBlogPageViewData(state) {
      return state.pageView;
    }
  }
}
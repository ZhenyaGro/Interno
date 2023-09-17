export default {
  state() {
    return {
      articles: [
        {
          heading: 'Let’s Get Solution for Building Construction Work',
          imgPath: '/img/blog-details_article-image.png',
          date: '26 December, 2022',
          breadcrumbs: ['Interior', 'Home', 'Decore'],
          links: '/blog',
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.", 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          hasQuote: true,
          quote: 'The details are not the details. They make the design.',
          tags: ['Kitchen', 'Building', 'Kitchen Planning']
        },
        {
          heading: 'Design sprints are great',
          textAfterHeading: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          listText: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
          imgPath: '/img/article-list_image.png',
          text: ['Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
          tags: ['Bedroom', 'Bedroom2', 'Architecture']
        }
      ],
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom2'],
      selectedTag: ''
    }
  },
  getters: {
    getArticlesData(state) {
      return state.articles;
    },
    getTags(state) {
      return state.tags;
    },
    getSelectedTag(state) {
      return state.selectedTag;
    }
  },
  mutations: {
    SET_SELECTEDTAG(state, tag) {
      state.selectedTag = state.selectedTag == tag ? '' : tag;
    }
  },
  actions: {
    selectTag({ commit }, tag) {
      commit('SET_SELECTEDTAG', tag);
    }
  }
};
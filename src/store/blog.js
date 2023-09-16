export default {
  state() {
    return {
      pageView: {
        heading: 'Articles & News',
        breadcrumbs: ['Home', 'Blog']
      },
      post: {
        imgUrl: './img/latest-post-img.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        text: [
          'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.',
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
        ],
        date: '26 December,2022'
      },
      news: {
        heading: 'Articles & News',
        blocks: [
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Kitchen Design',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news2.png',
            sticker: 'Living Design',
            description: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news3.png',
            sticker: 'Interior Design',
            description: 'Best For Any Office & Business Interior Solution',
            date: '25 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news4.png',
            sticker: 'Kitchen Design',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news5.png',
            sticker: 'Living Design',
            description: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news6.png',
            sticker: 'Interior Design',
            description: 'Best For Any Office & Business Interior  Solution',
            date: '25 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 7',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 8',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 9',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 10',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 11',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 12',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 13',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 14',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 15',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 16',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 17',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 18',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 19',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 20',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 21',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '/blogdetails',
            imgUrl: './img/news1.png',
            sticker: 'Block 22',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
        ],
        blocksPerPage: 6,
        paginationVisible: true,
        currentPage: 1
      },
    }
  },
  getters: {
    getBlogPageViewData(state) {
      return state.pageView;
    },
    getPostData(state) {
      return state.post;
    },
    getBlogNewsData(state) {
      return state.news;
    },
  },
  mutations: {
    SET_CURRENTPAGE(state, number) {
      state.news.currentPage = number;
    }
  },
  actions: {
    setCurrentPage({ commit }, number) {
      commit('SET_CURRENTPAGE', number);
    }
  }
};
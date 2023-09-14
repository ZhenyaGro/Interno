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
            link: '#',
            imgUrl: './img/news1.png',
            sticker: 'Kitchen Design',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news2.png',
            sticker: 'Living Design',
            description: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news3.png',
            sticker: 'Interior Design',
            description: 'Best For Any Office & Business Interior Solution',
            date: '25 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news4.png',
            sticker: 'Kitchen Design',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news5.png',
            sticker: 'Living Design',
            description: 'Low Cost Latest Invented Interior Designing Ideas.',
            date: '22 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news6.png',
            sticker: 'Interior Design',
            description: 'Best For Any Office & Business Interior  Solution',
            date: '25 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news1.png',
            sticker: 'Test',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
          {
            link: '#',
            imgUrl: './img/news1.png',
            sticker: 'Test',
            description: 'Let’s Get Solution For Building Construction Work',
            date: '26 December, 2022'
          },
        ],
        blocksPerPage: 6,
        pagination: {
          visible: true,
          currentPage: 1,
        }
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
  }
};
export default {
  state() {
    return {
      articles: [
        {
          name: 'BlogDetails',
          heading: 'Let’s Get Solution for Building Construction Work',
          imgPath: '/img/blog-details_article-image.png',
          date: '26 December, 2022',
          breadcrumbs: ['Interior', 'Home', 'Decore'],
          text: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.", 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
          hasQuote: true,
          quote: 'The details are not the details. They make the design.',
        }
      ]
    }
  },
  getters: {
    getArticlesData(state) {
      return state.articles;
    }
  }
};
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      indexMain: {
        heading: 'Let Your Home Be Unique',
        text: 'There are many variations of the passages of lorem Ipsum fromavailable, majority.',
        linkText: 'Get Started',
        link: '#'
      },
      projects: {
        heading: 'Follow Our Projects',
        paragraph: 'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.',
        blocks: [
          {
            imgPath: './img/project1.png',
            heading: 'Modern Kitchen',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: './img/project2.png',
            heading: 'Modern Kitchen',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: './img/project3.png',
            heading: 'Modern Kitchen',
            text: 'Decor / Artchitecture'
          },
          {
            imgPath: './img/project4.png',
            heading: 'Modern Kitchen',
            text: 'Decor / Artchitecture'
          }
        ],
      },
      results: [
        {
          heading: 12,
          text: 'Years Of Experiance'
        },
        {
          heading: 85,
          text: 'Success Project'
        },
        {
          heading: 15,
          text: 'Active Project'
        },
        {
          heading: 95,
          text: 'Happy Customers'
        },
      ]
    }
  },
  getters: {
    getIndexMainData(state) {
      return state.indexMain;
    },
    getProjectsData(state) {
      return state.projects;
    },
    getResultsData(state) {
      return state.results;
    }
  },
  mutations: {
  }
});
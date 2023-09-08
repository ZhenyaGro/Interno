import { createStore } from 'vuex';

export default {
  state() {
    return {
      header: {
        homelink: 'index.html',
        logoUrl: './img/logo.png',
        companyName: 'Interno',
        navigator: [
          {
            link: 'index.html',
            text: 'Home'
          }, {
            link: '#',
            text: 'Project'
          },
          {
            link: 'blog.html',
            text: 'Blog'
          }
        ]
      }
    }
  },
  getters: {
    getHeaderData(state) {
      return state.header;
    },

  },
  mutations: {
  }
};
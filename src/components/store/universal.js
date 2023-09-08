import { createStore } from 'vuex';

export default {
  state() {
    return {
      logo: {
        homelink: 'index.html',
        logoUrl: './img/logo.png',
        companyName: 'Interno',
      },
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
      },
      footer: {

      }
    }
  },
  getters: {
    getLogoData(state) {
      return state.logo;
    },
    getHeaderData(state) {
      return state.header;
    },

  },
  mutations: {
  }
};
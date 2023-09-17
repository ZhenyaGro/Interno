export default {
  state() {
    return {
      logo: {
        homelink: '/home',
        logoUrl: './img/logo.png',
        companyName: 'Interno',
      },
      header: {
        homelink: '/home',
        logoUrl: './img/logo.png',
        companyName: 'Interno'
      },
      footer: {
        text: 'It is a long established fact that a reader will be distracted lookings.',
        social: ['#', '#'],
        contacts: {
          address: '55 East Birchwood Ave. Brooklyn, New York 11201',
          email: 'contact@interno.com',
          phone: '(123) 456 - 7890'
        }
      },
      navigator: [
        {
          link: '/home',
          text: 'Home'
        }, {
          link: '/project',
          text: 'Project'
        },
        {
          link: '/blog',
          text: 'Blog'
        }
      ]
    }
  },
  getters: {
    getLogoData(state) {
      return state.logo;
    },
    getHeaderData(state) {
      return state.header;
    },
    getFooterData(state) {
      return state.footer;
    },
    getNavData(state) {
      return state.navigator;
    }
  },
  mutations: {
  }
};
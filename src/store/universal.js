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
        companyName: 'Interno',
        navigator: [
          {
            link: '/home',
            text: 'Home'
          }, {
            link: '/',
            text: 'Project'
          },
          {
            link: '/blog',
            text: 'Blog'
          }
        ]
      },
      footer: {
        text: 'It is a long established fact that a reader will be distracted lookings.',
        social: ['#', '#'],
        pages: [
          {
            link: '/home',
            text: 'Home'
          },
          {
            link: '/',
            text: 'Project'
          },
          {
            link: '/blog',
            text: 'Blog'
          }
        ],
        contacts: {
          address: '55 East Birchwood Ave. Brooklyn, New York 11201',
          email: 'contact@interno.com',
          phone: '(123) 456 - 7890'
        }
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
    getFooterData(state) {
      return state.footer;
    }
  },
  mutations: {
  }
};
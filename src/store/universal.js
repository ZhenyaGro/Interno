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
        text: 'It is a long established fact that a reader will be distracted lookings.',
        social: ['#', '#'],
        pages: [
          {
            link: '#',
            text: 'Home'
          },
          {
            link: '#',
            text: 'Project'
          },
          {
            link: '#',
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
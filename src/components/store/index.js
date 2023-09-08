import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
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
      }
    }
  },
  getters: {
    getProjectsData(state) {
      return state.projects;
    }
  },
  mutations: {
  }
});
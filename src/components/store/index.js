import { createStore } from 'vuex';

import storeUniversal from './universal.js';
import storeIndex from './indexPage.js';
import storeBlog from './blog.js'

export default createStore({
  modules: {
    storeUniversal,
    storeIndex,
    storeBlog,
  }
});


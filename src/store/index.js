import { createStore } from 'vuex';

import storeUniversal from './universal.js';
import storeIndex from './home.js';
import storeBlog from './blog.js'
import blogDetails from './blogdetails.js';

export default createStore({
  modules: {
    storeUniversal,
    storeIndex,
    storeBlog,
    blogDetails
  }
});


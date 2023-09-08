import { createStore } from 'vuex';

import storeUniversal from './universal.js';
import storeIndex from './indexPage.js';

export default createStore({
  modules: {
    storeUniversal,
    storeIndex,
  }
});


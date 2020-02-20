import Vue from 'vue';
import Vuex from 'vuex';

import utils from './modules/utils'; // eslint-disable-line import/no-cycle

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    utils,
  },
  strict: debug,
});

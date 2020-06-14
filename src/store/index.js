/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';

import utils from './modules/utils';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    utils,
  },
  strict: debug,
});

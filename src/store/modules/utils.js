import {
  AUTO_THEME,
} from '@/utils/constants';
import storage from '@/utils/storage'; // eslint-disable-line import/no-cycle

const initialState = {
  theme: AUTO_THEME,
  language: null,
};

const state = initialState;

/* eslint-disable no-shadow */
const getters = {
  theme: state => state.theme,
  language: state => state.language,
};
/* eslint-enable no-shadow */

const actions = {
  changeTheme: ({ commit }, theme) => {
    commit('changeTheme', theme);
    storage.rememberTheme(theme);
  },
  changeLanguage: ({ commit }, language) => {
    commit('changeLanguage', language);
    storage.rememberLanguage(language);
  },
};

/* eslint-disable no-shadow */
const mutations = {
  changeTheme: (state, theme) => {
    state.theme = theme;
  },
  changeLanguage: (state, language) => {
    state.language = language;
  },
};
/* eslint-enable no-shadow */

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

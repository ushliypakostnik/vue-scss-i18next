/* eslint-disable import/no-cycle, no-shadow */
import {
  AUTO_THEME,
} from '@/utils/constants';
import storage from '@/utils/storage';

const initialState = {
  theme: AUTO_THEME,
  language: null,
};

const state = initialState;

const getters = {
  theme: state => state.theme,
  language: state => state.language,
};

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

const mutations = {
  changeTheme: (state, theme) => {
    state.theme = theme;
  },
  changeLanguage: (state, language) => {
    state.language = language;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

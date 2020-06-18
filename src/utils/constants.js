const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.VUE_APP_API_URL;
export const API_URL = isProd ? apiUrl || 'https://???' : apiUrl || 'http://localhost:8082';

export const LOCALSTORAGE = {
  LANGUAGE: 'language',
  THEME: 'theme',
};

/* export const SESSIONSTORAGE = {
}; */

export const LANGUAGES = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

// Auto language
export const AUTO_LANG = localStorage.getItem(LOCALSTORAGE.LANGUAGE) || null;

export const THEMES = [
  { id: 1, name: 'light' },
  { id: 2, name: 'dark' },
];

// Auto theme
const theme = localStorage.getItem(LOCALSTORAGE.THEME) || null;
export const AUTO_THEME = theme || THEMES[1].name;

export const DESIGN = {
  BREAKPOINTS: {
    tablet: 768,
    desktop: 1240,
  },
};

export const LOCALES = {
  [LANGUAGES[0].name]: {
    home: {
      title: 'Vue cli based frontend boilerplate with i18next and themezation',
    },
    page404: {
      text: 'Page not found!!!',
    },
  },
  [LANGUAGES[1].name]: {
    home: {
      title: 'Основаннный на Vue cli стартовый проект фронтенда c i18next и темезацией',
    },
    page404: {
      text: 'Страница не найдена!!!',
    },
  },
};

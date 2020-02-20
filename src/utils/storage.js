import { LOCALSTORAGE } from '@/utils/constants';

import i18n from './i18n'; // eslint-disable-line import/no-cycle

export default ({
  // Utils

  rememberLanguage: (language) => {
    i18n.i18next.changeLanguage(language);
  },

  rememberTheme: (theme) => {
    localStorage.setItem(LOCALSTORAGE.THEME, theme);
  },
});

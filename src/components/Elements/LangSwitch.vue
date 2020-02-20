<template>
  <ul class="switch">
    <li
      v-for="value in languages"
      v-bind:key="value"
    >
      <a v-if="value !== language"
        href="#"
        @click.prevent="changeLanguage(value)"
      >{{ value }}</a>
      <span v-else>{{ value }}</span>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { LANGUAGES } from '@/utils/constants';

const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'LangSwitch',

  computed: {
    ...mapGetters({
      language: 'language',
    }),

    languages() {
      const languages = LANGUAGES.map((language) => {
        return language.name;
      });
      return languages;
    },
  },

  methods: {
    changeLanguage(language) {
      this.$i18n.i18next.changeLanguage(language);
      this.$store.dispatch('utils/changeLanguage', language);
    },
  },
};
</script>

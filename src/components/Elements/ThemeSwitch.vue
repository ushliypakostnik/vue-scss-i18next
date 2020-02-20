<template>
  <ul class="switch">
    <li
      v-for="value in themes"
      v-bind:key="value"
    >
      <a v-if="value !== theme"
        href="#"
        @click.prevent="changeTheme(value)"
      >{{ value }}</a>
      <span v-else>{{ value }}</span>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { THEMES } from '@/utils/constants';

const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'ThemeSwitch',

  computed: {
    ...mapGetters({
      theme: 'theme',
    }),

    themes() {
      const themes = THEMES.map((theme) => {
        return theme.name;
      });
      return themes;
    },
  },


  methods: {
    changeTheme(theme) {
      this.$store.dispatch('utils/changeTheme', theme);
    },
  },
};
</script>

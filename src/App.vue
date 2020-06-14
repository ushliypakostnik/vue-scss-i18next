<template>
  <div
    id="app"
    :class="`app--${theme}`"
  >
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('utils');

export default {
  name: 'App',

  computed: {
    ...mapGetters({
      theme: 'theme',
    }),
  },
};
</script>

<style src="./styles/_main.scss" lang="scss">
  #app {
    min-height: 100vh;
  }
</style>

<template>
  <div class="layout">
    <Header>
      <LangSwitch /><ThemeSwitch />
    </Header>
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import LangSwitch from '@/components/Elements/LangSwitch.vue';
import ThemeSwitch from '@/components/Elements/ThemeSwitch.vue';

export default {
  name: 'Layout',

  components: {
    Header,
    LangSwitch,
    ThemeSwitch,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: $header__height;

    .container {
      max-width: $breackpoints__min;
      text-align: center;
    }
  }
</style>

<template>
  <Layout class="page404">
    <div class="container">
      <Logo />
      <h1>404</h1>
      <h3>{{ $t('page404.text') }}</h3>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';
import Logo from '@/components/Layout/Logo.vue';

export default {
  name: 'NotFound',

  components: {
    Layout,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .page404 {
    h1 {
      color: $colors__primary;
      margin: 0;
      @include text($font-family__sans, $font-size--large, $font-weight__sans__bold);
    }

    h3 {
      margin: 0;
      @include text($font-family__sans, $font-size--normal, $font-weight__sans__bold);
    }
  }
</style>

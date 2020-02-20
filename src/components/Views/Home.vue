<template>
  <Layout>
    <div class="container">
      <Logo />
      <h3>{{ $t('home.title') }}</h3>
      <Loading />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';
import Logo from '@/components/Layout/Logo.vue';
import Loading from '@/components/Elements/Loading.vue';

export default {
  name: 'Home',

  components: {
    Layout,
    Logo,
    Loading,
  },
};
</script>

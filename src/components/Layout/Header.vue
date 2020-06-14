<template>
  <div class="header">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .header {
    height: $header__height;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding-top: $gutter / 2;
    padding-bottom: $gutter / 2;
  }
</style>

<!-- eslint-disable max-len -->
<template>
  <div :class="[
    'loader',
    {name: `loader--${ name }`},
  ]">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      :style="style"
      xml:space="preserve">
      <path
        fill="#000"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          :dur="speed"
          repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</template>
<!-- eslint-enable max-len -->

<script>
export default {
  name: 'Loading',

  props: {
    name: {
      type: String,
      default: null,
      required: false,
    },
    width: {
      type: Number,
      default: 100,
      required: false,
    },
    height: {
      type: Number,
      default: 100,
      required: false,
    },
    fill: {
      type: String,
      default: 'currentColor',
      required: false,
    },
    speed: {
      type: String,
      default: '0.6s',
      required: false,
    },
  },

  computed: {
    style() {
      return `enable-background: new 0 0 ${this.width + 10} ${this.height + 10}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/_stylebase.scss";

  .loader {
    height: 100px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;

    svg path {
      fill: $colors__primary;
    }
  }
</style>

<template lang="pug">
  #app
    HeaderTemplate
    GiftTemplate
    GoodsTemplate
    HelpTemplate

</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import GiftTemplate from './components/GiftTemplate.vue';
import GoodsTemplate from './components/GoodsTemplate.vue';
import HelpTemplate from './components/HelpTemplate.vue';

export default {
  name: 'app',
  components: {
    HeaderTemplate,
    GiftTemplate,
    GoodsTemplate,
    HelpTemplate,
  },
};
</script>

<style lang="scss">
  @import '../src/assets/scss/core.scss';
  #app {
    background: $bgColor;
  }
</style>

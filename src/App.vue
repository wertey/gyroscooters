<template lang="pug">
  #app
    HeaderTemplate
    GiftTemplate
    GoodsTemplate
    HelpTemplate
    FilialsTemplate

</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import GiftTemplate from './components/GiftTemplate.vue';
import GoodsTemplate from './components/GoodsTemplate.vue';
import HelpTemplate from './components/HelpTemplate.vue';
import FilialsTemplate from './components/FilialsTemplate.vue';

export default {
  name: 'app',
  components: {
    HeaderTemplate,
    GiftTemplate,
    GoodsTemplate,
    HelpTemplate,
    FilialsTemplate,
  },
};
</script>

<style lang="scss">
  @import '../src/assets/scss/core.scss';
  #app {
    background: $bgColor;
  }
</style>

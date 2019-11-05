<template>
  <div id="app">
    <HeaderTemplate/>
    <GiftTemplate/>
    <GoodsTemplate/>
  </div>
</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import GiftTemplate from './components/GiftTemplate.vue';
import GoodsTemplate from './components/GoodsTemplate.vue';

export default {
  name: 'app',
  components: {
    HeaderTemplate,
    GiftTemplate,
      GoodsTemplate,
  },
};
</script>

<style>

</style>

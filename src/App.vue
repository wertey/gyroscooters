<template>
  <div id="app">
    <HeaderTemplate/>
    <GiftTemplate/>
  </div>
</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import GiftTemplate from './components/GiftTemplate.vue';

export default {
  name: 'app',
  components: {
    HeaderTemplate,
    GiftTemplate,
  },
};
</script>

<style>

</style>

<template lang="pug">
  #app
    HeaderTemplate
    GiftTemplate
    GoodsTemplate
    HelpTemplate
    ReviewTemplate
    ScheduleTemplate
    FilialsTemplate
    FooterTemplate

</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import GiftTemplate from './components/GiftTemplate.vue';
import GoodsTemplate from './components/GoodsTemplate.vue';
import HelpTemplate from './components/HelpTemplate.vue';
import ReviewTemplate from './components/ReviewTemplate.vue';
import ScheduleTemplate from './components/ScheduleTemplate.vue';
import FilialsTemplate from './components/FilialsTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';

export default {
  name: 'app',
  components: {
    HeaderTemplate,
    GiftTemplate,
    GoodsTemplate,
    HelpTemplate,
    ReviewTemplate,
    ScheduleTemplate,
    FilialsTemplate,
    FooterTemplate,
  },
};
</script>

<style lang="scss">
  @import '../src/assets/scss/core.scss';
  #app {
    background: $bgColor;
  }
</style>

<template lang="pug">
  .lp-header
    .lp-contanier
      .lp-header-row

</template>

<script>
export default {
  name: 'NavigationTemplate',
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/core.scss';
  .lp-header {
    width: 100%;
    background: url(../assets/images/headerbg.jpg)no-repeat;
    background-size: 100%;
    min-height: 100vh;
    height: 700px;
    &-row {
      display: flex;
      justify-content: flex-start;
    }
  }
</style>

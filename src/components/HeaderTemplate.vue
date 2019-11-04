<template lang="pug">
  .lp-header
    .lp-container
      .lp-header-row
        .lp-header-row__logo wheely
        .lp-header-row__desc Магазин гироскутеров с доставкой по всей России
        nav.lp-header-row__nav
          ul.lp-header-row__nav-list
            li.lp-header-row__nav-item
              a.lp-header-row__nav-link(href="#") Каталог
            li.lp-header-row__nav-item
              a.lp-header-row__nav-link(href="#") Отзывы
            li.lp-header-row__nav-item
              a.lp-header-row__nav-link(href="#") Доставка и оплата
            li.lp-header-row__nav-item
              a.lp-header-row__nav-link(href="#") Контакты и филиалы
      h1.lp-header__title
        span.lp-header__title_bold Распродажа
        span.lp-header__title_light детских гироскутеров!
      h2.lp-header__desc До завершения распродажи осталось:
      flip-countdown(deadline="2019-12-25 00:00:00")
      .lp-header-main
        .lp-header-main-advantages
        form.lp-header-main-form
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';

export default {
  name: 'NavigationTemplate',
  components: {
    FlipCountdown,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/core.scss';
  .lp-header {
    width: 100%;
    background: url(../assets/images/headerbg.jpg)no-repeat;
    background-size: 100%;
    min-height: 100vh;
    padding-top: 65px;
    &__title {
      font-family: 'Open Sans',sans-serif;
      display: flex;
      justify-content: center;
      font-size: 46px;
      line-height: 60px;
      flex-direction: row;
      margin-top: 75px;
      color: $mainTitleColor;
      text-transform: uppercase;
      &_bold {
        font-weight: bold;
        font-family: 'Open Sans Bold',sans-serif;
      }
      &_light {
        font-weight: 400;
        margin-left: 10px;
        font-family: 'Open Sans Light',sans-serif;
      }
    }
    &__desc {
      margin-top: 30px;
      font-size: 20px;
      line-height: 23px;
      color: $mainTitleColor;
      font-family: 'Open Sans',sans-serif;
      display: flex;
      justify-content: center;
      font-weight: 400;
    }
    &-row {
      display: flex;
      justify-content: flex-start;
      color: $main-color;
      padding-bottom: 20px;
      border-bottom: 1px solid $borderHeaderColor;
      align-items: center;
      &__logo {
        text-transform: uppercase;
        font-size: 38px;
        font-family: 'CoreRhino85BlackW01-Rg',sans-serif;
      }
      &__desc {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 17px;
        color: $descriptionColor;
        max-width: 220px;
        padding: 0 0 0 30px;
        width: 100%;
      }
      &__nav {
        margin-left: auto;
        &-list {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        &-item {
          margin: 0 15px;
          &:last-child {
            margin-right: 0;
          }
          &:first-child {
            margin-left: 0;
          }
        }
        &-link {
          text-decoration: none;
          font-size: 18px;
          line-height: 20px;
          display: block;
          font-family: 'Open Sans',sans-serif;
          font-weight: bold;
          color: $main-color;
          transition: color .3s ease-in;
          &:hover {
            color: $hoverLinkColor;
          }
        }
      }
    }
    &-main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-advantages {
        width: 40%;
        border: 1px solid red;
        height: 400px;
      }
      &-form {
        width: 40%;
        border: 1px solid red;
        height: 400px;
      }
    }
  }
</style>

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
          .lp-header-main-advantages__item Бесплатная доставка в течении 3-х часов
          .lp-header-main-advantages__item Гарантия 1 год
        form.lp-header-main-form
          .lp-header-main-form__header
            .lp-header-main-form__header-title Заполните заявку!
            .lp-header-main-form__header-desc Менеджер свяжеться с Вами  в течении 3-х минут!
          .lp-header-main-form__content
            input(type="text" placeholder="Иванов Иван Иванович").lp-header-main-form__content-input
          .lp-header-main-form__content-row
            input(type="text" placeholder="+7").lp-header-main-form__content-input.lp-header-main-form__content-input_code
            input(type="text" placeholder="930").lp-header-main-form__content-input.lp-header-main-form__content-input_operator
            input(type="text" placeholder="1234567").lp-header-main-form__content-input.lp-header-main-form__content-input_number
          .lp-header-main-form__wrap
            button.lp-header-main-form__btn Перезвонить мне

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
        width: 33%;
        padding-top: 200px;
        &__item {
          position: relative;
          padding-left: 50px;
          color: $mainTitleColor;
          font-size: 24px;
          line-height: 24px;
          margin-bottom: 30px;
          text-transform: uppercase;
          font-family: 'Open Sans',sans-serif;
          font-weight: bold;
          &:before {
            position: absolute;
            content: '';
            width: 37px;
            height: 32px;
            background: url(../assets/images/checked.png)no-repeat;
            left: 0;
            top: -5px;
          }
        }
      }
      &-form {
        width: 40%;
        background: $formBackgroundColor;
        transform: skewY(-5deg);
        padding: 60px 20px;
        color: $secondColor;
        &__header-title, &__header-desc {
          text-align: center;
        }
        &__header {
          transform: skewY(5deg);
          &-title {
            font-size: 28px;
            line-height: 46px;
          }
          &-desc {
            font-size: 14px;
            line-height: 20px;
            max-width: 200px;
            margin: 0 auto;
          }
        }
        &__content {
          padding-top: 20px;
          transform: skewY(5deg);
          &-input {
            width: 100%;
            text-align: center;
            height: 60px;
            color: $inputPlaceholderColor;
            margin-bottom: 10px;
            font-size: 18px;
            &_code {
              width: 15%;
              margin-right: 10px;
            }
            &_operator {
              width: 40%;
            }
            &_number {
              width: 40%;
              margin-left: 10px;
            }
          }
          &-row {
            transform: skewY(5deg);
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
        }
      }
    }
  }
</style>

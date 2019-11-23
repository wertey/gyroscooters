<template lang="pug">
  .lp-header
    .lp-container
      .lp-header-row
        .lp-header-row__logo wheely
        .lp-header-row__desc Магазин гироскутеров с доставкой по всей России
        nav.lp-header-row__nav
          ul.lp-header-row__nav-list
            li.lp-header-row__nav-item(v-for="(item,index) in menu" :key="index")
              a.lp-header-row__nav-link(href="#" v-scroll-to="item.href") {{ item.text }}
        .lp-header-row__burger(@click="openCloseBurgerMenu()" ref="burger" :class="{'lp-header-row__burger_active' : modal}")
            .lp-header-row__burger-line.lp-header-row__burger-line_top(ref="top" :class="{'active' : modal,'top' : modal}")
            .lp-header-row__burger-line.lp-header-row__burger-line_center(ref="center" :class="{'active' : modal,'center' : modal}")
            .lp-header-row__burger-line.lp-header-row__burger-line_bottom(ref="bottom" :class="{'active' : modal,'bottom' : modal}")
      h1.lp-header__title
        span.lp-header__title_bold Распродажа
        span.lp-header__title_light детских гироскутеров!
      h2.lp-header__desc До завершения распродажи осталось:)
      FlipClock(:options="options")
      .lp-header-main
        .lp-header-main-advantagescountdown
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
          .lp-header-main-footer
            .lp-header-main-footer__info На складе осталось менее:
          .lp-header-main-amount
              img.lp-header-main-amount__img(src='../assets/images/goods.png')
              .lp-header-main-amount__text Моделей
    .lp-header-modal(v-if="modal" ref="modal")
        ul.lp-header-modal__nav-list
            li.lp-header-modal__nav-item(v-for="(item,index) in menu" :key="index")
                a.lp-header-modal__nav-link(:href="item.href" @click="closeMenu()") {{ item.text }}

</template>

<script>

    import { FlipClock } from '@mvpleung/flipclock';
export default {
  name: 'NavigationTemplate',
  components: {
      FlipClock
  },
    data() {
      return {
          menu: [
              {
                  text: 'Каталог',
                  href: '#catalog'
              },
              {
                  text: 'Отзывы',
                  href: '#review'
              },
              {
                  text: 'Доставка и оплата',
                  href: '#delivery'
              },
              {
                  text: 'Контакты и филиалы',
                  href: '#contacts'
              },
          ],
          modal: false,
          options: {
              digit: 3000000,
              countdown: true,
              showDays: true,
              language: 'ru',
              clockFace: 'DailyCounter',
              divider: false,
          }
      }
    },
    methods: {
        openCloseBurgerMenu() {
            const res = (this.modal === false) ? this.modal = true : this.modal = false;
            return res
        },
        closeMenu() {
            const modal = this.$refs.modal;
            const burger = this.$refs.burger;
            const top = this.$refs.top;
            const center = this.$refs.center;
            const bottom = this.$refs.bottom;
            modal.style.display = 'none';
            top.classList.remove('top','active');
            center.classList.remove('center','active');
            bottom.classList.remove('bottom','active');
            burger.style.position = 'absolute';

        },
    },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/core.scss';
  .lp-header {
    width: 100%;
    background: url(../assets/images/headerbg.jpg)no-repeat;
    background-size: cover;
    height: 100vh;
    min-height: 1100px;
    padding-top: 65px;
    background-position: center;
      @media screen and (max-width: 1099px) {
          padding: 65px 20px 0;
      }
      @media screen and (max-width: 767px) {
          background-position: right;
          min-height: 1280px;
      }
      @media screen and (max-width: 520px) {
          min-height: 1150px;
      }
      @media screen and (max-width:359px) {
          & {
              padding-top: 10px;
              padding-left: 10px;
              padding-right: 10px;
          }
      }
      &-modal {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: $modalBgColor;
          z-index: 10;
          &__nav {
              &-list {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
              }
              &-item {
                  padding: 20px;
                  text-align: center;
              }
              &-link {
                  color: $secondColor;
                  text-decoration: none;
                  font-size: 40px;
                  transition: all .4s ease-in;
                  &:hover {
                    color: $bgOfBtn;
                  }
              }
          }
      }
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
        @media screen and (max-width: 1000px) {
            & {
                text-align: center;
                display: block;
            }
        }
        @media screen and (max-width: 767px) {
            & {
                max-width: 500px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
            }
        }
        @media screen and (max-width: 767px) {
            & {
                font-size: 30px;
                line-height: 32px;
            }
        }
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
      margin-bottom: 15px;
      font-size: 20px;
      line-height: 23px;
      color: $mainTitleColor;
      font-family: 'Open Sans',sans-serif;
      display: flex;
      justify-content: center;
      font-weight: 400;
        @media screen and (max-width: 520px) {
            & {
                text-align: center;
            }
        }
    }
    &-row {
      display: flex;
      justify-content: flex-start;
      color: $main-color;
      padding-bottom: 20px;
      border-bottom: 1px solid $borderHeaderColor;
      align-items: center;
        @media screen and (max-width: 479px) {
            & {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &__burger {
            cursor: pointer;
            width: auto;
            margin: 0 auto;
            transition: all .7s ease;
            position: absolute;
            right: 20px;
            display: none;
            z-index: 11;
            &_active {
                position: fixed;
            }
            @media screen and (max-width: 1079px) {
                & {
                    display: inline-block;
                }
            }
            &-line {
                display: block;
                height: 5px;
                width: 50px;
                background: $main-color;
                margin: 10px auto;
                transition: all .7s ease;
            }
        }
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
          @media screen and (max-width: 479px) {
              & {
                  padding-left: 0;
              }
          }
      }
      &__nav {
        margin-left: auto;
          @media screen and (max-width: 1079px) {
              & {
                  display: none;
              }
          }
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
        @media screen and (max-width: 767px) {
            & {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
      &-advantages {
        width: 33%;
        padding-top: 200px;
          @media screen and (max-width: 1099px) {
              width: 45%;
          }
          @media screen and (max-width: 767px) {
              padding-top: 50px;
              width: 80%;
          }
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
        border-radius: 5px;
          @media screen and (max-width: 1099px) {
              min-width: 400px;
          }
          @media screen and (max-width: 1023px) {
              min-width: 350px;
          }
          @media screen and (max-width: 359px) {
              min-width: 300px;
          }
        &__header-title, &__header-desc {
          text-align: center;
        }
        &__wrap {
            transform: skewY(5deg);
        }
        &__btn {
            width: 100%;
            border-radius: 10px;
            color: $main-color;
            font-size: 23px;
            line-height: 56px;
            background: $bgOfBtn;
            font-family: 'Open Sans Bold',sans-serif;
            font-weight: 700;
            cursor: pointer;
            transition: all .3s ease-in;
            &:hover {
                background: $btnHover;
            }
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
            border-radius: 5px;
            border: none;
            outline: none;
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
      &-footer {
          transform: skewY(5deg);
          text-align: center;
          padding-top: 33px;
          padding-bottom: 30px;
          &__info {
              font-size: 22px;
              line-height: 23px;
              font-family: 'Open Sans',sans-serif;
          }
      }
      &-amount {
          transform: translateX(-50%)skewY(5deg);
          position: absolute;
          text-align: center;
          left: 50%;
          &__text {
              font-size: 12px;
              text-align: center;
              text-transform: uppercase;
              color: $mainTitleColor;
              font-family: 'Open Sans',sans-serif;
          }
      }
    }
  }

  .top {
      transform: translateY(15px) rotateZ(45deg);
  }

  .center {
      width: 0;
  }

  .bottom {
      transform: translateY(-15px) rotateZ(-45deg);
  }

  .active {
      background: $secondColor;
  }

</style>

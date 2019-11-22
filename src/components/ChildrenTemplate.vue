<template lang="pug">
    .lp-children
        .lp-container
            .lp-children-block
                h2.lp-children-block__title Оставьте отзыв с Вашими детьми
                h3.lp-children-block__desc
                    span.lp-children-block__desc.lp-children-block__desc_bold  и получите подарок!
                form(action="#" id="review").lp-form.lp-children-block-form
                    input(type="text").lp-form__input.lp-form__input_name.lp-children-block-form__input(placeholder="Ваше имя")
                    input(type="text").lp-form__input.lp-form__input_email.lp-children-block-form__input(placeholder="Ваш телефон")
                    button.lp-form__button.lp-children-block-form__button Отправить
</template>

<script>
    export default {
        name: "ChildrenTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-children {
        width: 100%;
        background: url(../assets/images/reviewbg.png)no-repeat;
        min-height: 350px;
        padding-top: 75px;
        background-size: cover;
        background-position: center;
        @media screen and (max-width: 1199px) {
            background: url(../assets/images/children-bg-mobile.png)no-repeat;
        }
        @media screen and (max-width: 700px) {
            padding-bottom: 50px;
        }
    &-block {
         max-width: 700px;
         display: flex;
         margin-right: auto;
         flex-direction: column;
        @media screen and (max-width: 1199px) {
            justify-content: center;
            margin: 0 auto;
        }
        @media screen and (max-width: 768px) {
            & {
                max-width: 640px;
            }
        }
        @media screen and (max-width: 700px) {
            & {
                max-width: 400px;
                text-align: center;
            }
        }
    &__title {
         font-size: 40px;
         line-height: 46px;
         color: $subtitlesColor;
         font-family: 'Open Sans',sans-serif;
         font-weight: 100;
        @media screen and (max-width: 700px) {
            & {
                font-size: 30px;
                line-height: 32px;
            }
        }
        @media screen and (max-width: 419px) {
            & {
                font-size: 20px;
                line-height: 22px;
            }
        }
     }
    &__desc {
         font-family: 'Open Sans Bold',sans-serif;
         font-size: 24px;
         line-height: 46px;
         color: $main-color;
         margin-bottom: 30px;
        font-weight: bold;
    &_bold {
         font-size: 34px;
         line-height: 46px;
         color: $mainTitleColor;
         padding-right: 10px;
         font-weight: bold;
        @media screen and (max-width: 419px) {
            & {
                font-size: 20px;
                line-height: 22px;
            }
        }
     }
    }
    &-text {
    &__info {
         font-family: 'Open Sans',sans-serif;
         font-size: 19px;
         line-height: 46px;
         color: $main-color;
    &_bold {
         font-size: 19px;
         line-height: 46px;
         color: $mainTitleColor;
         font-weight: bold;
         font-family: 'Open Sans Bold',sans-serif;
         padding-left: 10px;
     }
    }
    }
    &-form {
        @media screen and (max-width: 374px) {
            & {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    &__input {
         height: 48px;
        @media screen and (max-width: 419px) {
            & {
                min-width: auto;
            }
        }
        @media screen and (max-width: 374px) {
            & {
                min-width: 300px;
                margin-left: 0;

            }
            & + & {
                margin-top: 20px;
            }
        }
     }
    &__button {
         height: 48px;
        @media screen and (max-width: 700px) {
            & {
                margin-top: 30px;
            }
        }
        @media screen and (max-width: 374px) {
            & {
                margin-left: 0;
                margin-top: 10px;
            }
        }
     }
    }
    }
    }
</style>

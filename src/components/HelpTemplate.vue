<template lang="pug">
    .lp-help
        .lp-container
            .lp-help-block
                h2.lp-help-block__title Не нашли модель, которую искали?
                h3.lp-help-block__desc
                    span.lp-help-block__desc.lp-help-block__desc_bold 99%
                    span.lp-help-block__desc что эта модель есть у нас на складе!
                form(action="#").lp-form.lp-help-block-form
                    input(type="text").lp-form__input.lp-form__input_name.lp-help-block-form__input(placeholder="Ваше имя")
                    input(type="text").lp-form__input.lp-form__input_email.lp-help-block-form__input(placeholder="Ваш телефон")
                    button.lp-form__button.lp-help-block-form__button Отправить
                .lp-help-block-text
                    span.lp-help-block-text__info Оставьте номер своего телефона и мы узнаем наличие
                    span.lp-help-block-text__info.lp-help-block-text__info_bold за 60 секунд

</template>

<script>
    export default {
        name: "HelpTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-help {
        width: 100%;
        background: url(../assets/images/helpbg.jpg)no-repeat;
        min-height: 460px;
        padding-top: 75px;
        &-block {
            max-width: 700px;
            display: flex;
            margin-right: auto;
            flex-direction: column;
            &__title {
                font-size: 40px;
                line-height: 46px;
                color: $subtitlesColor;
                font-family: 'Open Sans',sans-serif;
                font-weight: 100;
                margin-bottom: 25px;
            }
            &__desc {
                font-family: 'Open Sans',sans-serif;
                font-size: 24px;
                line-height: 46px;
                color: $main-color;
                margin-bottom: 30px;
                &_bold {
                    font-size: 34px;
                    line-height: 46px;
                    color: $mainTitleColor;
                    padding-right: 10px;
                    font-weight: bold;
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
                &__input {
                    height: 48px;
                }
                &__button {
                    height: 48px;
                }
            }
        }
    }
</style>

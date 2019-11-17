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
        background-size: cover;
        background-position: center;
        @media screen and (max-width: 1199px) {
            background: url(../assets/images/children-bg-mobile.png)no-repeat;
            z-index: 10;
            margin-bottom: -116px;
            position: relative;
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
                margin-bottom: 25px;
                @media screen and (max-width: 1023px) {
                    & {
                        font-size: 35px;
                        line-height: 33px;
                        margin-bottom: 15px;
                    }
                }
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
                font-family: 'Open Sans',sans-serif;
                font-size: 24px;
                line-height: 46px;
                color: $main-color;
                margin-bottom: 30px;
                @media screen and (max-width: 1023px) {
                    & {
                        margin-bottom: 15px;
                        line-height: 30px;
                    }
                }
                @media screen and (max-width: 419px) {
                    & {
                        font-size: 20px;
                        line-height: 22px;
                    }
                }
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
                @media screen and (max-width: 700px) {
                    & {
                        display: none;
                    }
                }
                &__info {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 19px;
                    line-height: 46px;
                    color: $main-color;
                    @media screen and (max-width: 1023px) {
                        & {
                            font-size: 18px;
                        }
                    }
                    &_bold {
                        font-size: 19px;
                        line-height: 46px;
                        color: $mainTitleColor;
                        font-weight: bold;
                        font-family: 'Open Sans Bold',sans-serif;
                        padding-left: 10px;
                        @media screen and (max-width: 1023px) {
                            & {
                                font-size: 18px;
                            }
                        }
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

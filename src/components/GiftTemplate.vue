<template lang="pug">
    .lp-gift
        .lp-container
            .lp-gift-row
                .lp-gift-row-img
                    .lp-gift-row-img__title Подарок
                    .lp-gift-row-img__gift
                        img(src="../assets/images/glasses.png")
                    .lp-gift-row-img__desc Очки виртуальной реальности
                    .lp-gift-row-img__price 9 870р.
                .lp-gift-row-info
                    h2.lp-gift-row-info__title Оформите заказ до конца распродажи и получите
                        span.lp-gift-row-info__title_uppercase подарок!
                    .lp-gift-row-info__advantages
                        .lp-gift-row-info__advantages-item Сюрприз  для ребенка
                        .lp-gift-row-info__advantages-item Просты в использовании
                        .lp-gift-row-info__advantages-item Совместимы со всеми устройствами
                        .lp-gift-row-info__advantages-item Работают без проводов
                    form(action="#").lp-form.lp-gift-form
                        input(type="text").lp-form__input.lp-form__input_name.lp-gift-form__input(placeholder="Ваше имя")
                        input(type="text").lp-form__input.lp-form__input_email.lp-gift-form__input(placeholder="Ваш телефон")
                        button.lp-form__button.lp-gift-form__button Отправить
</template>

<script>
    export default {
        name: "GiftTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-gift {
        padding-top: 40px;
        padding-bottom: 80px;
        margin-top: -10px;
        width: 100%;
        background: url(../assets/images/giftbg.jpg)no-repeat;
        background-size: cover;
        @media screen and (max-width: 1023px) {
            & {
                padding-bottom: 180px;
            }
        }
        &-form {
            display: flex;
            justify-content: center;
            flex-direction: row;
            @media screen and (max-width: 767px) {
                & {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin: 0 auto;
                }
            }
            &__input {
                @media screen and (max-width: 767px) {
                    & {
                        width: 100%;
                    }
                    & + & {
                        margin-top: 20px;
                        margin-bottom: 20px;
                        margin-left: 0;
                    }
                }
            }
            &__button {
                @media screen and (max-width: 767px) {
                    & {
                        margin-left: 0;
                    }
                }
            }
        }
        &-row {
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            @media screen and (max-width: 1199px) {
                & {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
            &-img {
                width: 30%;
                color: $secondColor;
                padding: 0 10px;
                @media screen and (max-width: 767px) {
                    & {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }
                }
                &__title {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: bold;
                    font-size: 50px;
                    line-height: 50px;
                    text-transform: uppercase;
                    background: url(../assets/images/formgiftbg.png)no-repeat;
                    @media screen and (max-width: 767px) {
                        & {
                            background: none;
                        }
                    }
                }
                &__gift {
                    max-height: 180px;
                    @media screen and (max-width: 767px) {
                        & {
                            display: block;
                            margin: 0 auto;
                            max-height: 100%;
                        }
                    }
                    & img {
                        position: relative;
                        left: -100px;
                        top: -98px;
                        @media screen and (max-width: 767px) {
                            & {
                                left: 0;
                                top: 0;
                            }
                        }
                        @media screen and (max-width:520px) {
                            & {
                                max-width: 100%;
                                height: auto;
                            }
                        }
                    }
                }
                &__desc {
                    font-size: 18px;
                    line-height: 21px;
                    text-transform: uppercase;
                    font-family: 'Open Sans',sans-serif;
                    @media screen and (max-width:374px) {
                        & {
                            text-align: center;
                        }
                    }
                }
                &__price {
                    font-family: 'Open Sans Bold',sans-serif;
                    font-weight: bold;
                    font-size: 46px;
                    position: relative;
                    &:after {
                        width: 153px;
                        height: 5px;
                        background: $submitBgColor;
                        position: absolute;
                        left: -17px;
                        top: 22px;
                        border-radius: 2px;
                        content: '';
                        transform: rotate(-9deg);
                    }
                }
            }
            &-info {
                width: 70%;
                padding: 0 10px;
                color: $secondColor;
                &__title {
                    font-size: 40px;
                    line-height: 46px;
                    font-family: "Open Sans",sans-serif;
                    font-weight: 100;
                    @media screen and (max-width: 1023px) {
                        & {
                            text-align: center;
                            font-size: 36px;
                            line-height: 38px;
                            margin: 20px 0;
                        }
                    }
                    @media screen and (max-width: 767px) {
                        & {
                            font-size: 26px;
                            line-height: 30px;
                            margin-top: 20px;
                        }
                    }
                    @media screen and (max-width: 520px) {
                        & {
                            font-size: 22px;
                            line-height: 26px;
                        }
                    }
                    &_uppercase {
                        text-transform: uppercase;
                        font-family: "Open Sans Bold",sans-serif;
                        font-weight: bold;
                        margin-left: 5px;
                    }
                }
                &__advantages {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding-top: 15px;
                    @media screen and (max-width: 1023px) {
                        & {
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                    &-item {
                        background: url(../assets/images/advantagesbg.png)no-repeat;
                        max-width: 170px;
                        padding: 60px 12px 20px;
                        min-height: 170px;
                        text-align: center;
                        background-position-x: center;
                        position: relative;
                        font-size: 16px;
                        text-transform: uppercase;
                        font-family: 'Open Sans',sans-serif;
                        &:after {
                            position: absolute;
                            content: '';
                            background: url(../assets/images/checked.png)no-repeat;
                            width: 40px;
                            height: 40px;
                            top: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        & + & {
                            margin-left: 50px;
                            @media screen and (max-width: 1023px) {
                                & {
                                    margin-left: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

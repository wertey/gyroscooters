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
                    form(action="#").lp-form
                        input(type="text").lp-form__input.lp-form__input_name(placeholder="Ваше имя")
                        input(type="text").lp-form__input.lp-form__input_email(placeholder="Ваш телефон")
                        button.lp-form__button Отправить
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
        &-row {
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            &-img {
                width: 30%;
                color: $secondColor;
                padding: 0 10px;
                &__title {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: bold;
                    font-size: 50px;
                    line-height: 50px;
                    text-transform: uppercase;
                    background: url(../assets/images/formgiftbg.png)no-repeat;
                }
                &__gift {
                    max-height: 180px;
                    & img {
                        position: relative;
                        left: -100px;
                        top: -98px;
                    }
                }
                &__desc {
                    font-size: 18px;
                    line-height: 21px;
                    text-transform: uppercase;
                    font-family: 'Open Sans',sans-serif;
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
                        }
                    }
                }
            }
        }
    }
</style>

<template lang="pug">
    .lp-different
        .lp-container
            h2.lp-different__title Отличия наших гироскутеров от гироскутеров в других магазинов
            .lp-different-row
                .lp-different-row__item.lp-different-row__item_left
                    .lp-different-row__item-block
                        .lp-different-row__item-icon
                            img(src="../assets/images/icon1.png")
                        .lp-different-row__item-title Универсальность
                        .lp-different-row__item-text  Наши гироскутеры универсальны и подходят как детям так и взрослым
                    .lp-different-row__item-block.lp-different-row__item-block_down
                        .lp-different-row__item-icon
                            img(src="../assets/images/icon2.png")
                        .lp-different-row__item-title Батарея Samsung и LG
                        .lp-different-row__item-text  Заряд наших гироскутеров будет в несколько раз превышать батареи китайских аналогов
                .lp-different-row__item.lp-different-row__item_center
                .lp-different-row__item.lp-different-row__item_right
                    .lp-different-row__item-block
                        .lp-different-row__item-icon
                            img(src="../assets/images/icon3.png")
                        .lp-different-row__item-title Качество
                        .lp-different-row__item-text Все наши гироскутеры сертифицированы и проходят тестирование перез отправкой
                    .lp-different-row__item-block.lp-different-row__item-block_down
                        .lp-different-row__item-icon
                            img(src="../assets/images/icon4.png")
                        .lp-different-row__item-title Практичность
                        .lp-different-row__item-text Качественная пластмасса позволяет нашим гироскутерам выдерживать большой вес
            .lp-different__info Модели наших гироскутеров будут взрослеть вместе с Вашим ребенком
</template>

<script>
    export default {
        name: "DifferentTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-different {
        width: 100%;
        background: url(../assets/images/differentbg.jpg)no-repeat;
        padding-top: 80px;
        padding-bottom: 60px;
        background-size: cover;
        min-height: 880px;
        height: auto;
        color: $secondColor;
        &__title {
            font-family: 'Open Sans',sans-serif;
            font-size: 40px;
            line-height: 46px;
            font-weight: 100;
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
        }
        &__info {
            color: $differentColorText;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            font-family: 'Open Sans',sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding-top: 60px;
        }
        &-row {
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            &__item {
                &-block {
                    text-align: center;
                    padding: 40px 0 117px;
                    &_down {
                        padding-bottom: 0px;
                    }
                }
                &-title {
                    font-family: 'Open Sans Bold',sans-serif;
                    font-weight: bold;
                    color: $differentColorText;
                    font-size: 20px;
                    line-height: 24px;
                }
                &-text {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    color: $diffrenetColorInfo;
                }
                &_center {
                    background: url(../assets/images/difitem.png)no-repeat;
                    height: auto;
                    min-height: 479px;
                    width: 50%;
                }
                &_left {
                    width: 25%;
                }
                &_right {
                    width: 25%;
                }

            }
        }
    }
</style>

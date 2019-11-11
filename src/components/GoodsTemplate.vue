<template lang="pug">
    .lp-goods
        .lp-container
            h2.lp__title lp-goods__title Каталог детских гироскутеров
            .lp-goods-row
                .lp-goods-row__item
                    agile.lp-goods-row__item-slider(ref="main" :options="options1" :as-nav-for="asNavFor1")
                        .lp-goods-row__item-slide(v-for="(slide, index) in slides", :key="index", :class="`slide--${index}`")
                            img.lp-goods-row__item-img(:src="slide.src")
                    agile.lp-goods-row__item-thumbnails(ref="thumbnails" :options="options2" :as-nav-for="asNavFor2")
                        .lp-goods-row__item-slide.lp-goods-row__item-slide--thumbniail(v-for="(slide, index) in slides", :key="index", :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)")
                            img(:src="slide.src")
                        template(slot="prevButton")
                            i.fas.fa-chevron-left
                        template(slot="nextButton")
                            i.fas.fa-chevron-right
            .lp-goods-top
                h2.lp-goods-top__title Хит Продаж
                h3.lp-goods-top__desc Smart Wheel SUV ULTRA
                .lp-goods-top-row
                    .lp-goods-top-row__item.lp-goods-top-row__item_left
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_bag Сумка в подарок
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_strong Ударостойкий корпус
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_battary Батарея Samsung
                    .lp-goods-top-row__item.lp-goods-top-row__item_img
                        img(src="../assets/images/topitem.png")
                        .lp-goods-top-price
                            .lp-goods-top-price__nums.lp-goods-top-price__nums_first 100 000
                            .lp-goods-top-price__nums.lp-goods-top-price__nums_second 80 000
                            .lp-goods-top-price__nums.lp-goods-top-price__nums_final 29 990 р.
                            .lp-goods-top-price__button заказать
                    .lp-goods-top-row__item.lp-goods-top-row__item_right
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_year Бестселлер 2015
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_vers Гироскоп Ver 3.0
                        .lp-goods-top-row__item-text.lp-goods-top-row__item-text_last Последняя версия материнской платы
                h3.lp-goods-top__flip До завершения распродажи осталось:
                FlipCountdown.lp-goods-top__countdown(deadline="2019-12-25 00:00:00")
</template>

<script>

import VueAgile from 'vue-agile';
import FlipCountdown from 'vue2-flip-countdown';

    export default {
        name: "GoodsTemplate",
        components: {
            VueAgile,
            FlipCountdown,
        },
        data () {
            return {
                asNavFor1: [],
                asNavFor2: [],
                options1: {
                    dots: false,
                    fade: true,
                    navButtons: false
                },

                options2: {
                    autoplay: true,
                    centerMode: true,
                    dots: false,
                    navButtons: false,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 5
                            }
                        },

                        {
                            breakpoint: 1000,
                            settings: {
                                navButtons: true
                            }
                        }
                    ]

                },

                slides: [
                    {
                        src: require('../assets/images/item1.jpg'),
                    },
                    {
                        src: require('../assets/images/11.jpg'),
                    },
                    {
                        src: require('../assets/images/12.jpg'),
                    },
                    {
                        src: require('../assets/images/14.jpg'),
                    },
                    {
                        src: require('../assets/images/15.jpg'),
                    },
                ]
            }
        },
        mounted () {
            this.asNavFor1.push(this.$refs.thumbnails)
            this.asNavFor2.push(this.$refs.main)
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';


    .lp-goods {
        width: 100%;
        padding-bottom: 85px;
        &__title {
            padding-top: 90px;
        }
        &-row {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding-top: 60px;
            &__item {
                border: 1px solid red;
                width: 33%;
                height: 600px;
                &-slide {
                    &--thumbniail {
                        img {
                            width: 62px;
                            height: auto;
                        }
                    }
                }
                &-img {
                    max-width: 300px;
                    height: auto;
                    object-fit: cover;
                }
                & + & {
                    margin-left: 10px;
                }
            }
        }
        &-top {
            width: 100%;
            padding-top: 70px;
            text-align: center;
            &-price {
                position: absolute;
                right: 0;
                bottom: 8px;
                &__nums {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 18px;
                    line-height: 10px;
                    color: $mainTitleColor;
                    position: relative;
                    &:after {
                        position: absolute;
                        content: '';
                        background: $mainTitleColor;
                        height: 2px;
                    }
                    &_first {
                        &:after {
                            width: 80px;
                            left: 55px;
                            top: 4px;
                        }
                    }
                    &_second {
                        margin-top: 10px;
                        font-size: 28px;
                        line-height: 10px;
                        &:after {
                            width: 100px;
                            left: 42px;
                            top: 5px;
                        }
                    }
                    &_final {
                        padding-top: 10px;
                        color: $priceColor;
                        font-size: 44px;
                        line-height: 44px;
                        font-weight: bold;
                        &:after {
                            display: none;
                        }
                    }
                }
                &__button {
                    background: $submitBgColor;
                    color: $secondColor;
                    padding: 0 20px 0 40px;
                    height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 24px;
                    line-height: 60px;
                    position: relative;
                    border-radius: 30px;
                    margin-top: 15px;
                    &:before {
                        position: absolute;
                        content: '';
                        background: url(../assets/images/cart.png)no-repeat;
                        width: 25px;
                        height: 19px;
                        left: 21px;
                    }
                }
            }
            &__title {
                font-family: 'Open Sans Bold', sans-serif;
                font-size: 60px;
                line-height: 50px;
                color: $mainTitleColor;
                text-transform: uppercase;
                font-weight: bold;
                text-align: center;
            }
            &__flip {
                margin-top: 25px;
                margin-bottom: 15px;
                font-size: 20px;
                line-height: 23px;
                color: $mainTitleColor;
                font-family: 'Open Sans',sans-serif;
                display: flex;
                justify-content: center;
                font-weight: 400;
            }
            &__desc {
                font-family: 'Open Sans', sans-serif;
                font-size: 24px;
                line-height: 50px;
                color: $main-color;
            }
            &-row {
                width: 100%;
                background: url(../assets/images/topbg.jpg)no-repeat;
                background-position: center center;
                display: flex;
                justify-content: center;
                flex-direction: row;
                min-height: 440px;
                &__item {
                    &_img {
                        padding-top: 100px;
                        width: 60%;
                        position: relative;
                        img {
                            max-width: 470px;
                            height: auto;
                            position: relative;
                            left: 71px;
                        }
                    }
                    &_left {
                        position: relative;
                        left: 50px;
                    }
                    &_right {
                        padding-left: 110px;
                    }
                    &-text {
                        font-family: 'Open Sans',sans-serif;
                        font-weight: 700;
                        color: $mainTitleColor;
                        display: flex;
                        align-items: center;
                        min-height: 141px;
                        max-width: 150px;
                        text-align: end;
                        &_bag {
                            padding-top: 5px;
                        }
                        &_strong {
                            padding-top: 10px;
                        }

                        &_battary {
                            padding-top: 6px;
                        }
                        &_year {
                            padding-top: 10px;
                        }
                        &_vers {
                            padding-top: 13px;
                        }
                        &_last {
                            padding-top: 10px;
                            max-width: 200px;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>

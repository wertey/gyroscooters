<template lang="pug">
    .lp-goods
        .lp-container
            h2.lp__title.lp-goods__title Каталог детских гироскутеров
            .lp-goods-row
                .lp-goods-row__wrap(v-for="(slide,index) in slides" :key="index")
                    .lp-goods-row__item
                        .lp-goods-row__item-hit(v-if="slide.hit") ХИТ
                        .lp-goods-row__item-sale(v-if="slide.discount") -{{ slide.discount }}%
                        h4.lp-goods-row__item-title {{ slide.title }}
                        agile.main.lp-goods-row__item-slider(ref="main" :options="options1" :as-nav-for="asNavFor1")
                            .lp-goods-row__item-slide(v-for="(slide, index) in slides", :key="index", :class="`slide--${index}`")
                                img.lp-goods-row__item-img(:src="slide.src")
                        agile.thumbnails.lp-goods-row__item-thumbnails(ref="thumbnails" :options="options2" :as-nav-for="asNavFor2")
                            .lp-goods-row__item-slide.lp-goods-row__item-slide--thumbniail(v-for="(slide, index) in slides", :key="index", :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)")
                                img(:src="slide.src")
                            template(slot="prevButton")
                                i.fas.fa-chevron-left
                            template(slot="nextButton")
                                i.fas.fa-chevron-right
                        .lp-goods-row__item-checkbox
                            label.radio(v-for="(color,index) in slide.colors" :key="index")
                                input(type="radio" name="radio")
                                span.check(:style="{'background': color.color}")
                        .lp-goods-row__item-price {{ slide.price }} р.
                        .lp-goods-row__item-button заказать
                        .lp-goods-row__item-amount
                            span На складе осталось:
                            span {{ slide.amount }} шт
                        .lp-goods-row__advantages
                            .lp-goods-row__advantages-item(v-for="(item,index) in slide.advantages" :key="index")
                                img(:src="item.src")
                                .lp-goods-row__advantages-title {{ item.title }}
                                .lp-goods-row__advantages-info {{ item.parametrs }}

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
                        title: 'Smart Wheel SUV',
                        price: '39 800',
                        hit: true,
                        amount: '8',
                        colors: [
                            {
                                color: 'green'
                            },
                            {
                                color: 'blue'
                            },
                            {
                                color: 'orange'
                            },
                            {
                                color: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
                            },
                            {
                                color: 'black'
                            },
                        ],
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
                    },
                    {
                        src: require('../assets/images/item1.jpg'),
                        title: 'Smart Wheel SUV ULTRA',
                        price: '44 900',
                        discount: '8',
                        hit: true,
                        amount: '8',
                        colors: [
                            {
                                color: 'black'
                            },
                            {
                                color: 'yellow'
                            },
                        ],
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
                    },
                    {
                        src: require('../assets/images/11.jpg'),
                        title: 'Smart Balance Transformers LED',
                        price: '37 500',
                        discount: '9',
                        amount: '8',
                        colors: [
                            {
                                color: 'red'
                            },
                            {
                                color: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
                            },
                            {
                                color: 'green'
                            },
                            {
                                color: 'blue'
                            },
                            {
                                color: 'black'
                            },
                        ],
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
                    },
                    {
                        src: require('../assets/images/12.jpg'),
                        title: 'Smart Balance Transformers',
                        price: '35 600',
                        amount: '8',
                        colors: [
                            {
                                color: 'red'
                            },
                            {
                                color: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,56,1) 35%, rgba(0,212,255,1) 100%)'
                            },
                            {
                                color: 'orange'
                            },
                            {
                                color: 'blue'
                            },
                            {
                                color: 'black'
                            },
                        ],
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
                    },
                    {
                        src: require('../assets/images/14.jpg'),
                        title: 'Smart Balance Wheel Bluetooth',
                        price: '29 990',
                        discount: '11',
                        amount: '8',
                        colors: [
                            {
                                color: 'blue'
                            },
                            {
                                color: 'red'
                            },
                            {
                                color: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,56,1) 35%, rgba(0,212,255,1) 100%)'
                            },
                            {
                                color: 'yellow'
                            },
                            {
                                color: 'black'
                            },
                        ],
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
                    },
                    {
                        src: require('../assets/images/15.jpg'),
                        title: 'Smart Balance Wheel',
                        discount: '19',
                        amount: '8',
                        colors: [
                            {
                                color: 'black'
                            },
                            {
                                color: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
                            },
                            {
                                color: 'red'
                            },
                            {
                                color: 'green'
                            }
                        ],
                        price: '27 680',
                        advantages: [
                            {
                                src: require('../assets/images/advantage1.png'),
                                title: 'запас хода',
                                parametrs: '20 км'
                            },
                            {
                                src: require('../assets/images/advantage2.png'),
                                title: 'колеса',
                                parametrs: '25 см'
                            },
                            {
                                src: require('../assets/images/advantage3.png'),
                                title: 'скорость',
                                parametrs: '15 км/ч'
                            },
                            {
                                src: require('../assets/images/advantage4.png'),
                                title: 'вес',
                                parametrs: '13.5 кг'
                            },
                        ]
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
            justify-content: center;
            padding-top: 60px;
            flex-wrap: wrap;
            &__advantages {
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-top: 30px;
                &-title {
                    margin-top: 20px;
                    font-size: 10px;
                    text-transform: uppercase;
                    color: $inputPlaceholderColor;
                    font-family: 'Open Sans Bold',sans-serif;
                }
                &-item {
                    padding: 15px;
                }
                &-info {
                    margin-top: 10px;
                    font-size: 14px;
                    line-height: 20px;
                    color: $inputPlaceholderColor;
                    font-family: 'Open Sans Bold',sans-serif;
                    font-weight: bold;
                }
                img {
                    min-height: 39px;
                }
            }
            &__wrap {
                width: 33%;
                margin-bottom: 20px;
            }
            &__item {
                max-width: 340px;
                background: url(../assets/images/itembg.png)no-repeat;
                background-position: top;
                background-color: $secondColor;
                padding-top: 20px;
                text-align: center;
                padding-bottom: 40px;
                position: relative;
                &-hit {
                    background: url(../assets/images/hit.png)no-repeat;
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    z-index: 10;
                    left: 7px;
                    top: 52px;
                    color: $colorOfHit;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Open Sans Bold',sans-serif;
                    font-weight: bold;
                    font-size: 17px;
                }
                &-sale {
                    background: $submitBgColor;
                    width: 67px;
                    height: 67px;
                    position: absolute;
                    right: 7px;
                    top: 52px;
                    z-index: 10;
                    color: $secondColor;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Open Sans',sans-serif;
                    font-size: 20px;
                }
                &-amount {
                    position: relative;
                    font-size: 15px;
                    line-height: 46px;
                    color: $main-color;
                    &:after {
                        position: absolute;
                        content: '';
                        width: 100px;
                        height: 2px;
                        background: $itemBgColor;
                        bottom: -20px;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        font-weight: bold;
                    }
                    span {
                        font-size: 15px;
                        color: $main-color;
                        font-family: 'Open Sans',sans-serif;

                        &:last-child {
                            font-weight: bold;
                            margin-left: 5px;
                            font-family: 'Open Sans Bold',sans-serif;
                        }
                    }
                }
                &-price {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 28px;
                    line-height: 46px;
                    color: $priceColor;
                }
                &-checkbox {
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &-button {
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
                    transition: all .3s ease-in;
                    cursor: pointer;
                    max-width: 200px;
                    margin: 15px auto 0;
                    &:hover {
                        background: $SubmitHoverBg;
                    }
                    &:before {
                        position: absolute;
                        content: '';
                        background: url(../assets/images/cart.png)no-repeat;
                        width: 25px;
                        height: 19px;
                        left: 21px;
                    }
                }
                &-title {
                    font-size: 18px;
                    line-height: 46px;
                    color: $main-color;
                    font-family: 'Open Sans',sans-serif;
                }
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
                    margin: 0 auto;
                    display: flex;
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
                    transition: all .3s ease-in;
                    cursor: pointer;
                    &:hover {
                        background: $SubmitHoverBg;
                    }
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
                background: url(../assets/images/bggood.png)no-repeat;
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

    .agile__list {
        text-align: center;
    }

    .lp-goods-row__item-slide {
        max-width: 340px!important;
    }

    .radio {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .radio .check {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }

    .radio input:checked ~ .check {
        background-color: white;
        border: 1px solid gray;
    }

    .radio .check:after {
        content: "";
        position: absolute;
        display: none;
    }

    .radio input:checked ~ .check:after {
        display: block;

    }

    .radio .check:after {
        top: 4px;
        left: 4px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

</style>

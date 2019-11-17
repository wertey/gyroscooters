<template lang="pug">
    .lp-duty
        .lp-container
            h2.lp-duty__title Как мы работаем
            .lp-duty-row
                .lp-duty-row__item(v-for="(item,index) in steps" :key="index")
                    .lp-duty-row__item-img
                        img(:src="item.img")
                    .lp-duty-row__item-step(:class="{'lp-duty-row__item-step_active': item.active === true}") {{ item.step }}
                    .lp-duty-row__item-text(:class="{'lp-duty-row__item-text_active': item.active === true}") {{ item.text }}
            .lp-duty-call
                .lp-duty-call__arrow
                    img(src="../assets/images/arrow.png")
                .lp-duty-call-button
                    button.lp-duty-call-button__btn Перевозвонить мне
</template>

<script>
    export default {
        name: "ScheduleTemplate",
        data() {
            return {
                steps: [
                    {
                        img: require('../assets/images/order.png'),
                        step: 'ШАГ 1',
                        text: 'Оставьте заявку на товар или консультацию',
                        active: false,
                    },
                    {
                        img: require('../assets/images/call.png'),
                        step: 'ШАГ 2',
                        text: 'В течении 3-х минут с Вами свяжется наш менеджер для согласования заказа',
                        active: false,
                    },
                    {
                        img: require('../assets/images/delivery.png'),
                        step: 'ШАГ 3',
                        text: 'Вежливый курьер доставит посылку в срок, учитывая все предпочтения',
                        active: false,
                    },
                    {
                        img: require('../assets/images/smile.png'),
                        step: 'ШАГ 4',
                        text: 'Вы получаете кучу положительных эмоций от покупки, а также гарантию в 1 год',
                        active: true,
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-duty {
        width: 100%;
        background: url(../assets/images/stepsbg.png)no-repeat;
        /*min-height: 724px;*/
        min-height: 895px;
        padding-top: 100px;
        padding-bottom: 60px;
        background-size: cover;
        &-call {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding-bottom: 60px;
            @media screen and (max-width: 767px) {
                & {
                    justify-content: center;
                }
            }
            @media screen and (max-width: 767px) {
                & {
                    padding-bottom: 90px;
                }
            }
            &__arrow {
                padding-top: 20px;
                padding-left: 126px;
                @media screen and (max-width: 767px) {
                    & {
                        display: none;
                    }
                }
            }
            &-button {
                text-align: center;
                align-items: center;
                display: flex;
                padding-top: 62px;
                padding-left: 28px;
                @media screen and (max-width: 767px) {
                    & {
                        padding-left: 0;
                        padding-top: 30px;
                    }
                }
                &__btn {
                    height: 50px;
                    padding: 0 30px;
                    color: $secondColor;
                    text-transform: uppercase;
                    font-size: 16px;
                    font-family: 'Open Sans',sans-serif;
                    border-radius: 30px;
                    background: $submitBgColor;
                    transition: all .3s ease-in;
                    cursor: pointer;
                    &:hover {
                        background: $SubmitHoverBg;
                    }
                }
            }
        }
        &__title {
            text-align: center;
            font-size: 40px;
            line-height: 46px;
            color: $secondColor;
            @media screen and (max-width: 519px) {
                & {
                    margin-top: 30px;
                    font-size: 26px;
                }
            }
        }
        &-row {
            display: flex;
            justify-content: center;
            flex-direction: row;
            padding-top: 75px;
            font-family: 'Open Sans',sans-serif;
            @media screen and (max-width: 767px) {
                & {
                    flex-wrap: wrap;
                }
            }
            @media screen and (max-width: 519px) {
                & {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 30px;
                }
            }
            &__item {
                position: relative;
                width: 25%;
                text-align: center;
                @media screen and (max-width: 767px) {
                    & {
                        width: 40%;
                        padding: 10px;
                    }
                }
                @media screen and (max-width: 519px) {
                    & {
                        width: 80%;
                        padding: 10px;
                    }
                }
                &:after {
                    position: absolute;
                    content: '';
                    width: 69px;
                    height: 9px;
                    right: -34px;
                    top: 59px;
                    background: url(../assets/images/circles.png)no-repeat;
                    @media screen and (max-width: 1023px) {
                        & {
                            display: none;
                        }
                    }
                }
                &:last-child:after {
                    display: none;
                }
                &-step {
                    text-transform: uppercase;
                    color: $colorOfSteps;
                    font-size: 18px;
                    line-height: 24px;
                    padding-top: 10px;
                    &_active {
                        color: $colorOfActiveSteps;
                    }
                }
                &-img {
                    min-height: 106px;
                }
                &-text {
                    color: $textOfSteps;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    padding-top: 20px;
                    &_active {
                        color: $colorOfActiveSteps;
                    }
                }
            }
        }
    }
</style>

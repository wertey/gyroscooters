<template lang="pug">
    .lp-filials
        .lp-container
            h2.lp-filials__title
                span.lp-filials__title-text Наши филиалы
                span.lp-filials__title-text_bold в 12 городах
                span.lp-filials__title-text России!
            .lp-filials-row
                .lp-filials-row__item(v-for="(item,index) in cities" :key="index")
                    .lp-filials-row__item-city {{ item.city }}
                    .lp-filials-row__item-adress {{ item.adress }}
</template>

<script>
    export default {
        name: "FilialsTemplate",
        data() {
            return {
                cities: [
                    {
                        city: 'г. Москва',
                        adress: 'т. 8 (495) 266 09 85 Софийская набережная 30, стр. 6,',
                    },
                    {
                        city: 'г. Санк-Петербург ',
                        adress: 'т. 8 (812) 409 95 05 Лабораторный проспект, 3',
                    },
                    {
                        city: 'г. Владивосток',
                        adress: 'т. 8 (423) 249 28 41 Светланская улица, 109',
                    },
                    {
                        city: 'г. Ростов на Дону',
                        adress: 'т. 8 (863) 303 34 02 Халтуринский переулок, 2',
                    },
                    {
                        city: 'г. Екатеринбург',
                        adress: ' т. 8 (495) 357 91 99 Улица Чипаева, 14, кор. 1',
                    },
                    {
                        city: 'г. Краснодар',
                        adress: ' т. 8 (861) 204 11 30 Красная улица, 160',
                    },
                    {
                        city: 'г. Сочи',
                        adress: ' т. 8 (862) 225 70 20 Улица Гагарина, 54',
                    },
                    {
                        city: 'г. Самара',
                        adress: 'т. 8 (846) 215 02 05 Московское шоссе, 274',
                    },
                    {
                        city: 'г. Новосибирск',
                        adress: 'т. 8 (383) 209 90 31 Улица Фрунзе, 88',
                    },
                    {
                        city: 'г. Рязань',
                        adress: 'т. 8 (491) 227 68 09 Улица Гагарина, 76',
                    },
                    {
                        city: 'г. Белгород',
                        adress: 'т. 8 (472) 277 71 25 Улица 50-летия Белгородской об',
                    },
                    {
                        city: 'г. Казань',
                        adress: 'т. 8 (843) 207 02 90 Улица Баумана, 76',
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-filials {
        padding-top: 30px;
        padding-bottom: 55px;
        &__title {
            font-family: 'Open Sans',sans-serif;
            font-size: 40px;
            line-height: 46px;
            color: $mainTitleColor;
            text-align: center;
            @media screen and (max-width: 767px) {
                font-size: 20px;
                line-height: 26px;
            }
            &-text {
                &_bold {
                    padding: 0 10px;
                    font-weight: bold;
                }
            }
        }
        &-row {
            padding-top: 50px;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
            &__item {
                width: 25%;
                padding: 0 50px;
                margin-bottom: 20px;
                position: relative;
                @media screen and (max-width: 1023px) {
                    width: 50%;
                }
                @media screen and (max-width: 767px) {
                    width: 100%;
                }
                &:before {
                    position: absolute;
                    content: '';
                    background: url(../assets/images/marker.jpg);
                    width: 18px;
                    height: 25px;
                    left: 17px;
                    top: 2px;
                }
                &-city {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 16px;
                    font-weight: bold;
                    color: $main-color;
                    margin-bottom: 20px;
                }
                &-adress {
                    font-family: 'Open Sans',sans-serif;
                    font-size: 14px;
                    color: $inputPlaceholderColor;
                    line-height: 20px;
                }
            }
        }
    }
</style>

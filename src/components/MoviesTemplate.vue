<template lang="pug">
    .lp-movie
        .lp-container
            .lp-movie__title Отзывы детей и родителей
            .lp-movie-row
                .lp-movie-row__item
                    a(href="#")
                        img(src="../assets/images/1.jpg")
                .lp-movie-row__item
                    a(href="#")
                        img(src="../assets/images/2.jpg")
                .lp-movie-row__item
                    a(href="#")
                        img(src="../assets/images/3.jpg")
                .lp-movie-row__item
                    a(href="#")
                        img(src="../assets/images/4.jpg")
</template>

<script>
    export default {
        name: "MoviesTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-movie {
        width: 100%;
        background: url(../assets/images/childrenbg.jpg)no-repeat;
        padding-top: 90px;
        color: $subtitlesColor;
        &__title {
            font-family: 'Open Sans',sans-serif;
            font-size: 40px;
            line-height: 46px;
            text-align: center;
        }
        &-row {
            display: flex;
            padding-top: 55px;
            justify-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            left: 12px;
            &__item {
                margin: 10px;
                img {
                    border-radius: 5px;
                }
            }
        }
    }
</style>

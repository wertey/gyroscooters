<template>
    <div class="lp-goods">
        <div class="lp-container">
            <h2 class="lp__title lp-goods__title">Каталог детских гироскутеров</h2>
            <div class="lp-goods-row">
                <div class="lp-goods-row__item"></div>
                <div class="lp-goods-row__item"></div>
                <div class="lp-goods-row__item"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';
    export default {
        name: "GoodsTemplate",
        components: {
            Slick
        },
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    import 'node_modules/slick-carousel/slick/slick.css';

    .lp-goods {
        width: 100%;
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
                & + & {
                    margin-left: 10px;
                }
            }
        }
    }
</style>

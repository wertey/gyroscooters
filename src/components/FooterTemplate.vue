<template lang="pug">
    footer.lp-footer
        .lp-footer__map
            img(src="../assets/images/map.jpg")
        .lp-footer__copyright © Wheely, 2013-2019

</template>

<script>
    export default {
        name: "FooterTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-footer {
        width: 100%;
        background: url(../assets/images/footerbg.png)no-repeat;
        background-size: cover;
        height: 100%;
        min-height: 448px;
        padding-bottom: 40px;
        &__copyright {
            padding-top: 40px;
            color: $secondColor;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            font-family: 'Open Sans',sans-serif;
        }
        &__map {
            display: flex;
            justify-content: center;
            img {
                max-width: 100%;
                height: auto;
            }
        }
    }
</style>

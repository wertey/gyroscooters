<template lang="pug">
    .lp-review
        .lp-container
            .lp-review-block
                .lp-review-block__text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                .lp-review-block__img
                    img(src="../assets/images/reviewphoto.png")
            .lp-review-row
                .lp-review-row-button
                    .lp__button.lp-review-row-button__btn Написать руководителю
                .lp-review-row-signature
                    .lp-review-row-signature__name Борис Недильский
                    .lp-review-row-signature__pos Борис Юрьевич Недильский Руководитель компании Wheely
</template>

<script>
    export default {
        name: "ReviewTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-review {
        padding-top: 100px;
        width: 100%;
        min-height: 660px;
        &-block {
            background: url(../assets/images/border.png)no-repeat;
            position: relative;
            &__text {
                padding: 55px 79px 130px 400px;
                width: 100%;
                height: auto;
                font-size: 20px;
                line-height: 34px;
            }
            &__img {
                position: absolute;
                top: -121px;
            }
        }
        &-row {
            display: flex;
            justify-content: flex-end;
            &-signature {
                width: 33%;
            }
            &-signature {
                font-family: 'Kobzar KS',sans-serif;
                &__name {
                    position: relative;
                    font-size: 40px;
                    line-height: 49px;
                    &:after {
                        position: absolute;
                        content: '';
                        width: 150px;
                        height: 12px;
                        background: url(../assets/images/underline.png)no-repeat;
                        left: 5px;
                        bottom: -18px;
                    }
                }
                &__pos {
                    padding-top: 23px;
                    max-width: 251px;
                    text-align: end;
                }
            }
            &-button {
                width: 26%;
                padding-right: 50px;
                &__btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
                    font-family: 'Open Sans',sans-serif;
                    font-size: 13px;
                }
            }
        }
    }
</style>

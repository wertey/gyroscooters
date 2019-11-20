<template lang="pug">
    .lp-review(id="review")
        .lp-container
            .lp-review-block
                .lp-review-block__text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                .lp-review-block__img
                    img(src="../assets/images/reviewphoto.png")
            .lp-review-row
                .lp-review-row-button
                    .lp__button.lp-review-row-button__btn Написать руководителю
                .lp-review-row-signature
                    .lp-review-row-signature__name  Boris Nydilskiy
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
        width: 100%;
        min-height: 466px;
        position: relative;
        &-block {
            background: url(../assets/images/border.png)no-repeat;
            margin-top: 100px;
            @media screen and (max-width: 1199px) {
                & {
                    background-size: cover;
                    max-width: 900px;
                    margin: 100px auto 0;
                }
            }
            @media screen and (max-width: 1050px) {
                & {
                    background: none;
                    border: 3px solid $counterSecondColor;
                    margin-bottom: 30px;
                    max-width: 90%;
                }
            }
            @media screen and (max-width: 767px) {
                & {
                    margin-top: 50px;
                }
            }
            &__text {
                padding: 55px 79px 130px 400px;
                width: 100%;
                height: auto;
                font-size: 20px;
                line-height: 34px;
                @media screen and (max-width: 1199px) {
                    & {
                        padding: 20px 20px 133px;
                    }
                }
                @media screen and (max-width: 1050px) {
                    & {
                        padding: 20px;
                    }
                }
                @media screen and (max-width: 767px) {
                    & {
                        padding: 5px;
                    }
                }
                @media screen and (max-width: 359px) {
                    & {
                        padding: 10px;
                        font-size: 18px;
                        line-height: 20px;
                    }
                }
            }
            &__img {
                position: absolute;
                top: -130px;
                @media screen and (max-width: 1199px) {
                    & {
                        display: none;
                    }
                }
            }
        }
        &-row {
            display: flex;
            justify-content: flex-end;
            @media screen and (max-width: 1199px) {
                & {
                    justify-content: center;
                }
            }
            @media screen and (max-width: 1023px) {
                & {
                    flex-direction: column;
                    align-items: center;
                }
            }
            &-signature {
                width: 33%;
                @media screen and (max-width: 1023px) {
                    & {
                        width: 80%;
                    }
                }
            }
            &-signature {
                font-family: 'Kobzar KS',sans-serif;
                &__name {
                    position: relative;
                    font-size: 40px;
                    line-height: 49px;
                    font-family: 'Dancing Script', cursive;;
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
                @media screen and (max-width: 1023px) {
                    & {
                        justify-content: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                }
            }
            &-button {
                width: 26%;
                padding-right: 50px;
                @media screen and (max-width: 1023px) {
                    & {
                        padding-right: 0;
                        width: 30%;
                        margin-bottom: 30px;
                    }
                }
                @media screen and (max-width: 767px) {
                    & {
                        width: 40%;
                    }
                }
                @media screen and (max-width: 519px) {
                    & {
                        width: 60%;
                    }
                }
                @media screen and (max-width: 359px) {
                    & {
                        width: 80%;
                    }
                }
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

<template lang="pug">
    .lp-children
        .lp-container
            .lp-children-block
                h2.lp-children-block__title Оставьте отзыв с Вашими детьми
                h3.lp-children-block__desc
                    span.lp-children-block__desc.lp-children-block__desc_bold  и получите подарок!
                form(action="#").lp-form.lp-children-block-form
                    input(type="text").lp-form__input.lp-form__input_name.lp-children-block-form__input(placeholder="Ваше имя")
                    input(type="text").lp-form__input.lp-form__input_email.lp-children-block-form__input(placeholder="Ваш телефон")
                    button.lp-form__button.lp-children-block-form__button Отправить
</template>

<script>
    export default {
        name: "ChildrenTemplate"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/core.scss';
    .lp-children {
        width: 100%;
        background: url(../assets/images/reviewbg.png)no-repeat;
        min-height: 350px;
        padding-top: 75px;
    &-block {
         max-width: 700px;
         display: flex;
         margin-right: auto;
         flex-direction: column;
    &__title {
         font-size: 40px;
         line-height: 46px;
         color: $subtitlesColor;
         font-family: 'Open Sans',sans-serif;
         font-weight: 100;
     }
    &__desc {
         font-family: 'Open Sans Bold',sans-serif;
         font-size: 24px;
         line-height: 46px;
         color: $main-color;
         margin-bottom: 30px;
        font-weight: bold;
    &_bold {
         font-size: 34px;
         line-height: 46px;
         color: $mainTitleColor;
         padding-right: 10px;
         font-weight: bold;
     }
    }
    &-text {
    &__info {
         font-family: 'Open Sans',sans-serif;
         font-size: 19px;
         line-height: 46px;
         color: $main-color;
    &_bold {
         font-size: 19px;
         line-height: 46px;
         color: $mainTitleColor;
         font-weight: bold;
         font-family: 'Open Sans Bold',sans-serif;
         padding-left: 10px;
     }
    }
    }
    &-form {
    &__input {
         height: 48px;
     }
    &__button {
         height: 48px;
     }
    }
    }
    }
</style>

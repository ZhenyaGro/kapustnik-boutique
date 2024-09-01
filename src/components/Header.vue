<template>
  <Container class="header">
    <div class="header__content">
      <a href="#"><img src="/img/logo/logoWithBigTextWhite.svg" class="logo" alt="Логотип" /></a>
      <nav class="navbar">
        <a href="#" class="navbar__link">Главная</a>
        <a href="#" class="navbar__link">Ассортимент</a>
        <a href="#" class="navbar__link">Отзывы</a>
        <a href="#" class="navbar__link">Как заказать</a>
        <a href="#" class="navbar__link">Контакты</a>
      </nav>
      <a class="navbar__link" href="tel:+79212733414">+7&nbsp;(921)&nbsp;273-34-14</a>
    </div>
  </Container>
</template>

<script setup>
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';

defineComponent({
  name: 'Header',
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.header {
  position: fixed;
  top: 0;

  width: 100%;
  background: -webkit-linear-gradient(
    90deg,
    colors.$additionalColor,
    colors.$brandColor,
    colors.$additionalColor
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    90deg,
    colors.$additionalColor,
    colors.$brandColor,
    colors.$additionalColor
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    a {
      color: white;
      text-decoration: none;
    }

    .logo {
      height: 80px;
    }

    .navbar {
      display: flex;

      &__link {
        display: block;
        padding: 38px 12px;
        transition: background-color 0.3s;

        &:hover {
          background-color: colors.$additionalColor;
        }
      }
    }
  }
}
</style>

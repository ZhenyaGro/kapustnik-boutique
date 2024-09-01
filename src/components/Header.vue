<template>
  <Container class="header">
    <div class="header__content">
      <a href="#"><img src="/img/logoWithBigTextWhite.svg" class="logo" alt="Логотип" /></a>
      <nav class="navbar">
        <a href="#" class="navbar__link">Главная</a>
        <a href="#" class="navbar__link">Ассортимент</a>
        <a href="#" class="navbar__link">Отзывы</a>
        <a href="#" class="navbar__link">Как заказать</a>
        <a href="#" class="navbar__link">Контакты</a>
      </nav>
      <a href="tel:+79212733414">+7 (921) 273-34-14</a>
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
        transition: background-color 0.2s;

        &:hover {
          background-color: colors.$additionalColor;
        }
      }
    }
  }
}
</style>

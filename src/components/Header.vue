<template>
  <Container class="header">
    <div class="header__content">
      <router-link to="/"><img src="/img/logo/logoWithBigTextWhite.svg" class="logo" alt="Логотип" /></router-link>
      <nav class="navbar">
        <a v-for="(item, index) in pageLinks" :key="index" :href="item.url" class="navbar__link">{{ item.text }}</a>
      </nav>
      <a class="navbar__link" href="tel:+79212733414">+7&nbsp;(921)&nbsp;273-34-14</a>
    </div>
  </Container>
</template>

<script setup>
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import { pageLinks } from '@/constants/pageLinks';

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
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(colors.$additionalColor, colors.$brandColor); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    colors.$additionalColor,
    colors.$brandColor
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);

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

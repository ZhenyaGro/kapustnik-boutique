<template>
  <Container
    ><section class="start-page">
      <img src="/img/logo/logoWithText.svg" class="start-page__logo" alt="Логотип" />
      <h1>Магазин модной женской одежды больших размеров со стразами</h1>
    </section>
  </Container>
  <Container :id="pageLinks.start.id" class="start-content">
    <a :href="pageLinks.products.url" class="start-content__link"
      ><img class="start-content__img" src="/img/photos/model1.jpeg" alt="Фото модель"
    /></a>
    <a :href="pageLinks.products.url" class="start-content__link"
      ><img class="start-content__img" src="/img/photos/model2.jpeg" alt="Фото модель"
    /></a>
    <a :href="pageLinks.contacts.url" class="start-content__link"
      ><img class="start-content__img" src="/img/photos/shop.jpg" alt="Интерьер магазина"
    /></a>
  </Container>
</template>

<script setup>
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import { pageLinks } from '@/constants/pageLinks';

defineComponent({
  name: 'StartPage',
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.start-page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  &__logo {
    max-width: 600px;
    opacity: 0;
    animation: 3s show ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  h1 {
    max-width: 1030px;
    opacity: 0;
    font-weight: 400;
    color: black;
    animation: 3s show ease;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
}

.start-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;

  &__img {
    width: 100%;
    height: auto;
    border-radius: 36px;
  }

  &__link:nth-child(3) {
    grid-column: 1 / 3;
  }
}

img {
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

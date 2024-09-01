<template>
  <Container
    ><section class="start-page">
      <img src="/img/logo/logoWithText.svg" class="start-page__logo" alt="Логотип" /></section
  ></Container>
</template>

<script setup>
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';

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
  justify-content: center;
  align-items: center;

  &__logo {
    max-width: 600px;
    opacity: 0;
    animation: 3s show ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
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

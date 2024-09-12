<template>
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

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import { pageLinks } from '@/constants/pageLinks';

defineComponent({
  name: 'StartContent',
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
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
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__link:nth-child(3) {
    grid-column: 1 / 3;
  }
}
</style>

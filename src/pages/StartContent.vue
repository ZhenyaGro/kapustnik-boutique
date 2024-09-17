<template>
  <Container :id="pageLinks.start.id" class="start-content">
    <TextBlock
      ><p>
        НАША ТОРГОВАЯ ТОЧКА ПРЕДЛАГАЕТ ЖЕНСКУЮ ОДЕЖДУ БОЛЬШИХ РАЗМЕРОВ ИТАЛЬЯНСКОГО, ТУРЕЦКОГО И КОРЕЙСКОГО
        ПРОИЗВОДСТВА, СОЧЕТАЮЩУЮ В СЕБЕ КОМФОРТ И СТИЛЬ
      </p>
      <p>
        Мы специализируемся на создании уникальных образов, украшенных стразами, которые придают изделиям роскошный и
        элегантный вид
      </p>
      <p>
        Мы стремимся предоставить качественную одежду, которая подчеркнет индивидуальность и очарование каждой женщины
      </p></TextBlock
    >
    <div class="start-photos">
      <a :href="pageLinks.products.url" class="start-photos__link"
        ><img class="start-photos__img" src="/img/photos/model1.jpeg" alt="Фото модель"
      /></a>
      <a :href="pageLinks.products.url" class="start-photos__link"
        ><img class="start-photos__img" src="/img/photos/model2.jpeg" alt="Фото модель"
      /></a>
      <a :href="pageLinks.contacts.url" class="start-photos__link"
        ><img class="start-photos__img" src="/img/photos/shop.jpg" alt="Интерьер магазина"
      /></a>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import TextBlock from '@/components/TextBlock.vue';
import { pageLinks } from '@/constants/pageLinks';

defineComponent({
  name: 'StartContent',
  components: {
    Container,
    TextBlock,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.start-content {
  .start {
    &-photos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
      gap: 20px;
      width: 100%;

      &__link:nth-child(3) {
        grid-column: 1 / 3;
      }

      &__img {
        width: 100%;
        height: auto;
        border-radius: 36px;
        transition: transform 0.5s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>

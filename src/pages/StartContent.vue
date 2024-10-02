<template>
  <Container :id="pageLinks.start.id" class="start-content anchor">
    <div class="start-photos">
      <a :href="pageLinks.products.url" class="start-photos__link"
        ><img class="start-photos__img start-photos__img_scale" src="/img/photos/model1.jpeg" alt="Фото модель"
      /></a>
      <a :href="pageLinks.products.url" class="start-photos__link"
        ><img class="start-photos__img start-photos__img_scale" src="/img/photos/model2.jpeg" alt="Фото модель"
      /></a>
      <div class="start-photos__img-container">
        <img class="start-photos__img" src="/img/photos/shop.jpg" alt="Интерьер магазина" />
        <TextBlock class="start-photos__text"
          ><p class="start-photos__text_uppercase">
            Наш магазин предлагает женскую одежду больших размеров итальянского, турецкого и корейского производства,
            сочетающую в себе комфорт и стиль
          </p>
          <p>
            Мы специализируемся на создании уникальных образов, украшенных стразами, которые придают изделиям роскошный
            и элегантный вид
          </p>
          <p>
            Мы стремимся предоставить качественную одежду, которая подчеркнет индивидуальность и очарование каждой
            женщины
          </p></TextBlock
        >
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import TextBlock from '@/components/TextBlock.vue';
import { pageLinks } from '@/constants';

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

      &__link {
        overflow: hidden;
        border-radius: 36px;
      }

      &__img-container {
        grid-column: 1 / 3;
        position: relative;
      }

      &__img {
        width: 100%;
        height: auto;
        border-radius: 36px;
        transition: transform 0.5s;

        @media (hover: hover) {
          &_scale:hover {
            transform: scale(1.1);
          }
        }
      }

      &__text {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        &_uppercase {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>

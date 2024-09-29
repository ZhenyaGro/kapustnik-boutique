<template>
  <div>
    <TextBlock>
      <h1 class="heading" :id="pageLinks.products.id">Ассортимент</h1>
      <p>
        Наша коллекция включает в себя разнообразные модели, от повседневной одежды до вечерних нарядов, что позволяет
        нашим клиентам чувствовать себя уверенно и привлекательно в любой ситуации.
      </p></TextBlock
    >
    <h2>Примеры образов</h2>
    <div class="slider-container">
      <Slider :photosUrls="modelsPhotosUrls" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import { pageLinks } from '@/constants/pageLinks';
import Slider from '@/components/Slider.vue';
import TextBlock from '@/components/TextBlock.vue';
import { modelsPhotosUrls } from '@/constants/modelsPhotosUrls';

defineComponent({
  name: 'Products',
  components: {
    Container,
    Slider,
    TextBlock,
  },
});
</script>

<style lang="scss" scoped>
.slider-container {
  display: flex;
  justify-content: center;
}
</style>

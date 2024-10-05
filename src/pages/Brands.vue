<template>
  <div>
    <TextBlock>
      <h1 class="heading anchor" :id="pageLinks.brands.id">Бренды</h1>
    </TextBlock>
    <div class="brands">
      <img src="img/brands/brand1.jpeg" alt="Бренд" />
      <img src="img/brands/brand2.jpeg" alt="Бренд" />
      <img src="img/brands/brand3.jpeg" alt="Бренд" />
      <img src="img/brands/brand4.jpeg" alt="Бренд" />
      <img src="img/brands/brand5.jpeg" alt="Бренд" />
      <img src="img/brands/brand6.jpeg" alt="Бренд" />
      <img src="img/brands/brand7.jpeg" alt="Бренд" />
      <img src="img/brands/brand8.jpeg" alt="Бренд" />
      <img src="img/brands/brand9.jpeg" alt="Бренд" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/Container.vue';
import { pageLinks } from '@/constants';
import Slider from '@/components/Slider.vue';
import TextBlock from '@/components/TextBlock.vue';

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
.brands {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;

  @media (max-width: 1255px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
}

img {
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  border-radius: 36px;
  border: 1px solid;

  @media (max-width: 420px) {
    width: 80%;
    max-width: auto;
    height: auto;
    margin: 0 auto;
  }
}
</style>

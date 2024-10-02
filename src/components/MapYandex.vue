<template>
  <div style="position: relative; overflow: hidden">
    <a
      href="https://yandex.ru/maps/org/kapustnik_butik/166263470601/?utm_medium=mapframe&utm_source=maps"
      style="color: #eee; font-size: 12px; position: absolute; top: 0px"
      >Капустник Бутик</a
    ><a
      href="https://yandex.ru/maps/2/saint-petersburg/category/plus_size_clothing/184107953/?utm_medium=mapframe&utm_source=maps"
      style="color: #eee; font-size: 12px; position: absolute; top: 14px"
      >Одежда больших размеров в Санкт‑Петербурге</a
    ><a
      href="https://yandex.ru/maps/2/saint-petersburg/category/clothing_store/184107943/?utm_medium=mapframe&utm_source=maps"
      style="color: #eee; font-size: 12px; position: absolute; top: 28px"
      >Магазин одежды в Санкт‑Петербурге</a
    ><iframe
      src="https://yandex.ru/map-widget/v1/org/kapustnik_butik/166263470601/?indoorLevel=1&ll=30.398490%2C60.011821&z=17.13"
      width="100%"
      height="500"
      frameborder="1"
      allowfullscreen="true"
      style="position: relative"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'MapYandex',
});
</script>

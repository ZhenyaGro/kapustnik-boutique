<template>
  <section class="container">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'Container',
});
</script>

<style scoped lang="scss">
$containerWidth: 1200px;
// Отступы определяются по формуле. Вместе задают ширину контейнера
$containerPadding: calc(50% - $containerWidth / 2);
.container {
  padding-left: $containerPadding;
  padding-right: $containerPadding;
}

$smallScreenContainerPadding: 16px;
// Задание отступов контейнера в случае, если ширина экрана <= ширине контейнера
@media (max-width: calc($containerWidth + $smallScreenContainerPadding * 2)) {
  .container {
    padding-left: $smallScreenContainerPadding;
    padding-right: $smallScreenContainerPadding;
  }
}
</style>

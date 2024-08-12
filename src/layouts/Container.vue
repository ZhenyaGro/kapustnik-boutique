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
$containerPadding: calc(50% - 1200px / 2);

.container {
  padding-left: $containerPadding;
  padding-right: $containerPadding;
}
</style>

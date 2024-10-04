<template>
  <article class="text-block">
    <slot />
  </article>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'TextBlock',
});
</script>

<style lang="scss" scoped>
@use '@/styles/mixins';

.text-block {
  max-width: 800px;
  padding: 40px 40px 80px;
  margin: 0 auto 30px;
  text-align: left;
  color: white;
  font-size: 20px;
  @include mixins.backgroundGradientWithLogo(0%, 50%, 300px);

  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }
}

// Отступы между абзацами
::v-deep p:not(:last-child) {
  margin-bottom: 16px;
}
</style>

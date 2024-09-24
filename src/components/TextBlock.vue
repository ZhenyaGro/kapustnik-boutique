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
  padding: 40px;
  margin: 0 auto 30px;
  color: white;
  font-size: 20px;
  @include mixins.backgroundGradientWithLogo(0%, 50%, 300px);
}
.test {
  width: 60px;
  position: absolute;
  left: 10px;
  top: 10px;
}
// Отступы между абзацами
::v-deep p:not(:last-child) {
  margin-bottom: 16px;
}
</style>

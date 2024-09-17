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
@use '@/styles/colors';

.text-block {
  max-width: 800px;
  padding: 40px;
  margin: 0 auto 30px;
  border-radius: 16px;
  color: white;
  font-size: 20px;
  background-color: colors.$brandColor;
}

::v-deep p:not(:last-child) {
  margin-bottom: 16px;
}
</style>

<template>
  <div class="links">
    <LinksPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LinksPage from '@/pages/LinksPage.vue';

export default defineComponent({
  name: 'LinksView',
  components: {
    LinksPage,
  },
});
</script>

<style lang="scss">
@use '@/styles/variables';

.links {
  padding-top: variables.$headerHeight;
  min-height: calc(100vh - variables.$headerHeight);
}
</style>

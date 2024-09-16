<template>
  <div class="home">
    <StartPage />
    <StartContent />
    <Products />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartPage from '@/pages/StartPage.vue';
import Products from '@/pages/Products.vue';
import Contacts from '@/pages/Contacts.vue';
import StartContent from '@/pages/StartContent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    StartPage,
    StartContent,
    Products,
    Contacts,
  },
});
</script>

<style lang="scss">
@use '@/styles/variables';

.home {
  padding-top: variables.$headerHeight;
}
</style>

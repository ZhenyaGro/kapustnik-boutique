<template>
  <div class="home">
    <StartPage class="home__page" />
    <StartContent class="home__page" />
    <Products class="home__page" />
    <Brands class="home__page" />
    <HowToOrder class="home__page" />
    <Contacts class="home__page" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartPage from '@/pages/StartPage.vue';
import StartContent from '@/pages/StartContent.vue';
import Products from '@/pages/Products.vue';
import Brands from '@/pages/Brands.vue';
import Contacts from '@/pages/Contacts.vue';
import HowToOrder from '@/pages/HowToOrder.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    StartPage,
    StartContent,
    Products,
    Brands,
    Contacts,
    HowToOrder,
  },
});
</script>

<style lang="scss">
@use '@/styles/variables';

.home {
  padding-top: variables.$headerHeight;

  &__page {
    margin-bottom: 60px;
  }
}
</style>

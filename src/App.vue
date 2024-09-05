<template>
  <div class="app-container">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

defineComponent({
  name: 'ApproveDocument',
  components: {
    Header,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif, Helvetica;
}

html {
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 40px;
}

.heading {
  text-transform: uppercase;
}
</style>

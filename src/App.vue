<template>
  <div class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

defineComponent({
  name: 'ApproveDocument',
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'San Francisco', sans-serif, Helvetica;
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
  color: white;

  @media (max-width: 424px) {
    font-size: 30px;
  }
}

.heading {
  text-transform: uppercase;
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
}

p {
  color: white;
}

address {
  font-style: normal;
}

.anchor {
  scroll-margin-top: 150px;
}
</style>

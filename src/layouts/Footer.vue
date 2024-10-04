<template>
  <Container class="footer">
    <footer class="footer__content">
      <p>
        ИП Капустник Ирина Анатольевна<br />
        <a :href="`tel:${PHONE_NUMBER.default}`">{{ PHONE_NUMBER.formatted }}</a>
      </p>
    </footer>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/Container.vue';
import { PHONE_NUMBER } from '@/constants';

defineComponent({
  name: 'Footer',
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.footer {
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(colors.$additionalColor, colors.$brandColor); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    colors.$additionalColor,
    colors.$brandColor
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .footer__content {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    p {
      text-align: left;
    }
  }
}
</style>

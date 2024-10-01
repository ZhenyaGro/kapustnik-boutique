<template>
  <Container :class="['header', { header_hidden: isHeaderHidden && !isMouseNearTop }]">
    <div class="header__content">
      <router-link to="/"><img src="/img/logo/logoWithBigTextWhite.svg" class="logo" alt="Логотип" /></router-link>
      <nav class="navbar">
        <a v-for="(item, index) in pageLinks" :key="index" :href="item.url" class="navbar__link">{{ item.text }}</a>
      </nav>
      <a class="navbar__link" href="tel:+79212733414">+7&nbsp;(921)&nbsp;273-34-14</a>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount } from 'vue';
import Container from '@/layouts/Container.vue';
import { pageLinks } from '@/constants/pageLinks';

defineComponent({
  name: 'Header',
  components: {
    Container,
  },
});

const isHeaderHidden = ref(false);
const isMouseNearTop = ref(false);
let lastScrollY = 0;

/**
 * Анализирует направление скролла при прокрученной области вниз более чем на 100px для скрытия или показа Header
 */
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHeaderHidden.value = true;
  } else {
    isHeaderHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

/**
 * Показывает Header при наведении курсором на верхнюю часть экрана (100px)
 */
const handleMouseMove = (event: MouseEvent) => {
  if (event.clientY <= 100) {
    isMouseNearTop.value = true;
  } else {
    isMouseNearTop.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(colors.$additionalColor, colors.$brandColor); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    colors.$additionalColor,
    colors.$brandColor
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  transition: top 0.5s ease;

  &_hidden {
    top: -100px;
  }

  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    .logo {
      height: 80px;
    }

    .navbar {
      display: flex;

      &__link {
        display: block;
        padding: 38px 12px;
        transition: background-color 0.3s;

        &:hover {
          background-color: colors.$additionalColor;
        }
      }
    }
  }
}
</style>

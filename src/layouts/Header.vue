<template>
  <Container :class="['header', { header_hidden: isHeaderHidden && !isMouseNearTop }]">
    <header class="header__content">
      <router-link to="/"><img src="/img/logo/logoWithBigTextWhite.svg" class="logo" alt="Логотип" /></router-link>
      <nav class="navbar">
        <a v-for="(item, index) in pageLinks" :key="index" :href="item.url" class="navbar__link">{{ item.text }}</a>
      </nav>
      <a class="navbar__link" :href="`tel:${PHONE_NUMBER.default}`">{{ PHONE_NUMBER.formatted }}</a>
    </header>
  </Container>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount } from 'vue';
import Container from '@/components/Container.vue';
import { pageLinks, PHONE_NUMBER } from '@/constants';

defineComponent({
  name: 'Header',
  components: {
    Container,
  },
});

const isMobileDevice = ref(false);
const isHeaderHidden = ref(false);
const isMouseNearTop = ref(false);
let lastScrollY = 0;

const checkDeviceType = () => {
  isMobileDevice.value = window.matchMedia('(hover: none)').matches;
};

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
  if (!isMobileDevice.value && event.clientY <= 100) {
    isMouseNearTop.value = true;
  } else {
    isMouseNearTop.value = false;
  }
};

onMounted(() => {
  checkDeviceType(); // Проверяем тип устройства при монтировании
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', checkDeviceType); // Обновляем тип устройства при изменении окна
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('resize', checkDeviceType);
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

        &:active {
          background-color: colors.$additionalColor;
        }

        @media (hover: hover) {
          &:hover {
            background-color: colors.$additionalColor;
          }
        }
      }

      @media (max-width: 949px) {
        display: none;
      }
    }
  }
}
</style>

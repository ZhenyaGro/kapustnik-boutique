<template>
  <div class="slider">
    <div class="slider-wrapper" :style="wrapperStyles">
      <div class="slider-item" v-for="(url, index) in props.photosUrls" :key="index">
        <img :src="url" alt="изображение слайдера" />
      </div>
    </div>
    <button class="slider-control prev" @click="prevSlide" title="Предыдущий слайд">&#8592;</button>
    <button class="slider-control next" @click="nextSlide" title="Следующий слайд">&#8594;</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{
  photosUrls: string[];
}>();

const visibleSlides = ref(3);
const currentIndex = ref(0);
const totalSlides = props.photosUrls.length;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
  resetAutoSlide();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
  resetAutoSlide();
};

/**
 * Обновление количества видимых слайдов при изменении ширины экрана
 */
const updateVisibleSlides = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 600) {
    visibleSlides.value = 1;
  } else if (screenWidth <= 1024) {
    visibleSlides.value = 2;
  } else {
    visibleSlides.value = 3;
  }
};

onMounted(() => {
  updateVisibleSlides();
  window.addEventListener('resize', updateVisibleSlides);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisibleSlides);
});

const wrapperStyles = computed(() => ({
  transform: `translateX(-${(currentIndex.value * 100) / visibleSlides.value}%)`,
}));

let autoSlideInterval: ReturnType<typeof setInterval> | null = null;
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

const resetAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.slider {
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  .slider-wrapper {
    display: flex;
    transition: transform 0.5s ease;
  }

  .slider-item {
    min-width: calc(100% / 3); // По умолчанию — 3 слайда на экран
    box-sizing: border-box;

    img {
      width: 100%;
      height: auto;
      max-height: 800px;
      display: block;
      border-radius: 10px;
    }
  }

  .slider-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: colors.$brandColor;
    opacity: 0.8;
    color: white;
    font-size: 20px;
    font-weight: 900;
    border: none;
    border-radius: 100px;
    width: 64px;
    height: 64px;
    cursor: pointer;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }

    &:hover {
      background-color: colors.$additionalColor;
    }
  }

  @media (max-width: 1024px) {
    .slider-item {
      min-width: calc(100% / 2); // 2 слайда на экран для средних экранов
    }

    .slider-control {
      &:hover {
        background-color: colors.$brandColor;
      }

      &:active {
        background-color: colors.$additionalColor;
      }
    }
  }

  @media (max-width: 600px) {
    .slider-item {
      min-width: 100%; // 1 слайд на экран для маленьких экранов
    }
  }
}
</style>

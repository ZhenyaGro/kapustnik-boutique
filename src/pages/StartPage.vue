<template>
  <Container :id="pageLinks.start.id" class="main-container anchor">
    <LinesEffect />
    <section class="main-content">
      <div class="logo-wrapper">
        <img src="img/logo/logoWithTextWhite.svg" class="logo-wrapper__logo" alt="Логотип" />
        <h1>Магазин модной женской одежды больших&nbsp;размеров со стразами</h1>
      </div>
      <img class="circle circle_left" src="img/layout/circle_light.svg" alt="Элемент страницы. Круг" />
      <img class="circle circle_right" src="img/layout/circle_light.svg" alt="Элемент страницы. Круг" />
    </section>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/Container.vue';
import LinesEffect from '@/components/LinesEffect.vue';
import { pageLinks } from '@/constants';

defineComponent({
  name: 'StartPage',
  components: {
    Container,
    LinesEffect,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';
@use '@/styles/variables';
@use '@/styles/mixins';

.main {
  &-container {
    position: relative;
    background-color: colors.$brandColor;
    overflow: hidden;
    box-shadow: 0 -50px 0px #d8a760;
    // background: linear-gradient(to bottom, colors.$brandColor 92%, white); // Плавный переход к белому в нижней части
  }

  &-content {
    min-height: calc(100vh - variables.$headerHeight);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mixins.backgroundGradientWithLogo();

    .logo-wrapper {
      position: relative;

      &__logo {
        max-width: 600px;
        opacity: 0;
        animation: 3s showFromOpacity ease;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        transition: transform 0.5s;
        z-index: 10;

        &:active {
          transform: scale(1.05);
        }

        @media (hover: hover) {
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    .circle {
      position: absolute;
      width: 30%;
      min-width: 500px;
      max-width: 600px;

      &_left {
        bottom: 10%;
        left: 15%;
        animation: 3s showLeftRoll ease;
        animation-fill-mode: forwards;

        @media (max-width: 1999px) {
          bottom: -10%;
          left: -15%;
        }

        @media (max-width: 794px) {
          display: none;
        }
      }

      &_right {
        top: 10%;
        right: 15%;
        animation: 3s showRightRoll ease;
        animation-fill-mode: forwards;

        @media (max-width: 1999px) {
          top: -10%;
          right: -15%;
        }

        @media (max-width: 794px) {
          display: none;
        }
      }
    }

    h1 {
      margin-top: 10px;
      max-width: 1030px;
      opacity: 0;
      font-weight: 400;
      animation: 3s showFromOpacity ease;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;
    }
  }
}

img {
  user-select: none;
}

@keyframes showLeftRoll {
  from {
    bottom: -130%;
    left: -130%;
  }
}

@keyframes showRightRoll {
  from {
    top: -130%;
    right: -130%;
  }
}

@keyframes showFromOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<template>
  <div>
    <img
      v-for="n in 4"
      :class="['line', `line_${n}`]"
      :src="`/img/layout/line${n}.svg`"
      alt="Элемент страницы. Линия"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'LinesEffect',
});
</script>

<style lang="scss" scoped>
.line {
  width: 15%;
  max-width: 200px;
  min-width: 100px;
  position: absolute;
  animation: floating 4s infinite linear;
  user-select: none;

  &_1 {
    top: 5%;
    left: 5%;
  }

  &_2 {
    top: 5%;
    right: 5%;
  }

  &_3 {
    bottom: 5%;
    left: 5%;
  }

  &_4 {
    bottom: 5%;
    right: 5%;
  }
}

@keyframes floating {
  0% {
    transform: translateX(0px) translateY(0px) scale(1);
    animation-timing-function: ease-in-out;
  }

  50% {
    transform: translateX(-2px) translateY(12px) scale(1);
    animation-timing-function: ease-in-out;
  }
}

@media (max-width: 424px) {
  .line {
    display: none;
  }
}
</style>

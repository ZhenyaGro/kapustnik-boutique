<template>
  <Container :id="pageLinks.order.id" class="order anchor">
    <TextBlock>
      <h1 class="heading">Как сделать заказ</h1>
      <ol>
        <li>Выбрать товары в <a :href="SOCIAL_MEDIA_LINKS.telegram.url">нашем каталоге</a></li>
        <li>
          Прислать фото понравившихся вещей, а также ваши параметры: обхват груди, бедер и талии в
          <a :href="SOCIAL_MEDIA_LINKS.whatsapp.url">whatsapp</a>
        </li>
      </ol>
      <div class="order__container-img">
        <img class="order__img" src="/img/photos/measurements.jpeg" alt="инструкция как сделать замер" />
      </div>
      <div class="order__buy">
        <img class="order__icon" src="/img/icons/delivery.svg" alt="Доставка по всей россии" />
        <p>Отправляем заказы по всей России по почте или СДЕК по полной предоплате.</p>
      </div>
      <div class="order__buy">
        <img class="order__icon" src="/img/icons/offlineshopping.svg" alt="Покупки в магазине" />
        <p>
          Также можно прийти <a :href="pageLinks.contacts.url">к нам в магазин</a>, выбрать и примерить одежду
          самостоятельно.
        </p>
      </div>
    </TextBlock>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/components/Container.vue';
import TextBlock from '@/components/TextBlock.vue';
import { pageLinks, SOCIAL_MEDIA_LINKS } from '@/constants';

defineComponent({
  name: 'HowToOrder',
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

a {
  text-decoration: underline;
}

a:active {
  background-color: colors.$additionalColor;
}

@media (hover: hover) {
  a:hover {
    background-color: colors.$additionalColor;
  }
}

ol {
  list-style-position: inside;
}

.order {
  &__container-img {
    text-align: center;

    .order__img {
      width: 500px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  &__buy {
    display: flex;
    align-items: center;
    gap: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__icon {
    width: 60px;
  }
}
</style>

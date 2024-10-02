<template>
  <Container :id="pageLinks.contacts.id" class="contacts anchor">
    <TextBlock>
      <h1 class="heading">Контакты</h1>
      <address class="contact-info">
        <p>
          <a href="https://yandex.ru/maps/-/CDT7iF3Z" target="_blank"
            ><strong>Адрес: </strong>город Санкт-Петербург, Гражданский проспект, 41<br />
            ТЦ Академический, 1 этаж, Павильон А56</a
          ><br />
          Метро <span class="subway">Академическая</span><br />
          <strong>Время работы: </strong>С 10:00 до 22:00 каждый день
        </p>
        <p>
          <strong>Телефон: </strong><a :href="`tel:${PHONE_NUMBER.default}`">{{ PHONE_NUMBER.formatted }}</a>
        </p>
        <p>
          <strong>Email: </strong><a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        </p>
      </address>
      <section>
        <h3>Мы в социальных сетях:</h3>
        <nav class="social-links">
          <a
            v-for="(socialMediaSource, index) in SOCIAL_MEDIA_LINKS"
            :key="index"
            :href="socialMediaSource.url"
            target="_blank"
            :title="socialMediaSource.text"
          >
            <img class="social-links__logo" :src="socialMediaSource.imgUrl" :alt="socialMediaSource.text" />
          </a>
        </nav>
      </section>
      <section>
        <h3>Мы на карте:</h3>
        <MapYandex />
      </section>
    </TextBlock>
  </Container>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Container from '@/layouts/Container.vue';
import TextBlock from '@/components/TextBlock.vue';
import MapYandex from '@/components/MapYandex.vue';
import { pageLinks, SOCIAL_MEDIA_LINKS, PHONE_NUMBER, EMAIL } from '@/constants';

defineComponent({
  name: 'Contacts',
  components: {
    Container,
    MapYandex,
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/colors';

.contact-info {
  .subway {
    color: red;
  }

  a:active {
    background-color: colors.$additionalColor;
  }

  @media (hover: hover) {
    a:hover {
      background-color: colors.$additionalColor;
    }
  }
}

h3 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;

  &__logo {
    width: 52px;
    height: 52px;
    transition: transform 0.3s;
    user-select: none;

    &:active {
      transform: scale(1.1);
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>

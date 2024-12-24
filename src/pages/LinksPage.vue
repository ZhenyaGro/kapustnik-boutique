<template>
  <TextBlock :id="pageLinks.contacts.id" class="contacts">
    <section>
      <h3>Социальные сети:</h3>
      <nav class="contacts-links">
        <div v-for="(socialMediaSource, index) in SOCIAL_MEDIA_LINKS" class="contacts-links__block">
          <a
            :key="index"
            :href="socialMediaSource.url"
            target="_blank"
            :title="socialMediaSource.text"
            class="contacts-links__content"
          >
            {{ socialMediaSource.text }}
            <img class="contacts-links__logo" :src="socialMediaSource.imgUrl" :alt="socialMediaSource.text" />
          </a>
        </div>
      </nav>
    </section>
  </TextBlock>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import TextBlock from '@/components/TextBlock.vue';
import { pageLinks, SOCIAL_MEDIA_LINKS, PHONE_NUMBER, EMAIL } from '@/constants';

defineComponent({
  name: 'LinksPage',
  components: {},
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

.contacts-links {
  &__block {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    transition: background-color 0.3s, border-color 0.3s;
    border: 1px solid;
    border-radius: 10px;

    @media (hover: hover) {
      &:hover {
        background-color: colors.$additionalColor;
        border-color: colors.$additionalColor;
      }
    }

    &:active {
      background-color: colors.$additionalColor;
      border-color: colors.$additionalColor;
    }
  }

  &__logo {
    width: 52px;
    height: 52px;
    transition: transform 0.3s;
    user-select: none;
    vertical-align: middle;

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

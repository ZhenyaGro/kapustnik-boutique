interface SocialMediaLink {
  url: string;
  text: string;
  imgUrl: string;
}

export const SOCIAL_MEDIA_LINKS: Record<string, SocialMediaLink> = {
  telegram: {
    url: 'https://t.me/kapustnikbutik',
    text: 'Telegram',
    imgUrl: 'img/socialMedia/iconTelegram.png',
  },
  whatsapp: {
    url: 'https://wa.me/+79212733414',
    text: 'Whatsapp',
    imgUrl: 'img/socialMedia/iconWhatsapp.png',
  },
  instargam: {
    url: 'https://www.instagram.com/kapustnik.butik',
    text: 'Instagram',
    imgUrl: 'img/socialMedia/iconInstagram.png',
  },
  vk: {
    url: 'https://vk.com/kapustnik.butik',
    text: 'Страница Вконтакте',
    imgUrl: 'img/socialMedia/iconVk.png',
  },
  vkgroup: {
    url: 'https://vk.com/kapustnikbutik',
    text: 'Группа Вконтакте',
    imgUrl: 'img/socialMedia/iconVk.png',
  },
  tiktok: {
    url: 'https://www.tiktok.com/@kapustnik.butik',
    text: 'TikTok',
    imgUrl: 'img/socialMedia/iconTiktok.png',
  },
};

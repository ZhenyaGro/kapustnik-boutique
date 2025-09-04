interface PageLink {
  id: string;
  url: string;
  text: string;
}

export const pageLinks: Record<string, PageLink> = {
  start: {
    id: 'start',
    url: '#top',
    text: 'Главная',
  },
  contacts: {
    id: 'contacts',
    url: '#contacts',
    text: 'Контакты',
  },
  order: {
    id: 'order',
    url: '#order',
    text: 'Как заказать',
  },
  products: {
    id: 'products',
    url: '#products',
    text: 'Ассортимент',
  },
  brands: {
    id: 'brands',
    url: '#brands',
    text: 'Бренды',
  },
};

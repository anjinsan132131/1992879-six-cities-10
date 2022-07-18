import { HotelOffer } from '../types/hotel-type';

export const HotelOffersMock: HotelOffer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.270216,
        longitude: 4.795168,
        zoom: 10
      },
      name: 'Gorki',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Gorki.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Angel'
    },
    id: 2,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.25514938496378,
      longitude: 4.773877537499948,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: 'img/room.jpg',
    price: 220,
    rating: 3.2,
    title: 'Beautiful studio',
    type: 'apartment'
  },
  {
    bedrooms: 6,
    city: {
      location: {
        latitude: 52.170216,
        longitude: 4.195168,
        zoom: 10
      },
      name: 'Minsk',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Minsk.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Lina'
    },
    id: 3,
    images: ['img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.15514938496378,
      longitude: 4.173877537499948,
      zoom: 8
    },
    maxAdults: 12,
    previewImage: 'img/apartment-01.jpg',
    price: 500,
    rating: 2.8,
    title: 'Beautiful location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.470216,
        longitude: 4.495168,
        zoom: 10
      },
      name: 'Kiev',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Kiev.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Mevina'
    },
    id: 4,
    images: ['img/apartment-02.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.45514938496378,
      longitude: 4.473877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 450,
    rating: 5,
    title: 'Beautiful studio at great location',
    type: 'hotel'
  }
];

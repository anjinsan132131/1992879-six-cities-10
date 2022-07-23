import { Review } from '../types/review-type';

export const ReviewMock: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sun Jul 17 2022 20:21:19 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Oliver.conner'
    }
  }, {
    comment: 'Good Gorki.',
    date: 'Sun Jun 11 2022 20:21:19 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Mehmed.con'
    }
  }, {
    comment: 'The unique lightness of Minsk.',
    date: 'Sun Jul 10 2022 20:21:19 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Franko.courer'
    }
  }, {
    comment: 'Good of Kiev.',
    date: 'Sun Jul 15 2022 20:21:19 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Andres.lancopan'
    }
  }
];

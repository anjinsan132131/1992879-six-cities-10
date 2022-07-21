export const CardType = {
  FAVORITES: 'favorites',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places'
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const RATING_DATA = [
  {
    rating: '5',
    value: 'perfect'
  },
  {
    rating: '4',
    value: 'good'
  },
  {
    rating: '3',
    value: 'not bad'
  },
  {
    rating: '2',
    value: 'badly'
  },
  {
    rating: '1',
    value: 'terribly'
  }
];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

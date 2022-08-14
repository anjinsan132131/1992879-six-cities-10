export const CardType = {
  FAVORITES: 'favorites',
  CITIES: 'cities',
  NEAR_PLACES: 'near-places'
};


export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer/:id',
  NotFoundPage = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}


export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comment = '/comments/',
  Favorites = '/favorite/'
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

export const URL_MAP_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_LAYER_LINK =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const URL_MARKER =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map';

export const URL_MARKER_DEFAULT =
  `${URL_MARKER}/pin.svg`;

export const URL_MARKER_CURRENT =
  `${URL_MARKER}/main-pin.svg`;

export const FORMAT_RREVIEW_DATE = 'MMM YYYY';

export const FORMAT_DATE_TIME = 'YYYY-MM-D';

export const COEFFICIENT_REVIEW_RATING = 0.05;

export const TIMEOUT_SHOW_ERROR = 2000;

export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
};

export const SORTING = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
}

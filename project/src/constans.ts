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

import { AuthorizationStatus } from '../constans';
import { store } from '../store';
import { Offer } from './offer-type';
import { Review } from './review-type';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserData | null,
};

export type OffersData = {
  city: string,
  sortValue: string,
  allOffers: Offer[],
  offersByCity: Offer[],
  isDataLoaded: boolean,
  offer: Offer | null,
  nearOffers: Offer[],
  reviews: Review[],
  isLoadingError: boolean;
}

export type OffersProcess = {
  hoverCityId: number | null
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

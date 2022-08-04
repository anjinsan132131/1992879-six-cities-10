import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { AuthorizationStatus } from '../constans';
import { UserData } from '../types/user-data';
import { Review } from '../types/review-type';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  SET_OFFERS_BY_CITY: 'SET_OFFERS_BY_CITY',
  SORT_VALUE:'SORT_VALUE',
  SORTING_CITY: 'SORTING_CITY',
  HOVER_CITY: 'HOVER_CITY',
  LOAD_HOTELS: 'LOAD_HOTELS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE'
};

export const selectCityAction = createAction(Action.SELECT_CITY, (value) => ({payload: value}));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const sortValueAction = createAction(Action.SORT_VALUE, (value) => ({payload: value,}));

export const sortingCityAction = createAction(Action.SORTING_CITY);

export const setHoverCityIdAction = createAction(Action.HOVER_CITY, (value) => ({payload: value}));

export const redirectToRoute = createAction(Action.REDIRECT_TO_ROUTE, (value) => ({payload: value}));

export const loadHotelsAction = createAction<Offer[]>('data/loadHotelsAction');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('hotels/setError');

export const setUser = createAction<{user: UserData | null}>('app/setUser');

export const setOfferAction = createAction<Offer>('setOffer');

export const setNearOfferAction = createAction<Offer[]>('nearOffer');

export const setReviewAction = createAction<Review[]>('reviews');

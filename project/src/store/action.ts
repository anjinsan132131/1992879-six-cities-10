import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer-type';
import { AuthorizationStatus } from '../constans';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  SET_OFFERS_BY_CITY: 'SET_OFFERS_BY_CITY',
  SORT_VALUE:'SORT_VALUE',
  SORTING_CITY: 'SORTING_CITY',
  HOVER_CITY: 'HOVER_CITY',
  LOAD_HOTELS: 'LOAD_HOTELS'
};

export const selectCityAction = createAction(Action.SELECT_CITY, (value) => ({payload: value}));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);

export const sortValueAction = createAction(Action.SORT_VALUE, (value) => ({payload: value,}));

export const sortingCityAction = createAction(Action.SORTING_CITY);

export const setHoverCityIdAction = createAction(Action.HOVER_CITY, (value) => ({payload: value}));

export const loadHotelsAction = createAction<Offer[]>('data/loadHotelsAction');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

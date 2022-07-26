import { createAction } from '@reduxjs/toolkit';

const Action = {
  SELECT_CITY: 'SELECT_CITY',
  SET_OFFERS_BY_CITY: 'SET_OFFERS_BY_CITY'
};

export const selectCityAction = createAction(Action.SELECT_CITY, (value) => ({payload: value}));

export const setOffersByCityAction = createAction(Action.SET_OFFERS_BY_CITY);
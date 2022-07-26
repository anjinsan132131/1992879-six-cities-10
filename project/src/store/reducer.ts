import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../constans';
import { OffersMock } from '../mocks/offers';
import { getOffersByCity } from '../utils';
import { selectCityAction, setOffersByCityAction } from './action';

const DEFAULT_CITY = Cities.Paris;

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(OffersMock, DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(OffersMock, state.city);
    });
});

export { reducer };

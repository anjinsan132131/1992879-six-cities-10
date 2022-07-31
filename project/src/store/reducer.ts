import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../constans';
import { OffersMock } from '../mocks/offers';
import { getOffersByCity, getSortedOffers } from '../utils';
import { sortValueAction, selectCityAction, setHoverCityIdAction, setOffersByCityAction, sortingCityAction } from './action';

const DEFAULT_CITY = Cities.Paris;

const initialState = {
  city: DEFAULT_CITY,
  offers: getOffersByCity(OffersMock, DEFAULT_CITY),
  sortValue: 'Popular',
  hoverCityId: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offers = getOffersByCity(OffersMock, state.city);
    })
    .addCase(sortValueAction, (state, action) => {
      state.sortValue = action.payload;
    })
    .addCase(sortingCityAction, (state) => {
      state.offers = getSortedOffers(getOffersByCity(OffersMock, state.city), state.sortValue);
    })
    .addCase(setHoverCityIdAction, (state, action) => {
      state.hoverCityId = action.payload;
    });
});

export { reducer };

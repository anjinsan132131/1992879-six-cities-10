import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities } from '../constans';
import { Offer } from '../types/offer-type';
import { getOffersByCity, getSortedOffers } from '../utils';
import { sortValueAction, selectCityAction, setHoverCityIdAction, setOffersByCityAction, sortingCityAction, loadHotelsAction, requireAuthorization, setDataLoadedStatus } from './action';

const DEFAULT_CITY = Cities.Paris;

type InitialState = {
  city: string;
  allOffers: Offer[];
  offersByCity: Offer[];
  sortValue: string;
  hoverCityId: null;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  allOffers: [],
  offersByCity: [],
  sortValue: 'Popular',
  hoverCityId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersByCityAction, (state) => {
      state.offersByCity = getOffersByCity(state.allOffers, state.city);
    })
    .addCase(sortValueAction, (state, action) => {
      state.sortValue = action.payload;
    })
    .addCase(sortingCityAction, (state) => {
      state.offersByCity = getSortedOffers(getOffersByCity(state.allOffers, state.city), state.sortValue);
    })
    .addCase(setHoverCityIdAction, (state, action) => {
      state.hoverCityId = action.payload;
    })
    .addCase(loadHotelsAction, (state, action) => {
      state.allOffers = action.payload;
      state.offersByCity = getOffersByCity(state.allOffers, state.city);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };

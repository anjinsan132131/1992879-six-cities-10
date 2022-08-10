import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities } from '../constans';
import { Offer } from '../types/offer-type';
import { Review } from '../types/review-type';
import { UserData } from '../types/user-data';
import { getOffersByCity, getSortedOffers } from '../utils';
import { sortValueAction, selectCityAction, setHoverCityIdAction, setOffersByCityAction, sortingCityAction, loadHotelsAction, requireAuthorization, setDataLoadedStatus, setUser, setOfferAction, setNearOfferAction, setReviewAction, setDataLoadingError } from './action';

const DEFAULT_CITY = Cities.Paris;

type InitialState = {
  city: string;
  allOffers: Offer[];
  offersByCity: Offer[];
  sortValue: string;
  hoverCityId: null;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  user: UserData | null;
  offer: Offer | null;
  nearOffers: Offer[];
  reviews: Review [];
  isLoadingError: boolean;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  allOffers: [],
  offersByCity: [],
  sortValue: 'Popular',
  hoverCityId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
  offer: null,
  nearOffers: [],
  reviews: [],
  isLoadingError: false
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
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(setOfferAction, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearOfferAction, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setReviewAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadingError, (state, action) => {
      state.isLoadingError = action.payload;
    });
});

export { reducer };

import { createSlice } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../constans';
import { OffersData } from '../../types/state';
import { getOffersByCity, getSortedOffers } from '../../utils';
import { addCommentAction, fetchHotelsAction, fetchNearOfferAction, fetchOfferAction, fetchReviewsAction } from '../api-action';

const DEFAULT_CITY = Cities.Paris;


export const initialState: OffersData = {
  city: DEFAULT_CITY,
  sortValue: 'Popular',
  allOffers: [],
  offersByCity: [],
  isDataLoaded: false,
  offer: null,
  nearOffers: [],
  reviews: [],
  isLoadingError: false
};

export const offersData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    selectCityAction: (state, action) => {
      state.city = action.payload;
    },
    setOffersByCityAction: (state) => {
      state.offersByCity = getOffersByCity(state.allOffers, state.city);
    },
    sortValueAction: (state, action) => {
      state.sortValue = action.payload;
    },
    sortingCityAction: (state) => {
      state.offersByCity = getSortedOffers(getOffersByCity(state.allOffers, state.city), state.sortValue);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchHotelsAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.offersByCity = getOffersByCity(state.allOffers, state.city);
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoadingError = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoadingError = true;
      })
      .addCase(fetchNearOfferAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export const { selectCityAction, setOffersByCityAction, sortValueAction, sortingCityAction } = offersData.actions;

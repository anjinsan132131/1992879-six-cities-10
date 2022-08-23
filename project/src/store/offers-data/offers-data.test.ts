import { offersData, selectCityAction, setOffersByCityAction, sortingCityAction, sortValueAction } from './offers-data';
import { OffersData } from '../../types/state';
import { Cities, SORTING } from '../../constans';
import { offersMock, sortedOffersMock } from '../../mocks/offers';
import { addCommentAction, changeFavoriteStatusAction, fetchFavoriteOffersAction, fetchHotelsAction, fetchNearOfferAction, fetchOfferAction, fetchReviewsAction } from '../api-action';
import { reviewMock } from '../../mocks/review';

describe('Reducer: offers-data', () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
      city: Cities.Paris,
      sortValue: 'Popular',
      allOffers: [],
      offersByCity: [],
      isDataLoaded: false,
      offer: null,
      nearOffers: [],
      reviews: [],
      favoriteOffers: [],
      isLoadingError: false,
      reloadFavorites: false
    };
  });
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('should set a selected city', () => {
    expect(offersData.reducer(state, {type: selectCityAction.type, payload: 'Paris'}))
      .toEqual({...state, city: 'Paris'});
  });

  it('should set offers by city', () => {
    state = {
      ...state,
      allOffers: offersMock
    };
    const offersByCity = offersMock.slice(-1);
    expect(offersData.reducer(state, {type: setOffersByCityAction.type}))
      .toEqual({...state, offersByCity: offersByCity});
  });

  it('should set sort value city', () => {
    expect(offersData.reducer(state, {type: sortValueAction.type, payload: 'Popular'}))
      .toEqual({...state, sortValue: 'Popular'});
  });

  it('should sort offers by city', () => {
    state = {
      ...state,
      allOffers: offersMock,
      city: Cities.Amsterdam,
      sortValue: SORTING.PRICE_LOW_TO_HIGH
    };
    expect(offersData.reducer(state, {type: sortingCityAction.type}))
      .toEqual({...state, offersByCity: sortedOffersMock});
  });

  describe('fetchHotelsAction test', () => {
    it('should add hotels to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: fetchHotelsAction.pending.type}))
        .toEqual({...state, isDataLoaded: true});
    });

    it('should add hotels to state, change downloading status to false', () => {
      state = {
        ...state,
        allOffers: offersMock,
      };
      const offersByCity = offersMock.slice(-1);
      expect(offersData.reducer(state, {type: fetchHotelsAction.fulfilled.type, payload: offersMock}))
        .toEqual({...state, offersByCity: offersByCity, isDataLoaded: false});
    });
  });

  describe('fetchOfferAction test', () => {
    it('should add offers to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: offersMock[0]}))
        .toEqual({...state, offer: offersMock[0], isLoadingError: false});
    });

    it('should add offers to state, change downloading status to false', () => {
      expect(offersData.reducer(state, {type: fetchOfferAction.rejected.type}))
        .toEqual({...state, isLoadingError: true});
    });
  });

  describe('fetchNearOfferAction test', () => {
    it('should add near offers to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: fetchNearOfferAction.fulfilled.type, payload: offersMock}))
        .toEqual({...state, nearOffers: offersMock});
    });
  });

  describe('fetchReviewsAction test', () => {
    it('should add review to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviewMock}))
        .toEqual({...state, reviews: reviewMock});
    });
  });

  describe('addCommentAction test', () => {
    it('should add comment to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: addCommentAction.fulfilled.type, payload: reviewMock}))
        .toEqual({...state, reviews: reviewMock});
    });
  });

  describe('fetchFavoriteOffersAction test', () => {
    it('should add favorites offers to state, change downloading status to true', () => {
      expect(offersData.reducer(state, {type: fetchFavoriteOffersAction.pending.type}))
        .toEqual({...state, reloadFavorites: true});
    });

    it('should add favorites offers to state, change downloading status to false', () => {
      expect(offersData.reducer(state, {type: fetchFavoriteOffersAction.fulfilled.type, payload: offersMock}))
        .toEqual({...state, favoriteOffers: offersMock, reloadFavorites: false});
    });

    it('should add favorites offers to state', () => {
      expect(offersData.reducer(state, {type: fetchFavoriteOffersAction.rejected.type}))
        .toEqual({...state, reloadFavorites: false});
    });
  });

  describe('changeFavoriteStatusAction test', () => {
    it('should change favorites offers', () => {
      state = {
        ...state,
        favoriteOffers: offersMock
      };
      const favoritesOffers = offersMock.slice(1);
      const offer = {
        ...offersMock[0],
        isFavorite: false
      };
      expect(offersData.reducer(state, {type: changeFavoriteStatusAction.fulfilled.type, payload: offer}))
        .toEqual({...state, favoriteOffers: favoritesOffers, offer});
    });
  });
});

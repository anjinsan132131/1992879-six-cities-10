import { State } from '../../types/state';
import { NameSpace } from '../../constans';
import { Offer } from '../../types/offer-type';
import { Review } from '../../types/review-type';

export const getSelectedCity = (state: State): string => state[NameSpace.Data].city;
export const getSortValue = (state: State): string => state[NameSpace.Data].sortValue;
export const getAllOffers = (state: State): Offer[] => state[NameSpace.Data].allOffers;
export const getOffersByChoosenCity = (state: State): Offer[] => state[NameSpace.Data].offersByCity;
export const getIsDataLoadedValue = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getOffer = (state: State): Offer | null => state[NameSpace.Data].offer;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
export const getLoadingError = (state: State): boolean => state[NameSpace.Data].isLoadingError;

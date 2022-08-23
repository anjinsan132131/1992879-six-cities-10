import dayjs from 'dayjs';
import { AuthorizationStatus, randomCity, SORTING } from './constans';
import { Offer } from './types/offer-type';
import { Review } from './types/review-type';

export const getOffersByCity = (offers: Offer[], city: string) => offers.filter((offer) => offer.city.name === city);

export const getSortedOffers = (offers: Offer[], currentSort: string) => {
  switch (currentSort) {
    case SORTING.POPULAR:
      return offers;

    case SORTING.PRICE_LOW_TO_HIGH:
      return offers.sort((offerA, offerB) => (
        offerA.price - offerB.price
      ));

    case SORTING.PRICE_HIGH_TO_LOW:
      return offers.sort((offerA, offerB) => (
        offerB.price - offerA.price
      ));

    case SORTING.TOP_RATED_FIRST:
      return offers.sort((offerA, offerB) => (
        offerB.rating - offerA.rating
      ));

    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const validatePassword = (password: string) => {

  if (!password) {
    return false;
  }

  const regPassword = /(?=.*[0-9])/;

  return password.search(regPassword) > -1;
};

export const isAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;

export const sortReviewBydata = (a:Review, b:Review) => dayjs(b.date).diff(dayjs(a.date));

export const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomCity = () => randomCity[getRandomInteger(0, randomCity.length - 1)];

import { SORTING } from './constans';
import { Offer } from './types/offer-type';

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

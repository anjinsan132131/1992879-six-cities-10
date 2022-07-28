export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);

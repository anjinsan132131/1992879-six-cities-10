import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-data/selector';
import LocationItem from '../../components/location-item/location-item';
import CardList from '../../components/card-list/card-list';
import { CardType } from '../../constans';
import React from 'react';
import classNames from 'classnames';
import FavoritesNotFound from '../../components/favoritse-not-found/favorites-not-found';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersObject = Object.fromEntries(favoriteOffers.map(
    (offer) => [offer.city.name, favoriteOffers.filter((favoriteOffer) => favoriteOffer.city.name === offer.city.name)]
  ));

  const mainPageClass = classNames('page__main page__main--favorites',
    {
      'page__main--favorites-empty': !favoriteOffers.length,
    });

  const sectionClass = classNames('favorites',
    {
      'favorites--empty': !favoriteOffers.length,
    });

  return (
    <div className="page">
      <Header isNavVisible/>

      <main className={mainPageClass}>
        <div className="page__favorites-container container">
          <section className={sectionClass}>
            {favoriteOffers.length ? (
              <React.Fragment>
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.keys(favoriteOffersObject).map((item) => (
                    <li key={item} className="favorites__locations-items">
                      <LocationItem city={item} />
                      <CardList offers={favoriteOffersObject[item]} type={CardType.FAVORITES} />
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ) : (
              <FavoritesNotFound />
            )}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;

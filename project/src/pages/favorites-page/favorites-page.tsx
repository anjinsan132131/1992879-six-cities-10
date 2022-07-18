import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';
import Footer from '../../components/footer/footer';
import { CardType } from '../../constans';
import { HotelOffer } from '../../types/hotel-type';
import CardList from '../../components/card-list/card-list';

type FavoritesPageProps = {
  offers: HotelOffer[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header isNavVisible/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <LocationItem/>
                <CardList offers={offers} type={CardType.FAVORITES}/>
              </li>

              <li className="favorites__locations-items">
                <LocationItem/>
                <CardList offers={offers} type={CardType.FAVORITES}/>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;

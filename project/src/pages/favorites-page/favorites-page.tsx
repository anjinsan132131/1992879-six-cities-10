import Header from '../../components/header/header';
import LocationItem from '../../components/location-item/location-item';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import { CardType } from '../../constans';

function FavoritesPage(): JSX.Element {
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
                <div className="favorites__places">
                  <Card type={CardType.FAVORITES}/>
                  <Card type={CardType.FAVORITES}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <LocationItem/>
                <div className="favorites__places">
                  <Card type={CardType.FAVORITES}/>
                </div>
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

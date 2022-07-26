import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { CardType } from '../../constans';
import { Offer } from '../../types/offer-type';
import CardList from '../../components/card-list/card-list';
import { Cities } from '../../constans';
import { useAppSelector } from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import classNames from 'classnames';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({offers}: MainPageProps): JSX.Element {
  const offersByCity = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);

  const mainPageClass = classNames('page__main page__main--index',
    {
      'page__main--index-empty': !offersByCity.length,
    });

  return (
    <div className="page page--gray page--main">
      <Header isNavVisible/>

      <main className={mainPageClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cityList={Cities} currentCity={currentCity}/>
        </div>
        <div className="cities">
          {offersByCity.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
                <Sorting/>
                <CardList offers={offersByCity} type={CardType.CITIES}/>
              </section>
              <div className="cities__right-section">
                <Map selectedOffer = {offersByCity[0]}
                  offers = {offersByCity}
                />
              </div>
            </div>
          ) : (
            <MainEmpty city={currentCity}/>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

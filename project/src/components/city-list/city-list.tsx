import { SORTING } from '../../constans';
import { useAppDispatch } from '../../hooks';
import { selectCityAction, setOffersByCityAction, sortValueAction } from '../../store/offers-data/offers-data';
import City from '../city/city';

type CityListProps = {
  cityList: Record<string, string>;
  currentCity: string;
}

function CityList({cityList, currentCity}: CityListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (city: string) => {
    dispatch(selectCityAction(city));
    dispatch(setOffersByCityAction());
    dispatch(sortValueAction(SORTING.POPULAR));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(cityList).map((city) => (
          <City key={city} city={city} onClick={onCityClick} currentCity={currentCity}/>
        ))}
      </ul>
    </section>
  );
}

export default CityList;


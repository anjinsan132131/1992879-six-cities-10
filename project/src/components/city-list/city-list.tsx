import { useAppDispatch } from '../../hooks';
import { selectCityAction, setOffersByCityAction } from '../../store/action';
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


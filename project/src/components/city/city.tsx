import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CityProps = {
  city: string;
  currentCity: string;
  onClick: (city: string) => void;
}

function City({city, currentCity, onClick}: CityProps): JSX.Element {
  const cityClass = classNames('locations__item-link tabs__item',
    {
      'tabs__item--active': city === currentCity
    });

  return (
    <li
      className="locations__item"
      onClick={() => onClick(city)}
    >
      <Link
        className={cityClass}
        to={`?tab=${city}`}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default City;


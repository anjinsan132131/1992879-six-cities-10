import classNames from 'classnames';
import { Link } from 'react-router-dom';

type CityItemProps = {
  city: string;
  currentCity: string;
  onClick: (city: string) => void;
}

function CityItem({city, currentCity, onClick}: CityItemProps): JSX.Element {
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
        to='#'
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;


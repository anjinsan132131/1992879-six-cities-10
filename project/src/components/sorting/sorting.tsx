import { useState } from 'react';
import { SORTING_OPTION } from '../../constans';
// import { Offer } from '../../types/offer-type';
import SortingItem from '../sorting-item/sorting-item';


function Sorting(): JSX.Element {
  const [currentSort, setCurrentSort] = useState<string>(SORTING_OPTION[0]);

  const onSortingClick = (value: string) => {
    setCurrentSort(value);
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_OPTION.map((value) => (
          <SortingItem key={value} onClick={onSortingClick} value={value} sortValue={''}/>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;

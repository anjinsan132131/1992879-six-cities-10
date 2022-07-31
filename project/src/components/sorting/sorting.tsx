import { useState } from 'react';
import { SORTING } from '../../constans';
import SortingItem from '../sorting-item/sorting-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortValueAction, sortingCityAction } from '../../store/action';

function Sorting(): JSX.Element {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const dispatch = useAppDispatch();

  const currentSort = useAppSelector((state) => state.sortValue);

  const clickHandler = () => {
    setIsFormOpened(!isFormOpened);
  };

  const onSortingClick = (value: string) => {
    dispatch(sortValueAction(value));
    dispatch(sortingCityAction());
    setIsFormOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={clickHandler} className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isFormOpened && 'places__options--opened'}`}>
        {Object.values(SORTING).map((value) => (
          <SortingItem key={value} onClick={onSortingClick} value={value} sortValue={''}/>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;

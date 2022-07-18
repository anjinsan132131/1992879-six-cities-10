import { HotelOffer } from '../../types/hotel-type';
import Card from '../card/card';
import classNames from 'classnames';
import { CardType } from '../../constans';
import {useState} from 'react';

type CardListProps = {
  type: string;
  offers: HotelOffer[];
}

function CardList({type, offers}: CardListProps): JSX.Element {
  const [cardId, setCardId] = useState<number>();

  const onMouseOver = (id: number) => setCardId(id);
  // eslint-disable-next-line no-console
  console.log('cardId', cardId);

  const cardListClass = classNames(
    {
      'favorites__places': type === CardType.FAVORITES,
      'cities__places-list places__list tabs__content': type === CardType.CITIES,
      'near-places__list places__list': type === CardType.NEAR_PLACES,
    });

  return (
    <div className={cardListClass}>
      {offers.map((offer) => (<Card key={offer.id} cardType={type} offer={offer} onMouseOver={onMouseOver}/>))}
    </div>
  );
}

export default CardList;

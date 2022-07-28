import { Offer } from '../../types/offer-type';
import Card from '../card/card';
import classNames from 'classnames';
import { CardType } from '../../constans';
import { useState } from 'react';

type CardListProps = {
  type: string;
  offers: Offer[];
}

function CardList({type, offers}: CardListProps): JSX.Element {
  const [, setCardId] = useState<number>();

  const onMouseOver = (id: number) => setCardId(id);

  const cardListClass = classNames(
    {
      'favorites__places': type === CardType.FAVORITES,
      'cities__places-list places__list tabs__content': type === CardType.CITIES,
      'near-places__list places__list': type === CardType.NEAR_PLACES,
    });

  return (
    <div className={cardListClass}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          cardType={type}
          offer={offer}
          onMouseOver={onMouseOver}
        />
      ))}
    </div>
  );
}

export default CardList;

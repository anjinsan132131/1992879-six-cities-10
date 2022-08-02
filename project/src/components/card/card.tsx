import { Link } from 'react-router-dom';
import { CardType, AppRoute, COEFFICIENT_REVIEW_RATING } from '../../constans';
import classNames from 'classnames';
import { Offer } from '../../types/offer-type';

type CardProps = {
  cardType: string;
  offer: Offer;
  onMouseOver: (cardId: number) => void;
  onMouseLeave: () => void;
}

function Card({cardType, offer, onMouseOver, onMouseLeave}: CardProps): JSX.Element {
  const { id, rating, price, title, type, isPremium, previewImage, isFavorite } = offer;
  const cardRating = rating / COEFFICIENT_REVIEW_RATING;

  const articleClass = classNames('place-card',
    {
      'favorites__card': cardType === CardType.FAVORITES,
      'cities__card': cardType === CardType.CITIES,
      'near-places__card': cardType === CardType.NEAR_PLACES,
    });

  const imageClass = classNames('place-card__image-wrapper',
    {
      'favorites__image-wrapper': cardType === CardType.FAVORITES,
      'cities__image-wrapper': cardType === CardType.CITIES,
      'near-places__image-wrapper': cardType === CardType.NEAR_PLACES,
    });

  return (
    <article className={articleClass} onMouseOver={() => onMouseOver?.(id)} onMouseLeave={() => onMouseLeave?.()}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ''}

      <div className={imageClass}>
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width={cardType === CardType.FAVORITES ? '150' : '260'} height={cardType === CardType.FAVORITES ? '110' : '200'} alt="Place" />
        </Link>
      </div>
      <div className={classNames('place-card__info',
        {'favorites__card-info': cardType === CardType.FAVORITES})}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames('button place-card__bookmark-button',
              {
                'place-card__bookmark-button--active': isFavorite
              })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${cardRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;

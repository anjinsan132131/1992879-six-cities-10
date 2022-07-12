import { CardType } from '../../constans';
import classNames from 'classnames';

type CardProps = {
  type: string;
}

function Card({type}: CardProps): JSX.Element {
  return (
    <article className={classNames('place-card',
      {
        'favorites__card': type === CardType.FAVORITES,
        'cities__card': type === CardType.CITIES,
        'near-places__card': type === CardType.NEAR_PLACES,

      })}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={classNames('place-card__image-wrapper',
        {
          'favorites__image-wrapper': type === CardType.FAVORITES,
          'cities__image-wrapper': type === CardType.CITIES,
          'near-places__image-wrapper': type === CardType.NEAR_PLACES,

        })}
      >
        <a href="/">
          <img className="place-card__image" src="img/room.jpg" width={type === CardType.FAVORITES ? '150' : '260'} height={type === CardType.FAVORITES ? '110' : '200'} alt="Place" />
        </a>
      </div>
      <div className={classNames('place-card__info',
        {'favorites__card-info': type === CardType.FAVORITES})}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;80</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">Wood and stone place</a>
        </h2>
        <p className="place-card__type">Private room</p>
      </div>
    </article>
  );
}

export default Card;

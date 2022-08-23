import { AppRoute, AuthorizationStatus, CardType, COEFFICIENT_REVIEW_RATING } from '../../constans';
import { Offer } from '../../types/offer-type';
import CardList from '../card-list/card-list';
import ReviewForm from '../review-form/review-form';
import { Review } from '../../types/review-type';
import ReviewList from '../review-list/review-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { changeFavoriteStatusAction } from '../../store/api-action';
import classNames from 'classnames';

type RoomProps = {
  offer: Offer,
  nearOffers: Offer[];
  reviews: Review[];
}

function Room({ nearOffers, reviews, offer }: RoomProps): JSX.Element {
  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const { images, id, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, isFavorite } = offer;
  const reviewRating = rating / COEFFICIENT_REVIEW_RATING;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    (isAuth) ?
      dispatch(changeFavoriteStatusAction({
        id,
        status: isFavorite ? 0 : 1
      }))
      : navigate(AppRoute.Login);
  };

  const favoriveIconClass = classNames('property__bookmark-icon',
    {
      'place-card__bookmark-icon': isFavorite,
    });

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              images.map((image, i) => (
                <div key={`${id}-${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div> : null}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button property__bookmark-button--active button" type="button" onClick={handleClick}>
                <svg className={favoriveIconClass} width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${reviewRating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  goods.map((good) => (
                    <li key={`${id}-${good}`} className="property__inside-item">
                      {good}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {
                  host.isPro ?
                    <span className="property__user-status">
                        Pro
                    </span> : null
                }
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewList reviews={reviews}/>
              { isAuth ? <ReviewForm /> : ''}
            </section>
          </div>
        </div>
        <section className="property__map map">
          { nearOffers ? <Map offers={[...nearOffers, offer]} selectedOffer={offer}/> : ''}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardList offers={nearOffers} type={CardType.NEAR_PLACES}/>
        </section>
      </div>
    </main>
  );
}

export default Room;

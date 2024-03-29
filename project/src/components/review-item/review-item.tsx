import dayjs from 'dayjs';
import { COEFFICIENT_REVIEW_RATING, FORMAT_DATE_TIME, FORMAT_RREVIEW_DATE } from '../../constans';
import { Review } from '../../types/review-type';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const { comment, date, rating, user } = review;

  const reviewRating = rating / COEFFICIENT_REVIEW_RATING;
  const reviewDate = dayjs(date).format(FORMAT_RREVIEW_DATE);
  const dateTime = dayjs(date).format(FORMAT_DATE_TIME);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${reviewRating}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{reviewDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;

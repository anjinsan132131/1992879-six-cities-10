import React, { ChangeEvent, useState, Fragment } from 'react';
import { RATING_DATA } from '../../constans';

type ReviewStateData = {
  rating: string;
  review: string;
}

function ReviewForm(): JSX.Element {
  const [reviewData, setReviewData] = useState<ReviewStateData>({review: '', rating: ''});

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) =>{
    setReviewData({
      ...reviewData,
      review: event.target.value
    });
  };

  const onStarChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setReviewData({
      ...reviewData,
      review: event.target.value
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        { RATING_DATA.map(({rating, value}) => (
          <Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating" value={rating}
              id={`${rating}-stars`}
              type="radio"
              onChange={onStarChange}
            />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={value}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

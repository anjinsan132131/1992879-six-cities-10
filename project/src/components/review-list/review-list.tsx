import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/review-type';
import { sortReviewBydata } from '../../utils';
import { MAX_REVIEW_QUANTITY } from '../../constans';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  const sortedReviews = [...reviews].sort(sortReviewBydata).slice(0, MAX_REVIEW_QUANTITY);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((element) => (
        <ReviewItem key={element.id} review={element}/>
      ))}
    </ul>
  );
}

export default ReviewList;

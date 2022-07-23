import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/review-type';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((element) => (
        <ReviewItem key={element.id} review={element}/>
      ))}
    </ul>
  );
}

export default ReviewList;

import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/review-type';
import dayjs from 'dayjs';

const sortReviewBydata = (a:Review, b:Review) => dayjs(b.date).diff(dayjs(a.date));

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {[...reviews].sort(sortReviewBydata).slice(0, 10).map((element) => (
        <ReviewItem key={element.id} review={element}/>
      ))}
    </ul>
  );
}

export default ReviewList;

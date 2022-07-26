import Header from '../../components/header/header';
import Room from '../../components/room/room';
import { Offer } from '../../types/offer-type';
import { Review } from '../../types/review-type';


type RoomPageProps = {
  offers: Offer[];
  reviews: Review[];
}

function RoomPage({offers, reviews}: RoomPageProps): JSX.Element {
  return (
    <div className="page">
      <Header isNavVisible/>
      <Room offers={offers} reviews={reviews} />
    </div>
  );
}

export default RoomPage;

import Header from '../../components/header/header';
import Room from '../../components/room/room';
import { Offer } from '../../types/offer-type';

type RoomPageProps = {
  offers: Offer[];
}

function RoomPage({offers}: RoomPageProps): JSX.Element {
  return (
    <div className="page">
      <Header isNavVisible/>
      <Room offers={offers}/>
    </div>
  );
}

export default RoomPage;

import Header from '../../components/header/header';
import Room from '../../components/room/room';
import { HotelOffer } from '../../types/hotel-type';

type RoomPageProps = {
  offers: HotelOffer[];
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

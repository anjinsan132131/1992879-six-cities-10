import Header from '../../components/header/header';
import Room from '../../components/room/room';

function RoomPage(): JSX.Element {
  return (
    <div className="page">
      <Header isNavVisible/>
      <Room/>
    </div>
  );
}

export default RoomPage;

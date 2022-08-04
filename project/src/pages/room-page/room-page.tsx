// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Room from '../../components/room/room';
// import { APIRoute, AppRoute, AuthorizationStatus } from '../../constans';
// import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchReviewsAction, fetchNearOfferAction, fetchOfferAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PageNotFound from '../page-not-found/page-not-found';

function RoomPage(): JSX.Element {
  const { id } = useParams();
  const offer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!offer || offer?.id !== Number(id)) {
      dispatch(fetchOfferAction(id as string));
      dispatch(fetchNearOfferAction(id as string));
      dispatch(fetchReviewsAction(id as string));
    }
  }, [id, dispatch]);

  if (!offer) {
    return <PageNotFound />;
  }


  return (
    <div className="page">
      <Header isNavVisible/>
      {offer ? <Room offer={offer} nearOffers={nearOffers} reviews={reviews}/> : ''}
    </div>
  );
}

export default RoomPage;

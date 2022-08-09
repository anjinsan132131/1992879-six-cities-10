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
import { getNearOffers, getOffer, getReviews } from '../../store/offers-data/selector';

function RoomPage(): JSX.Element {
  const { id } = useParams();
  const offer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);
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

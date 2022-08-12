import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Room from '../../components/room/room';
import { useEffect } from 'react';
import { fetchReviewsAction, fetchNearOfferAction, fetchOfferAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PageNotFound from '../page-not-found/page-not-found';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function RoomPage(): JSX.Element {
  const { id } = useParams() as { id: string };
  const offer = useAppSelector((state) => state.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const isLoadingError = useAppSelector((state) => state.isLoadingError);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!offer || offer?.id !== Number(id)) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearOfferAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, offer, dispatch]);

  if (id && (offer === null || offer.id !== Number(id))) {
    if (isLoadingError) {
      return <PageNotFound />;
    }

    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header isNavVisible/>
      {offer ? <Room offer={offer} nearOffers={nearOffers} reviews={reviews}/> : ''}
    </div>
  );
}

export default RoomPage;

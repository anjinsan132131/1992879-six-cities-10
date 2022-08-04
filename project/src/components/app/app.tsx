import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constans';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../../components/private-route/private-route';
import { Offer } from '../../types/offer-type';
import { Review } from '../../types/review-type';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { browserHistory } from '../../browser-history';
import { HistoryRouter } from '../history-route/history-route';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
};

function App({offers, reviews }: AppProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage offers={offers} reviews={reviews} />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

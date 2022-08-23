import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constans';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../../components/private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getIsDataLoadedValue } from '../../store/offers-data/selector';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getIsDataLoadedValue);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Room}
        element={<RoomPage/>}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;

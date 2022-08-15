import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';
import { ReviewMock } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFavoriteOffersAction, fetchHotelsAction } from './store/api-action';
import {ToastContainer} from 'react-toastify';

store.dispatch(checkAuthAction());
store.dispatch(fetchHotelsAction());
store.dispatch(fetchFavoriteOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        offers = {OffersMock}
        reviews = {ReviewMock}
        type = {''}
      />
    </Provider>
  </React.StrictMode>,
);

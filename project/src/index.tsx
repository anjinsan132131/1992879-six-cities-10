import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';
import { ReviewMock } from './mocks/review';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchHotelsnAction } from './store/api-action';

store.dispatch(fetchHotelsnAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {OffersMock}
        reviews = {ReviewMock}
      />
    </Provider>
  </React.StrictMode>,
);

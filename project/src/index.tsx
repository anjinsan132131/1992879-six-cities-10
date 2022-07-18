import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HotelOffersMock } from './mocks/offers';

const Settings = {
  QUANTITY: 5
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      quantity = {Settings.QUANTITY}
      offers = {HotelOffersMock}
    />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';
import { ReviewMock } from './mocks/review';

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
      offers = {OffersMock}
      reviews = {ReviewMock}
    />
  </React.StrictMode>,
);

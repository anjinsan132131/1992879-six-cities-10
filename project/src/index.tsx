import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
);

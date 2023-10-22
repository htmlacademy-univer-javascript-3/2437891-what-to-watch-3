import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/app';
import { promo } from './mock/promoFilm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      {...promo}
    />
  </React.StrictMode>
);

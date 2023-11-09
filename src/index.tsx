import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/app';
import { promo } from './mocks/promoFilm';
import { films } from './mocks/films';
import { video } from './mocks/video';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoInfo={promo}
      films={films}
      videoUrl={video}
    />
  </React.StrictMode>
);

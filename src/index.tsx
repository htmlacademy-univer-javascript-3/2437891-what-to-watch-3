import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/app';
import { promo } from './mocks/promoFilm';
import { films } from './mocks/films';
import { video } from './mocks/video';
import { store } from './store';
// import { ErrorMessage } from './components/error-message';
// import { checkAuth } from './store/api-actions';

// store.dispatch(checkAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      promoInfo={promo}
      films={films}
      videoUrl={video}
      store={store}
    />
    {/* <ErrorMessage/> */}
  </React.StrictMode>
);

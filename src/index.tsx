import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/app';
import { films } from './mocks/films';
import { store } from './store';
import { checkAuth } from './store/api-actions';

store.dispatch(checkAuth());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={films}
      store={store}
    />
  </React.StrictMode>
);

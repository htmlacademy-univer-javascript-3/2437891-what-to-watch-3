import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './components/app';

// eslint-disable-next-line react-refresh/only-export-components
const Settings = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
  ImapePath: 'img/bg-the-grand-budapest-hotel.jpg',
  PosterImagePath: 'img/the-grand-budapest-hotel-poster.jpg'
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      title = {Settings.Title}
      genre = {Settings.Genre}
      year = {Settings.Year}
      imapePath = {Settings.ImapePath}
      posterImagePath = {Settings.PosterImagePath}
    />
  </React.StrictMode>
);

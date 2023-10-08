import ReactDOM from 'react-dom/client';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    title='The Grand Budapest Hotel'
    genre='Drama'
    year={2014}
    imapePath='img/bg-the-grand-budapest-hotel.jpg'
    posterImagePath='img/the-grand-budapest-hotel-poster.jpg'
  />
);

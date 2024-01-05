import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages/main/main';
import { AppRoute } from '../const';
import { SignIn } from '../pages/sign-in/sign-in';
import { MyList } from '../pages/my-list/my-list';
import { MoviePage } from '../pages/movie-page/movie-page';
import { AddReview } from '../pages/add-review/add-review';
import { Player } from '../pages/player/player';
import { NotFound } from '../pages/not-found/not-found';
import { PrivateRoute } from './private-route';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { Provider } from 'react-redux';
import { Film, Promo } from '../types';

export type AppProps = {
  promoInfo: Promo;
  films: Film[];
  videoUrl: string;
  store: ToolkitStore;
}

export function App({promoInfo, films, videoUrl, store}: AppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList films={films}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={
              <MoviePage
                films={films.slice(0, 4)}
                filmInfo={promoInfo}
              />
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <AddReview
                id={1}
                title={promoInfo.name}
                imapePath={promoInfo.backgroundImage}
                posterImagePath={promoInfo.posterImage}
              />
            }
          />
          <Route
            path={AppRoute.Player}
            element={<Player videoUrl={videoUrl}/>}
          />
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../pages/main/main';
import type { PromoInfo } from '../pages/main/main';
import { AppRoute, AuthorizationStatus } from './const';
import { SignIn } from '../pages/sign-in/sign-in';
import { MyList } from '../pages/my-list/my-list';
import { MoviePage } from '../pages/movie-page/movie-page';
import { AddReview } from '../pages/add-review/add-review';
import { Player } from '../pages/player/player';
import { NotFound } from '../pages/not-found/not-found';
import { PrivateRoute } from './private-route';
import { CardInfo } from './films/small-film-card';

export type AppProps = {
  promoInfo: PromoInfo;
  films: CardInfo[];
  videoUrl: string;
}

export function App({promoInfo, films, videoUrl}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main {...promoInfo}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
              title={promoInfo.title}
              imapePath={promoInfo.imapePath}
              posterImagePath={promoInfo.posterImagePath}
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
  );
}

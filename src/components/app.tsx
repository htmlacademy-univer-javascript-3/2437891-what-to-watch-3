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

export function App(props: PromoInfo) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main {...props} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

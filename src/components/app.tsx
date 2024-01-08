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
import { Film } from '../types';

export type AppProps = {
  films: Film[];
  videoUrl: string;
  store: ToolkitStore;
}

export function App({films, videoUrl, store}: AppProps) {
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
              <MoviePage/>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReview/>
              </PrivateRoute>
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

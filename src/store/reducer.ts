import {createReducer} from '@reduxjs/toolkit';
import { setGenre, showDefaultCountFilms, showMoreFilms } from './action';
import { films } from '../mocks/films';

const defaultFilmsCount = 8;

const initialState = {
  genre: 'All genres',
  films: films,
  filmsCount: defaultFilmsCount
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.filmsCount = defaultFilmsCount;
      state.genre = action.payload;
      const genre = state.genre;
      if (genre === 'All genres') {
        state.films = films;
      } else {
        state.films = films.filter((f) => f.genre === genre);
      }
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += 8;
    })
    .addCase(showDefaultCountFilms, (state) => {
      state.filmsCount = defaultFilmsCount;
    });
});

import {createReducer} from '@reduxjs/toolkit';
import { setGenre } from './action';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
    const genre = state.genre;
    if (genre === 'All genres') {
      state.films = films;
    } else {
      state.films = films.filter((f) => f.genre === genre);
    }
  });
});

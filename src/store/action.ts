import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SET_GENRE: 'SET_GENRE',
  SHOW_MORE_FILMS: 'SHOW_MORE_FILMS',
  SHOW_DEFAULT_COUNT_FILMS: 'SHOW_DEFAULT_COUNT_FILMS'
};

export const setGenre = createAction(Action.SET_GENRE,
  (value: string) => ({
    payload: value
  })
);

export const showMoreFilms = createAction(Action.SHOW_MORE_FILMS);

export const showDefaultCountFilms = createAction(Action.SHOW_DEFAULT_COUNT_FILMS);

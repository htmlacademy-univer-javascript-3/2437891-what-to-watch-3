import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SET_GENRE: 'SET_GENRE'
};

export const setGenre = createAction(Action.SET_GENRE,
  (value: string) => ({
    payload: value
  })
);

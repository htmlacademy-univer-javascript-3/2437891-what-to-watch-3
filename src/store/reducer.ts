import {createReducer} from '@reduxjs/toolkit';
import { loadFilms, loadPromo, requireAuthorization, setError, setFilmsDataLoadingStatus, setGenre, setPromoDataLoadingStatus, setUserInfo, showDefaultCountFilms, showMoreFilms } from './actions';
import { Film, Promo, UserData } from '../types';
import { AuthorizationStatus } from '../const';

const defaultFilmsCount = 8;

type InitialState = {
  genre: string;
  allFilms: Film[];
  films: Film[];
  filmsCount: number;
  isFilmsDataLoading: boolean;
  promo: Promo | null;
  isPromoDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
  error: string | null;
}

const initialState: InitialState = {
  genre: 'All genres',
  allFilms: [],
  films: [],
  filmsCount: defaultFilmsCount,
  isFilmsDataLoading: false,
  promo: null,
  isPromoDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.filmsCount = defaultFilmsCount;
      state.genre = action.payload;
      const genre = state.genre;
      if (genre === 'All genres') {
        state.films = state.allFilms;
      } else {
        state.films = state.allFilms.filter((f) => f.genre === genre);
      }
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += 8;
    })
    .addCase(showDefaultCountFilms, (state) => {
      state.filmsCount = defaultFilmsCount;
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.films = state.allFilms;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setPromoDataLoadingStatus, (state, action) => {
      state.isPromoDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

import {createReducer} from '@reduxjs/toolkit';
import { loadComments, loadFilm, loadFilms, loadMyFilms, loadPromo, loadSimilarFilms,
  requireAuthorization, setCreatingCommentStatus, setDataLoadingStatus, setError, setGenre, setMyFilmsCount, setUserInfo,
  showDefaultCountFilms, showMoreFilms } from './actions';
import { Comment, Film, FilmInfo, Promo, UserData } from '../types';
import { AuthorizationStatus } from '../const';

const defaultFilmsCount = 8;

type InitialState = {
  genre: string;
  allFilms: Film[];
  films: Film[];
  filmsCount: number;
  isDataLoading: boolean;
  promo: Promo | null;
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
  error: string | null;
  currentFilm: FilmInfo | null;
  similarFilms: Film[];
  comments: Comment[];
  isCommentCreated: boolean;
  myFilms: Film[];
  myFilmsCount: number;
}

const initialState: InitialState = {
  genre: 'All genres',
  allFilms: [],
  films: [],
  filmsCount: defaultFilmsCount,
  isDataLoading: false,
  promo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  error: null,
  currentFilm: null,
  similarFilms : [],
  comments: [],
  isCommentCreated: false,
  myFilms: [],
  myFilmsCount: 0
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.slice(0, 4);
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCreatingCommentStatus, (state, action) => {
      state.isCommentCreated = action.payload;
    })
    .addCase(loadMyFilms, (state, action) => {
      state.myFilms = action.payload;
    })
    .addCase(setMyFilmsCount, (state, action) => {
      state.myFilmsCount = action.payload;
    });
});

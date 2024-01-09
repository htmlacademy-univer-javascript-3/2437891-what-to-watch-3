import { createAction } from '@reduxjs/toolkit';
import { Comment, Film, FilmInfo, Promo, UserData } from '../types';
import { AuthorizationStatus } from '../const';

export const setGenre = createAction<string>('genre/set');

export const showMoreFilms = createAction('films/showMore');

export const showDefaultCountFilms = createAction('films/showDefaultCount');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const loadPromo = createAction<Promo>('data/loadPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('info/setError');

export const setUserInfo = createAction<UserData | null>('user/setInfo');

export const loadFilm = createAction<FilmInfo | null>('data/loadFilm');

export const loadSimilarFilms = createAction<Film[]>('data/loadSimilarFilms');

export const loadComments = createAction<Comment[]>('data/loadComments');

export const setCreatingCommentStatus = createAction<boolean>('data/setCreatingCommentStatus');

export const loadMyFilms = createAction<Film[]>('data/loadMyFilms');

export const setMyFilmsCount = createAction<number>('data/setMyFilmsCount');

import { createAction } from '@reduxjs/toolkit';
import { Film, Promo, UserData } from '../types';
import { AuthorizationStatus } from '../const';

export const setGenre = createAction<string>('genre/set');

export const showMoreFilms = createAction('films/showMore');

export const showDefaultCountFilms = createAction('films/showDefaultCount');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const loadPromo = createAction<Promo>('data/loadPromo');

export const setPromoDataLoadingStatus = createAction<boolean>('data/setPromoDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('info/setError');

export const setUserInfo = createAction<UserData | null>('user/setInfo');

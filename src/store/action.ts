import { createAction } from '@reduxjs/toolkit';
import { Film, Promo } from '../types';

export const setGenre = createAction<string>('genre/set');

export const showMoreFilms = createAction('films/showMore');

export const showDefaultCountFilms = createAction('films/showDefaultCount');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const loadPromo = createAction<Promo>('data/loadPromo');

export const setPromoDataLoadingStatus = createAction<boolean>('data/setPromoDataLoadingStatus');

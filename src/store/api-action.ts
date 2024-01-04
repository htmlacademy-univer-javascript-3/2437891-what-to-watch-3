import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './types';
import { APIRoute } from '../const';
import { Film, Promo } from '../types';
import { loadFilms, loadPromo, setFilmsDataLoadingStatus, setPromoDataLoadingStatus } from './action';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  }
);

export const fetchPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setPromoDataLoadingStatus(true));
    const {data} = await api.get<Promo>(APIRoute.Promo);
    dispatch(setPromoDataLoadingStatus(false));
    dispatch(loadPromo(data));
  }
);

import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './types';
import { APIRoute, AuthorizationStatus, TIMEOUT_CREATE_COMMENT, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData, Comment, CreateCommentRequest, Film, FilmInfo, Promo, UserData } from '../types';
import { loadComments, loadFilm, loadFilms, loadMyFilms, loadPromo, loadSimilarFilms, requireAuthorization, setCreatingCommentStatus, setDataLoadingStatus, setError, setMyFilmsCount, setUserInfo } from './actions';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
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
    const {data} = await api.get<Promo>(APIRoute.Promo);
    dispatch(loadPromo(data));
  }
);

export const fetchFilmInfo = createAsyncThunk<void,
{
  id: string;
  isEndOfDataLoading: boolean;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmInfo',
  async ({id, isEndOfDataLoading}, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    try {
      dispatch(loadFilm(null));
      const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${id}`);
      dispatch(loadFilm(data));
    } catch {
      dispatch(loadFilm(null));
    }
    if (isEndOfDataLoading) {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const fetchSimilarFilms = createAsyncThunk<void,
{
  id: string;
  isEndOfDataLoading: boolean;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({id, isEndOfDataLoading}, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
    if (isEndOfDataLoading) {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const fetchComments = createAsyncThunk<void,
{
  id: string;
  isEndOfDataLoading: boolean;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({id, isEndOfDataLoading}, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
    if (isEndOfDataLoading) {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const fetchMyFilms = createAsyncThunk<void,
{
  isEndOfDataLoading: boolean;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMyFilms',
  async ({isEndOfDataLoading}, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(loadMyFilms(data));
    dispatch(setMyFilmsCount(data.length));
    if (isEndOfDataLoading) {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const changeFavoriteStatus = createAsyncThunk<void,
{
  id: string;
  status: number;
},
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeFavoriteStatus',
  async ({id, status}, {extra: api}) => {
    await api.post(`${APIRoute.Favorite}/${id}/${status}`);
  }
);

export const clearCreateCommentStatus = createAsyncThunk(
  'info/clearCreateCommentStatus',
  () => {
    setTimeout(
      () => store.dispatch(setCreatingCommentStatus(false)),
      TIMEOUT_CREATE_COMMENT
    );
  }
);

export const createComment = createAsyncThunk<void, CreateCommentRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/createComment',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    try {
      dispatch(setDataLoadingStatus(true));
      await api.post<Comment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      dispatch(setCreatingCommentStatus(true));
      dispatch(clearCreateCommentStatus());
    } finally {
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {

    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserInfo(data));
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  }
);

export const clearError = createAsyncThunk(
  'info/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

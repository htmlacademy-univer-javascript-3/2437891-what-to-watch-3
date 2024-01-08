import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './types';
import { APIRoute, AuthorizationStatus, TIMEOUT_CREATE_COMMENT, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData, Comment, CreateCommentRequest, Film, FilmInfo, Promo, UserData } from '../types';
import { loadComments, loadFilm, loadFilms, loadPromo, loadSimilarFilms, requireAuthorization, setCreatingCommentStatus, setDataLoadingStatus, setError, setUserInfo } from './actions';
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

export const fetchFilmInfo = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmInfo',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    try {
      dispatch(loadFilm(null));
      const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${filmId}`);
      dispatch(loadFilm(data));
    } catch {
      dispatch(loadFilm(null));
    }
    dispatch(setDataLoadingStatus(false));
  }
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(loadSimilarFilms(data));
  }
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadComments(data));
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

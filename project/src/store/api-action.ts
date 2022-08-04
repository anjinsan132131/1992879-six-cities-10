import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../constans';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Offer } from '../types/offer-type';
import { Review } from '../types/review-type';
import { UserData } from '../types/user-data';
import { loadHotelsAction, redirectToRoute, requireAuthorization, setDataLoadedStatus, setNearOfferAction, setOfferAction, setReviewAction, setUser } from './action';
import { AppDispatch, State } from './state';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadHotelsAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadHotelsAction(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setUser({user: data}));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setUser({user: data}));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
  );

export const fetchOfferAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchOffer',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer>(`/hotels/${id}`);
      dispatch(setDataLoadedStatus(true));
      dispatch(setOfferAction(data));
      dispatch(setDataLoadedStatus(false));
    }
  );

export const fetchNearOfferAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchOffer',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(`/hotels/${id}/nearby`);
      dispatch(setDataLoadedStatus(true));
      dispatch(setNearOfferAction(data));
      dispatch(setDataLoadedStatus(false));
    }
  );

export const fetchReviewsAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchOffer',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Review[]>(`/comments/${id}`);
      dispatch(setDataLoadedStatus(true));
      dispatch(setReviewAction(data));
      dispatch(setDataLoadedStatus(false));
    }
  );

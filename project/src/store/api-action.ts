import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../constans';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { CommentPostData } from '../types/comment-data';
import { FavoriteStatus } from '../types/favorite';
import { Offer } from '../types/offer-type';
import { Review } from '../types/review-type';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { AppDispatch, State } from './state';

export const fetchHotelsAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadHotelsAction',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      const { data } = await api.get(APIRoute.Login);
      return data;
    },
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
    },
  );

export const fetchOfferAction = createAsyncThunk<Offer, string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchOffer',
    async (id, {extra: api}) => {
      const {data} = await api.get<Offer>(`/hotels/${id}`);
      return data;
    }
  );

export const fetchNearOfferAction = createAsyncThunk<Offer[], string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchNearOffer',
    async (id, {extra: api}) => {
      const {data} = await api.get<Offer[]>(`/hotels/${id}/nearby`);
      return data;
    }
  );

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
  }>(
    'data/fetchReview',
    async (id, {extra: api}) => {
      const {data} = await api.get<Review[]>(`/comments/${id}`);
      return data;
    }
  );

export const addCommentAction = createAsyncThunk<Review[], CommentPostData, {
    dispatch: AppDispatch, state: State, extra: AxiosInstance
  }>(
    'addComment',
    async ({offerId, commentData}, {extra: api}) => {
      const { data } = await api.post<Review[]>(`${APIRoute.Comment}${offerId}`, commentData);
      return data;
    },
  );

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }>(
    'data/fetchFavoriteOffers',
    async (_arg, {extra: api}) => {
      const { data } = await api.get<Offer[]>(APIRoute.Favorites);
      return data;
    }
  );

export const changeFavoriteStatusAction = createAsyncThunk<Offer, FavoriteStatus, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
  }>(
    'data/changeFavoriteStatus',
    async ({id, status}, {dispatch, extra: api}) => {
      const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${id}`);
      dispatch(fetchFavoriteOffersAction());
      return data;
    },
  );

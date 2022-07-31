import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constans';
import { Offer } from '../types/offer-type';
import { loadHotelsAction, setDataLoadedStatus } from './action';
import { AppDispatch, State } from './state';

export const fetchHotelsnAction = createAsyncThunk<void, undefined, {
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

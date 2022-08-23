import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from './state';
import {Action} from 'redux';
import { checkAuthAction, fetchFavoriteOffersAction, fetchHotelsAction, fetchOfferAction, loginAction, logoutAction } from './api-action';
import { APIRoute } from '../constans';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { offersMock } from '../mocks/offers';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)

      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch fetchOffersAction when GET /hotels', async () => {
    const mockOffers = offersMock;

    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchHotelsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchHotelsAction.pending.type,
      fetchHotelsAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchOfferAction when GET /offer', async () => {
    const mockOffer = offersMock;

    mockAPI
      .onGet(`${APIRoute.Hotels}/1`)
      .reply(200, mockOffer);

    const store = mockStore();

    await store.dispatch(fetchOfferAction('1'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchFavoriteOffersAction when GET /favorites', async () => {
    mockAPI
      .onGet(APIRoute.Favorites)
      .reply(200, offersMock);

    const store = mockStore();

    await store.dispatch(fetchFavoriteOffersAction());
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type
    ]);
  });
});


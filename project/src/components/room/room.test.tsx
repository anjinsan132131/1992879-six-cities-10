import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../constans';
import { offersMock } from '../../mocks/offers';
import { HistoryRouter } from '../history-route/history-route';
import {render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { reviewMock } from '../../mocks/review';
import Room from './room';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockOffers = offersMock.slice(-1);

const store = mockStore({
  DATA: {
    isDataLoaded: false,
    offersByCity: mockOffers,
    favoriteOffers: mockOffers,
    offer: mockOffers[0],
    reviews: reviewMock,
    nearOffers: mockOffers
  },
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  OFFERS: {},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Room offer={mockOffers[0]} nearOffers={[]} reviews={[]} />
    </HistoryRouter>
  </Provider>
);

describe('Component: Room', () => {
  it('should render correctly', async () => {

    history.push('/offer/1');

    render(fakeApp);


    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});

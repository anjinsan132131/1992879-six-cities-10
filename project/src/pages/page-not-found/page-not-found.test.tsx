import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { HistoryRouter } from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../constans';
import { offersMock } from '../../mocks/offers';
import PageNotFound from './page-not-found';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: { isDataLoaded: false },
  USER: { authorizationStatus: AuthorizationStatus.NoAuth },
  OFFERS: { offers: offersMock },
});

describe('Component: PageNotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PageNotFound />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Back to home page')).toBeInTheDocument();
  });
});

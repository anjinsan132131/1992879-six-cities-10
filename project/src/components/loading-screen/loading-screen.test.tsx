import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import LoadingScreen from './loading-screen';

it('Component Loader: should render correctly', () => {
  render(
    <BrowserRouter >
      <LoadingScreen />
    </BrowserRouter>
  );

  expect(screen.getByText('Loading ...')).toBeInTheDocument();
});

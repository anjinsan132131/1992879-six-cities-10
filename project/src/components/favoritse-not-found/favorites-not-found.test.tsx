import FavoritesNotFound from './favorites-not-found';
import {render, screen} from '@testing-library/react';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesNotFound />);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});

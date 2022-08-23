import { render, screen } from '@testing-library/react';
import { Cities } from '../../constans';
import MainEmpty from './main-empty';

describe('CitiesEmpty test', () => {

  it('should render "CitiesEmpty" with name prop', async () => {
    render(<MainEmpty city={Cities.Cologne} />);
    expect(screen.getByText(`We could not find any property available at the moment in ${Cities.Cologne}`)).toBeInTheDocument();
  });
});

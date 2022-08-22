import { render, screen } from '@testing-library/react';
import LocationItem from './location-item';

describe('LocationsItem test', () => {
  it('should render "LocationsItem" with name prop', async () => {
    const locationTestName = 'test-name';

    render(<LocationItem city={locationTestName} />);

    expect(screen.getByText(locationTestName)).toBeInTheDocument();
  });
});

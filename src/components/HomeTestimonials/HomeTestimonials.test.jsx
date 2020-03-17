import React from 'react';
import { render } from '../../testUtils';
import HomeTestimonials from './HomeTestimonials';

describe('<HomeTestimonials />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<HomeTestimonials />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

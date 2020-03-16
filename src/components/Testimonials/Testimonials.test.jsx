import React from 'react';
import { render } from '../../testUtils';
import Testimonials from './Testimonials';

describe('<Testimonials />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Testimonials />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

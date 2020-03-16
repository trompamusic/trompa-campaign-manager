import React from 'react';
import { render } from '../../testUtils';
import Footer from './Footer';

describe('<Footer />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

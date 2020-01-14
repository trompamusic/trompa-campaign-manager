import React from 'react';
import { render } from '../../testUtils';
import AppbarTop from './AppbarTop';

describe('<AppbarTop />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<AppbarTop />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

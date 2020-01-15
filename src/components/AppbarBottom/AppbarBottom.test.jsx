import React from 'react';
import { render } from '../../testUtils';
import AppbarBottom from './AppbarBottom';

describe('<AppbarBottom />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<AppbarBottom />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

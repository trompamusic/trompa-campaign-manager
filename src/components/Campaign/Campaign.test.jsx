import React from 'react';
import { render } from '../../testUtils';
import Campaign from './Campaign';

describe('<Campaign />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Campaign />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

import React from 'react';
import { render } from '../../testUtils';
import WhoAreYou from './WhoAreYou';

describe('<WhoAreYou />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<WhoAreYou />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

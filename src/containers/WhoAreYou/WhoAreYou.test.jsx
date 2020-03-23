import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '../../testUtils';
import WhoAreYou from './WhoAreYou';

describe('<WhoAreYou />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<MockedProvider><WhoAreYou /></MockedProvider>);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

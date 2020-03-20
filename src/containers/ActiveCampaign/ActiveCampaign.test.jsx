import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '../../testUtils';
import ActiveCampaign from './ActiveCampaign';

describe('<ActiveCampaign />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<MockedProvider><ActiveCampaign /></MockedProvider>);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

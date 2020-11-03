import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '../../testUtils';
import CreateCampaignNickname from './CreateCampaignNickname';

describe('<CreateCampaignNickname />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<MockedProvider><CreateCampaignNickname /></MockedProvider>);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '../../testUtils';
import CreateCampaignNickname from './CreateCampaignNickname';

describe('<CreateCampaignNickname />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<CreateCampaignNickname />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

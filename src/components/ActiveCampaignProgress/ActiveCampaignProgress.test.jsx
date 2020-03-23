import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignProgress from './ActiveCampaignProgress';

describe('<ActiveCampaignProgress />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignProgress />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

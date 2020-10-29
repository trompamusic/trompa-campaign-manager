import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignOverviewItem from './ActiveCampaignOverviewItem';

describe('<ActiveCampaignOverviewItem />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignOverviewItem />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

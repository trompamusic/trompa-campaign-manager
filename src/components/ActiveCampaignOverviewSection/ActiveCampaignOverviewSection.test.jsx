import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignOverviewSection from './ActiveCampaignOverviewSection';

describe('<ActiveCampaignOverviewSection />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignOverviewSection />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

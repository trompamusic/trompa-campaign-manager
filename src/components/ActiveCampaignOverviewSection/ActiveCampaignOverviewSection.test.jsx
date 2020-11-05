import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignOverviewSection from './ActiveCampaignOverviewSection';

describe('<ActiveCampaignOverviewSection />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignOverviewSection children={<div>cc</div>} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders children', () => {
    const { getByText } = render(<ActiveCampaignOverviewSection children={<div>cc</div>} />);

    expect(getByText('cc')).toBeTruthy();
  });
});

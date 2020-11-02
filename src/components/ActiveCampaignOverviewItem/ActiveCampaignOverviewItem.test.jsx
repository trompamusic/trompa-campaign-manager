import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignOverviewItem from './ActiveCampaignOverviewItem';

const dummyProps = {
  scoreImage   : undefined,
  scoreTitle   : "bb",
  campaignTitle: "cc",
};

describe('<ActiveCampaignOverviewItem />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignOverviewItem {...dummyProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('it renders the score title, campaign title and campaign deadline correctly', () => {
    const { getByText } = render(<ActiveCampaignOverviewItem {...dummyProps} />);

    expect(getByText('bb')).toBeTruthy();
    expect(getByText('cc')).toBeTruthy();
  });
});

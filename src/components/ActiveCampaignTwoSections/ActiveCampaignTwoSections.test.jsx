import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaignTwoSections from './ActiveCampaignTwoSections';

describe('<ActiveCampaignTwoSections />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaignTwoSections />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

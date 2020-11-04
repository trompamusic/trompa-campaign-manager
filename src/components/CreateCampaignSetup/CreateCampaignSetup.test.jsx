import React from 'react';
import { render } from '../../testUtils';
import CreateCampaignSetup from './CreateCampaignSetup';

describe('<CreateCampaignSetup />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<CreateCampaignSetup />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

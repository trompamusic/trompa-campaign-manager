import React from 'react';
import { render } from '../../testUtils';
import CampaignJumbotronContent from './CampaignJumbotronContent';

describe('<CampaignJumbotronContent />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<CampaignJumbotronContent />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

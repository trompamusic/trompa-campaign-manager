import React from 'react';
import { render } from '../../testUtils';
import ActiveCampaign from './ActiveCampaign';

describe('<ActiveCampaign />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveCampaign />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

import React from 'react';
import { render } from '../../testUtils';
import JumbotronContentCampaign from './JumbotronContentCampaign';

describe('<JumbotronContentCampaign />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <JumbotronContentCampaign
        campaignInfo={{
          campaignTitle: 'Mozart',
          campaignUrl  : `https://`,
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });
});

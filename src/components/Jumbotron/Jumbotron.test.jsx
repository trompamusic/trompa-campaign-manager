import React from 'react';
import { render } from '../../testUtils';
import Jumbotron from './Jumbotron';

describe('<Jumbotron />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <Jumbotron
        text={{
          prefixTitle          : 'Subtitle',
          primaryTitle         : 'H1',
          secondaryTitle       : 'H2',
          introductionParagraph: 'Paragraph',
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders all text props', () => {
    const { getAllByText } = render((
      <Jumbotron
        text={{
          slogan     : 'Slogan',
          description: 'Description',
        }}
      />
    ));

    expect(getAllByText('Slogan')).toBeTruthy();
    expect(getAllByText('Description')).toBeTruthy();
  });

  test('renders all text and campaign props if campaign', () => {
    const { getAllByText } = render((
      <Jumbotron
        campaign={{
          name: 'Mozart',
        }}
        digitalDocument={{
          title: 'Mahler',
        }}
        author="Annabel"
        campaignUrl="https://www.trompa.com"
        isCampaignPageHeader
      />
    ));

    expect(getAllByText('Annabel')).toBeTruthy();
    expect(getAllByText('Mahler')).toBeTruthy();
  });
});

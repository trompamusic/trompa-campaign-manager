import React from 'react';
import { render } from '../../testUtils';
import CopyAndShareRow from './CopyAndShareRow';

describe('<CopyAndShareRow />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <CopyAndShareRow
        campaignInfo={{
          campaignTitle: 'Mozart',
          campaignUrl  : 'https://www.trompa.com/',
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders copy input value and social icons', () => {
    const { getByLabelText, getByDisplayValue } = render((
      <CopyAndShareRow
        campaignInfo={{
          campaignTitle: 'Mozart',
          campaignUrl  : 'https://www.trompa.com/',
        }}
      />
    ));

    expect(getByLabelText('Facebook')).toBeTruthy();
    expect(getByLabelText('Twitter')).toBeTruthy();
    expect(getByLabelText('Mail')).toBeTruthy();
    expect(getByDisplayValue('https://www.trompa.com/')).toBeTruthy();
  });
});

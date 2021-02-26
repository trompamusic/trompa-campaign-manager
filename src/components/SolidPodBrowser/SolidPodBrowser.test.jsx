import React from 'react';
import { render } from '../../testUtils';
import SolidPodBrowser from './SolidPodBrowser';

describe('<SolidPodBrowser />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<SolidPodBrowser />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

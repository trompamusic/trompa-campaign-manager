import React from 'react';
import { render } from '../../testUtils';
import HomeTwoSections from './HomeTwoSections';

describe('<HomeTwoSections />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<HomeTwoSections />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

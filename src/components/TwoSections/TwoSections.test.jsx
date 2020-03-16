import React from 'react';
import { render } from '../../testUtils';
import TwoSections from './TwoSections';

describe('<TwoSections />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<TwoSections />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

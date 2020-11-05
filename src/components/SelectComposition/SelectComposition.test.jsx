import React from 'react';
import { render } from '../../testUtils';
import SelectComposition from './SelectComposition';

describe('<SelectComposition />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<SelectComposition />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

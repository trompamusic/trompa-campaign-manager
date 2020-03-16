import React from 'react';
import { render } from '../../testUtils';
import AboutTrompa from './AboutTrompa';

describe('<AboutTrompa />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<AboutTrompa />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

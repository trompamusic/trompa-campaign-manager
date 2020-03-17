import React from 'react';
import { render } from '../../testUtils';
import HomeAboutTrompa from './HomeAboutTrompa';

describe('<HomeAboutTrompa />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<HomeAboutTrompa />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

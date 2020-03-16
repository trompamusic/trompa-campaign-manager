import React from 'react';
import { render } from '../../testUtils';
import ThreeSteps from './ThreeSteps';

describe('<ThreeSteps />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ThreeSteps />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

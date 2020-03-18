import React from 'react';
import { render } from '../../testUtils';
import HomeThreeSteps from './HomeThreeSteps';

describe('<HomeThreeSteps />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<HomeThreeSteps />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

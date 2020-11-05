import React from 'react';
import { render } from '../../testUtils';
import SelectScoreItem from './SelectScoreItem';

describe('<SelectScoreItem />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<SelectScoreItem />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

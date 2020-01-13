import React from 'react';
import { render } from '../../testUtils';
import ControlActionList from './ControlActionList';

describe('<ControlActionList />', () => {
  test('matches snapshot', () => {
    const { container } = render(<ControlActionList />);

    expect(container).toMatchSnapshot();
  });
});

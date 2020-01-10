import React from 'react';
import { render } from '../../testUtils';
import ControlAction from './ControlAction';

describe('<ControlAction />', () => {
  test('matches snapshot', () => {
    const { container } = render(<ControlAction />);

    expect(container).toMatchSnapshot();
  });
});

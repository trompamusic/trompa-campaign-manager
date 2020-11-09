import React from 'react';
import { render } from '../../testUtils';
import Slider from './Slider';

describe('<Slider />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Slider />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

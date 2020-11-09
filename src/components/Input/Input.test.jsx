import React from 'react';
import { render } from '../../testUtils';
import Input from './Input';

describe('<Input />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

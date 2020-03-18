import React from 'react';
import { render } from '../../testUtils';
import Form from './Form';

describe('<Form />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Form />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

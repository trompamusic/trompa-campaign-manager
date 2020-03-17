import React from 'react';
import { render } from '../../testUtils';
import CopyField from './CopyField';

describe('<CopyField />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<CopyField />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

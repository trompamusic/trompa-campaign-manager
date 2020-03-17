import React from 'react';
import { render } from '../../testUtils';
import ShareDialog from './ShareDialog';

describe('<ShareDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ShareDialog />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

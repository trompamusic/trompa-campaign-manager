import React from 'react';
import { render } from '../../testUtils';
import NoSupportMobile from './NoSupportMobile';

describe('<NoSupportMobile />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<NoSupportMobile />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

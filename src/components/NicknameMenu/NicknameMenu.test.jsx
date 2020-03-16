import React from 'react';
import { render } from '../../testUtils';
import NicknameMenu from './NicknameMenu';

describe('<NicknameMenu />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<NicknameMenu />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

import React from 'react';
import { render } from '../../testUtils';
import NicknameMenuContainer from './NicknameMenuContainer';

describe('<NicknameMenuContainer />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<NicknameMenuContainer />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});
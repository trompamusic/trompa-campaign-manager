import React from 'react';
import { render } from '../../testUtils';
import SelectScoreModal from './SelectScoreModal';

describe('<SelectScoreModal />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<SelectScoreModal />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

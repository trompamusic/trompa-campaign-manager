import React from 'react';
import { render } from '../../testUtils';
import CreateDigitalDocModal from './CreateDigitalDocModal';

describe('<CreateDigitalDocModal />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<CreateDigitalDocModal />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

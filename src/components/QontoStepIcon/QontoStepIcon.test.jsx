import React from 'react';
import { render } from '../../testUtils';
import QontoStepIcon from './QontoStepIcon';

describe('<QontoStepIcon />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<QontoStepIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

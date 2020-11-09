import React from 'react';
import { render } from '../../testUtils';
import ProgressStepper from './ProgressStepper';

describe('<ProgressStepper />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ProgressStepper activeStep={0} steps={['one']} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

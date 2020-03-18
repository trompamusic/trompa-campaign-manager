import React from 'react';
import { render } from '../../testUtils';
import MailChimpDialog from './MailChimpDialog';

describe('<MailChimpDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<MailChimpDialog />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});

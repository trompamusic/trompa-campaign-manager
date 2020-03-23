import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import MailChimpDialog from './MailChimpDialog';

describe('<MailChimpDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <MailChimpDialog
        open={true}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('does not render if open prop is false', () => {
    const { queryByText } = render((
      <MailChimpDialog
        open={false}
      />
    ));

    expect(queryByText('Hello')).toBeNull();
  });

  test('fires onClose callback if close icon is clicked', () => {
    const callback           = jest.fn();
    const { getByLabelText } = render((
      <MailChimpDialog
        open={true}
        onClose={callback}
      />
    ));

    fireEvent.click(getByLabelText('Close'));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

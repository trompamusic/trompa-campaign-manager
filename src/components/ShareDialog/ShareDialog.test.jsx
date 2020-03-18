import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import ShareDialog from './ShareDialog';

describe('<ShareDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <ShareDialog
        open={true}
        title="Hello"
        paragraph="Some info"
        campaignUrl="https://"
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('does not render if open prop is false', () => {
    const { queryByText } = render((
      <ShareDialog
        open={false}
        title="Hello"
        paragraph="Some info"
        campaignUrl="https://"
      />
    ));

    expect(queryByText('Hello')).toBeNull();
  });

  test('renders title, paragraph and campaign Url props if open prop is true', () => {
    const { getByText, getByDisplayValue } = render((
      <ShareDialog
        open={true}
        title="Hello"
        paragraph="Some info"
        campaignUrl="https://"
      />
    ));

    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('Some info')).toBeTruthy();
    expect(getByDisplayValue('https://')).toBeTruthy();
  });

  test('fires onClose callback if close icon is clicked', () => {
    const callback           = jest.fn();
    const { getByLabelText } = render((
      <ShareDialog
        open={true}
        onClose={callback}
      />
    ));

    fireEvent.click(getByLabelText('Close'));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

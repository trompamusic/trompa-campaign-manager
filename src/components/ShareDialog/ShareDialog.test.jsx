import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import ShareDialog from './ShareDialog';

describe('<ShareDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <ShareDialog
        open={true}
        modalContent={{
          title    : "Hello",
          paragraph: "Some info",
        }}
        campaign={{
          name: 'Mozart',
        }}
        campaignUrl="https://www.trompa.com"
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('does not render if open prop is false', () => {
    const { queryByText } = render((
      <ShareDialog
        open={false}
        modalContent={{
          title    : "Hello",
          paragraph: "Some info",
        }}
        campaign={{
          name: 'Mozart',
        }}
        campaignUrl="https://www.trompa.com"
      />
    ));

    expect(queryByText('Hello')).toBeNull();
  });

  test('renders title, paragraph and campaign Url props if open prop is true', () => {
    const { getByText, getByDisplayValue } = render((
      <ShareDialog
        open={true}
        modalContent={{
          title    : "Hello",
          paragraph: "Some info",
        }}
        campaign={{
          name: 'Mozart',
        }}
        campaignUrl="https://www.trompa.com"
      />
    ));

    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('Some info')).toBeTruthy();
    expect(getByDisplayValue('https://www.trompa.com')).toBeTruthy();
  });

  test('fires onClose callback if close icon is clicked', () => {
    const callback           = jest.fn();
    const { getByLabelText } = render((
      <ShareDialog
        open={true}
        onClose={callback}
        modalContent={{
          title    : "Hello",
          paragraph: "Some info",
        }}
        campaign={{
          name: 'Mozart',
        }}
        campaignUrl="https://www.trompa.com"
      />
    ));

    fireEvent.click(getByLabelText('Close'));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

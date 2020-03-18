import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import MailChimpDialog from './MailChimpDialog';

describe('<MailChimpDialog />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <MailChimpDialog
        open={true}
        title="Hello"
        paragraph="Some info"
        formTranslations={{
          email    : "Email",
          firstName: "Tom",
          lastName : "Smith",
          required : "Required",
          subscribe: "Subscribe",
          whichWork: "Which work",
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('does not render if open prop is false', () => {
    const { queryByText } = render((
      <MailChimpDialog
        open={false}
        title="Hello"
        paragraph="Some info"
        formTranslations={{
          email    : "Email",
          firstName: "Tom",
          lastName : "Smith",
          required : "Required",
          subscribe: "Subscribe",
          whichWork: "Which work",
        }}
      />
    ));

    expect(queryByText('Hello')).toBeNull();
  });

  test('renders title, paragraph and formTranslations if open prop is true', () => {
    const { getByText } = render((
      <MailChimpDialog
        open={true}
        title="Hello"
        paragraph="Some info"
        formTranslations={{
          email    : "Email",
          firstName: "Tom",
          lastName : "Smith",
          required : "Required",
          subscribe: "Subscribe",
          whichWork: "Which work",
        }}
      />
    ));

    expect(getByText('Hello')).toBeTruthy();
    expect(getByText('Some info')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Tom')).toBeTruthy();
    expect(getByText('Smith')).toBeTruthy();
    expect(getByText('Required')).toBeTruthy();
    expect(getByText('Subscribe')).toBeTruthy();
    expect(getByText('Which work')).toBeTruthy();
  });

  test('fires onClose callback if close icon is clicked', () => {
    const callback           = jest.fn();
    const { getByLabelText } = render((
      <MailChimpDialog
        open={true}
        onClose={callback}
        title="Hello"
        paragraph="Some info"
        formTranslations={{
          email    : "Email",
          firstName: "Tom",
          lastName : "Smith",
          required : "Required",
          subscribe: "Subscribe",
          whichWork: "Which work",
        }}
      />
    ));

    fireEvent.click(getByLabelText('Close'));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

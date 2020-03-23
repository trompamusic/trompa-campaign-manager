import React from 'react';
import { render } from '../../testUtils';
import CopyField from './CopyField';

describe('<CopyField />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <CopyField defaultValue="https://www.trompa.com" />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders copy text and default value passed as prop', () => {
    const { getByText, getByDisplayValue } = render((
      <CopyField defaultValue="https://www.trompa.com/" />
    ));

    expect(getByText('Copy')).toBeTruthy();
    expect(getByDisplayValue('https://www.trompa.com/')).toBeTruthy();
  });
});

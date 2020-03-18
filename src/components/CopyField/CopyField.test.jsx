import React from 'react';
import { render } from '../../testUtils';
import CopyField from './CopyField';

describe('<CopyField />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<CopyField defaultValue="https://" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders default value passed as prop', () => {
    const { getByDisplayValue } = render(<CopyField defaultValue="https://www.twitter.com/" />);

    expect(getByDisplayValue('https://www.twitter.com/')).toBeTruthy();
  });
});

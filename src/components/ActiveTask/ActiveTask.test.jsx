import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import ActiveTask from './ActiveTask';

describe('<ActiveTask />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<ActiveTask />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

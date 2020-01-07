import React from 'react';
import { render } from '../../testUtils';
import Root from './Root';

describe('<Root />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<Root />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders a generic error page when error prop is given', () => {
    const { container } = render(<Root error />);

    expect(container.firstChild).toHaveTextContent('Something wen\'t terribly wrong!');
    expect(container.firstChild).toMatchSnapshot();
  });
});

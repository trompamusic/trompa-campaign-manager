import React from 'react';
import { render } from '../../testUtils';
import NotificationsProvider from './NotificationsProvider';

describe('<NotificationsProvider />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(<NotificationsProvider />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // add your unit tests here
});
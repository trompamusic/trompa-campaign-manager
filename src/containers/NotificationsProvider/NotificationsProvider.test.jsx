import React from 'react';
import ReactDOM from 'react-dom';
import { provided } from '../../testUtils';
import NotificationsProvider from './NotificationsProvider';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(provided(<NotificationsProvider />), div);
});

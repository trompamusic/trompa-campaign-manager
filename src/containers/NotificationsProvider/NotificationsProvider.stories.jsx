import React from 'react';
import { storiesOf } from '@storybook/react';
import NotificationsProvider from './NotificationsProvider';

storiesOf('NotificationsProvider', module)
  .add('basic', () => <NotificationsProvider />);

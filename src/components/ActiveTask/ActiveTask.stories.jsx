import React from 'react';
import { storiesOf } from '@storybook/react';
import ActiveTask from './ActiveTask';

storiesOf('ActiveTask', module)
  .add('basic', () => <ActiveTask />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import TaskGroupProgress from './TaskGroupProgress';

storiesOf('TaskGroupProgress', module)
  .add('basic', () => <TaskGroupProgress />);

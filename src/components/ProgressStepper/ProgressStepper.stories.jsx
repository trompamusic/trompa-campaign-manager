import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressStepper from './ProgressStepper';

storiesOf('ProgressStepper', module)
  .add('basic', () => <ProgressStepper activeStep={0} steps={['one']} />);

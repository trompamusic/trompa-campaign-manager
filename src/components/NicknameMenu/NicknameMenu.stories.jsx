import React from 'react';
import { storiesOf } from '@storybook/react';
import NicknameMenu from './NicknameMenu';

storiesOf('NicknameMenu', module)
  .add('basic', () => <NicknameMenu />);

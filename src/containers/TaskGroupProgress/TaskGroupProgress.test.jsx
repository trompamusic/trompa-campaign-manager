import React from 'react';
import ReactDOM from 'react-dom';
import { provided } from '../../testUtils';
import TaskGroupProgress from './TaskGroupProgress';

test.skip('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(provided(<TaskGroupProgress />), div);
});
import React from 'react';
import ReactDOM from 'react-dom';
import { provided } from '../../testUtils';
import WhoAreYou from './WhoAreYou';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(provided(<WhoAreYou />), div);
});

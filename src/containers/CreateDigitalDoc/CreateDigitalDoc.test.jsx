import React from 'react';
import ReactDOM from 'react-dom';
import { provided } from '../../testUtils';
import CreateDigitalDoc from './CreateDigitalDoc';

test.skip('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(provided(<CreateDigitalDoc />), div);
});

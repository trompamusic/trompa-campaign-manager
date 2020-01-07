// import polyfills
import 'core-js/features/array/find';
import 'core-js/features/object/values';
import 'core-js/features/array/every';
import 'core-js/features/set';
import 'core-js/features/map';

// import application
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}

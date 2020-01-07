import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import 'url-search-params-polyfill';
import i18n from '../src/i18n';
import theme from './theme';
import store from './redux';

const wrapper = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Router>
          {children}
        </Router>
      </I18nextProvider>
    </ThemeProvider>
  </Provider>
);

const customRender = (ui, options) => render(ui, { wrapper, ...options });

export { customRender as render };

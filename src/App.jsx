import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { I18nextProvider } from 'react-i18next';
import { history } from './history';
import i18n from './i18n';
import theme from './theme';
import store from './redux';
import Root from './components/Root';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <ConnectedRouter history={history}>
              <Root error={this.state.error} />
            </ConnectedRouter>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import { I18nextProvider } from 'react-i18next';
import { history } from './history';
import i18n from './i18n';
import theme from './theme';
import client from './graphql';
import store from './redux';
import Root from './components/Root';
import NotificationsProvider from './containers/NotificationsProvider/NotificationsProvider';

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
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <ConnectedRouter history={history}>
                <NotificationsProvider>
                  <Root error={this.state.error} />
                </NotificationsProvider>
              </ConnectedRouter>
            </I18nextProvider>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;

import React from 'react';
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { fireEvent } from '@testing-library/react';
import { render } from '../../testUtils';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('renders and matches snapshot', () => {
    const { container } = render((
      <NavBar
        navLinks={[
          { name: 'Home', to: '/' },
        ]}
        primaryButton={{
          name: 'Join campaign', to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c',
        }}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays navLinks and goes to correct route', () => {
    const history       = createMemoryHistory();
    const { getByText } = render((
      <Router history={history}>
        <NavBar
          navLinks={[
            { name: 'Home', to: 'test' },
          ]}

        />
      </Router>
    ));

    fireEvent.click(getByText('Home'));
    expect(getByText('Home')).toBeTruthy();
    expect(history.location.pathname).toBe("/test");
  });

  test('displays primary button and goes to correct route', () => {
    const history       = createMemoryHistory();
    const { getByText } = render((
      <Router history={history}>
        <NavBar
          primaryButton={{
            name: 'Join campaign', to: 'test',
          }}

        />
      </Router>
    ));

    fireEvent.click(getByText('Join campaign'));
    expect(getByText('Join campaign')).toBeTruthy();
    expect(history.location.pathname).toBe("/test");
  });
});

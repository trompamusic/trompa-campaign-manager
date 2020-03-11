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
        buttons={[
          { name: 'Join campaign', to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' },
        ]}
        renderDrawerContent={() => ''}
      />
    ));

    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays navLink passed as prop', () => {
    const { getByText } = render((
      <NavBar
        navLinks={[
          { name: 'Home', to: '/' },
        ]}
        renderDrawerContent={() => ''}
      />
    ));

    expect(getByText('Home')).toBeTruthy();
  });

  test('click on navLink goes to correct route', () => {
    const history       = createMemoryHistory();
    const { getByText } = render((
      <Router history={history}>
        <NavBar
          navLinks={[
            { name: 'Home', to: '/' },
          ]}
          renderDrawerContent={() => ''}
        />
      </Router>
    ));

    fireEvent.click(getByText('Home'));
    expect(getByText('Home')).toBeTruthy();
    expect(history.location.pathname).toBe("/");
  });

  test('displays button passed as prop', () => {
    const { getByText } = render((
      <NavBar
        buttons={[
          { name: 'Join campaign', to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' },
        ]}
        renderDrawerContent={() => ''}
      />
    ));

    expect(getByText('Join campaign')).toBeTruthy();
  });

  test('click on button goes to correct route', () => {
    const history       = createMemoryHistory();
    const { getByText } = render((
      <Router history={history}>
        <NavBar
          buttons={[
            { name: 'Join campaign', to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' },
          ]}
          renderDrawerContent={() => ''}
        />
      </Router>
    ));

    fireEvent.click(getByText('Join campaign'));
    expect(getByText('Join campaign')).toBeTruthy();
    expect(history.location.pathname).toBe("/campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c");
  });
});

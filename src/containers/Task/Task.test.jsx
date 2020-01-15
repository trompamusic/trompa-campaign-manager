import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { wait } from '@testing-library/react';
import { render } from '../../testUtils';
import Task, { CONTROL_ACTION_QUERY } from './Task';

const mocks = [
  {
    request: {
      query    : CONTROL_ACTION_QUERY,
      variables: {
        identifier: 'e63fc3c5-f84e-4a64-9d5b-98a49dd4680c',
      },
    },
    result: {
      data: {
        ControlAction: [{
          identifier: "b6e2596a-823f-4a58-b7a6-900f4ece68fd",
          name      : "Campaign Manager Task #1",
          url       : "https://demo.videodock.com/trompa/ce-task",
          __typename: "ControlAction",
        }],
      },
    },
  },
];

describe('<Task />', () => {
  test('matches snapshot', () => {
    const { container } = render((
      <MockedProvider mocks={mocks} addTypename={false}>
        <Task />
      </MockedProvider>));

    expect(container).toMatchSnapshot();
  });

  test('renders the loading state initially', () => {
    const { getByText } = render((
      <MockedProvider mocks={[]} addTypename={false}>
        <Task />
      </MockedProvider>));

    wait(() => expect(getByText('Loading...')).toBeTruthy());
  });

  test('renders the queried control action', () => {
    const { getByText } = render((
      <MockedProvider mocks={mocks} addTypename={false}>
        <Task />
      </MockedProvider>));

    wait(() => expect(getByText('CE Task Page')).toBeTruthy());
  });
});


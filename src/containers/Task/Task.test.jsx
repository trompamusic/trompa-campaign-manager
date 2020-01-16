import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { wait } from '@testing-library/react';
import { render } from '../../testUtils';
import Task, { ALL_POTENTIAL_ACTIONS_QUERY } from './Task';

const mocks = [
  {
    request: {
      query    : ALL_POTENTIAL_ACTIONS_QUERY,
      variables: {
        identifier: 'e63fc3c5-f84e-4a64-9d5b-98a49dd4680c',
      },
    },
    result: {
      data: {
        ControlAction: [
          {
            identifier: "9754f772-988e-4758-b5a6-f481c0266002",
            name      : "Campaign Manager Task #4",
            url       : "https://demo.videodock.com/trompa/ce-task",
            __typename: "ControlAction",
          },
          {
            identifier: "bbd650f8-2c8d-43a0-ad92-34f8d14f4582",
            name      : "Campaign Manager Task #6",
            url       : "https://demo.videodock.com/trompa/ce-task",
            __typename: "ControlAction",
          },
          {
            identifier: "f67a7ab1-13ae-4d27-a6aa-5f49e0240858",
            name      : "Campaign Manager Task #7",
            url       : "https://demo.videodock.com/trompa/ce-task",
            __typename: "ControlAction",
          },
        ],
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


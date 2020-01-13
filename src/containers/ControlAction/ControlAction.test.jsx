import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { wait } from '@testing-library/react';
import { render } from '../../testUtils';
import ControlAction, { CONTROL_ACTION_QUERY } from './ControlAction';

const mocks = [
  {
    request: {
      query    : CONTROL_ACTION_QUERY,
      variables: {
        identifier: 'fdd3cbbc-2fd0-48ea-82be-7ad4ecf2625f',
      },
    },
    result: {
      data: {
        ControlAction: [{
          name      : "controlactionname",
          identifier: "fdd3cbbc-2fd0-48ea-82be-7ad4ecf2625f",
          __typename: "ControlAction",
        }],
      },
    },
  },
];

describe('<ControlAction />', () => {
  test('matches snapshot', () => {
    const { container } = render((
      <MockedProvider mocks={mocks} addTypename={false}>
        <ControlAction />
      </MockedProvider>));

    expect(container).toMatchSnapshot();
  });

  test('renders the loading state initially', () => {
    const { getByText } = render((
      <MockedProvider mocks={[]} addTypename={false}>
        <ControlAction />
      </MockedProvider>));

    wait(() => expect(getByText('Loading...')).toBeTruthy());
  });

  test('renders the queried control action', () => {
    const { getByText } = render((
      <MockedProvider mocks={mocks} addTypename={false}>
        <ControlAction />
      </MockedProvider>));

    wait(() => expect(getByText('controlactionname')).toBeTruthy());
  });
});


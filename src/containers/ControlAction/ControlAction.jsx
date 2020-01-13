import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { mockQuery } from '../../graphql/mockQuery';

export default function ControlAction () {
  const { loading, error, data } = useQuery(CONTROL_ACTION_QUERY,{ variables: { identifier: 'fdd3cbbc-2fd0-48ea-82be-7ad4ecf2625f' } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // mocking in console
  mockQuery();

  return (
    <ul>
      {data.ControlAction.map(({ identifier, name }) => (
        <li key={identifier}>
          {name}
        </li>
      ))}
    </ul>
  );
}

const CONTROL_ACTION_QUERY = gql`
  query ControlAction ($identifier: String!) {
    ControlAction(identifier: $identifier) {
      name
      identifier
    }
}`;

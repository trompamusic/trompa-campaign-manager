import React from 'react';
import { useQuery, gql } from '@apollo/client';

const CONTROL_ACTIONS_QUERY = gql`
  {
    ControlAction {
      identifier
      description
      name
      actionStatus
      target {
          identifier
          title
      }
      object {
          ... on MetadataInterface {
              identifier
          }
      }
  }
}
`;

export default function ControlActionList () {
  const { loading, error, data } = useQuery(CONTROL_ACTIONS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <h4>Queried controlActions</h4>
      <ul>
        {data.ControlAction.map(({ identifier, name }) => (
          <li key={identifier}>
            {name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
  ;
}


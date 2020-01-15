import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import PropTypes from 'prop-types';
import ActiveTask from '../../components/ActiveTask';

export default function Task ({ campaignIdentifier }) {
  const { loading, error, data } = useQuery(CONTROL_ACTION_QUERY,{ variables: { identifier: campaignIdentifier } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { name,  url } = data.ControlAction[0];

  return <ActiveTask name={name} url={url} campaignIdentifier={campaignIdentifier} />;
}

export const CONTROL_ACTION_QUERY = gql`
query ControlAction($identifier: ID!) {
  ControlAction(
    filter: {
    	target: {
      	identifier: $identifier
    	},
    	actionStatus: PotentialActionStatus
  	}
    first: 1,
    offset: 0
  )
  {
    identifier
    name
    url
  }
}`;

Task.propTypes    = {
  campaignIdentifier: PropTypes.string,
};

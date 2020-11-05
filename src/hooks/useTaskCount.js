import { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { getCampaignTasksValue } from '../utils';
import client from '../graphql';

const useTaskCount = campaign => {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    if(campaign) {
      client.query({ query: ALL_POTENTIAL_ACTIONS_QUERY, variables: { identifier: getCampaignTasksValue(campaign) } })
        .then(response => {
          const allPotentialActionsCount = response.data.ControlAction.length;

          setTaskCount(allPotentialActionsCount);
        });
    }
  }, [campaign]);

  return taskCount;
};

export default useTaskCount;

const ALL_POTENTIAL_ACTIONS_QUERY = gql`
    query AllPotentialActions($identifier: ID!) {
        ControlAction(
            filter: {
                wasDerivedFrom: { identifier: $identifier }
                actionStatus: PotentialActionStatus
            }
            first: 10
        ) {
            identifier
        }
    }
`;

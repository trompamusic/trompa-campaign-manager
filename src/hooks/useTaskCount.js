import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { getCampaignDigitalDocument } from '../utils';

const useTaskCount = campaign => {
  const score    = getCampaignDigitalDocument(campaign);
  const { data } = useQuery(ALL_TASKS, { variables: { identifier: score?.identifier }, pollInterval: 30000 });

  return data?.ControlAction?.length || 0;
};

export default useTaskCount;

const ALL_TASKS = gql`
    query AllPotentialActions($identifier: ID!) {
      ControlAction(
          filter: {
              wasGeneratedBy_not: null
              wasDerivedFrom_not: null
              actionStatus: PotentialActionStatus
              object_single: { identifier: $identifier }
          }
          first: 10
      ) {
          identifier
      }
    }
`;

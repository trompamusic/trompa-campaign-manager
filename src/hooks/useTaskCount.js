import { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { getCampaignDigitalDocument } from '../utils';

const useTaskCount = campaign => {
  const [taskCount, setTaskCount] = useState(0);
  const score                     = getCampaignDigitalDocument(campaign);
  const getTaskListCallback       = ({ ControlAction:taskList }) => setTaskCount(taskList? taskList.length : 0);
  const [getTaskList]             = useLazyQuery(ALL_TASKS, { variables: { identifier: score?.identifier }, onCompleted: getTaskListCallback });

  useEffect(() => {
    if(campaign){
      getTaskList();
    }
  }, [campaign]);

  return taskCount;
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

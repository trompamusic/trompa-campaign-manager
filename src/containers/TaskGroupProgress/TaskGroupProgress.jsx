import React from 'react';
import * as PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ProgressStepper from '../../components/ProgressStepper/ProgressStepper';

const COMPLETED_ACTION_STATUS = "CompletedActionStatus";

export default function TaskGroupProgress ({ digitalDocumentIdentifier }) {
  const { loading, error, data } = useQuery(ALL_POTENTIAL_ACTIONS, { variables: { digitalDocumentIdentifier } });
  const taskGroups               = data?.ControlAction || [];
  const taskGroupsSorted         = taskGroups.sort(a => a.actionStatus === COMPLETED_ACTION_STATUS? -1 :1);
  const taskGroupNames           = taskGroupsSorted.map(taskGroup => taskGroup.name);
  const currentStep              = taskGroupsSorted.filter(taskGroup => taskGroup.actionStatus === COMPLETED_ACTION_STATUS).length;

  if(loading || error || !taskGroups.length) {
    return null;
  }

  return <ProgressStepper activeStep={currentStep} steps={taskGroupNames} />;
}

TaskGroupProgress.propTypes = {
  digitalDocumentIdentifier: PropTypes.string,
};

export const ALL_POTENTIAL_ACTIONS = gql`
  query AllPotentialActions($digitalDocumentIdentifier: ID!) {
    ControlAction(
      filter: {
        wasGeneratedBy: null, 
        wasDerivedFrom_not: null, 
        object_single: { identifier: $digitalDocumentIdentifier }
      }, 
      first: 10
    ) {
      name
      identifier
      actionStatus
      __typename
    }
  }
  `;
  
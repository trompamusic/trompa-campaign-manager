import React from 'react';
import * as PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ProgressStepper from '../../components/ProgressStepper/ProgressStepper';
import useWidth from '../../hooks/useWidth';

const COMPLETED_ACTION_STATUS = "CompletedActionStatus";

export default function TaskGroupProgress ({ digitalDocumentIdentifier }) {
  const stepsPerBreakpoint       = { "xs": 2, "sm": 3, "md": 5, "lg": 7, "xl": 9 };
  const width                    = useWidth();
  const { loading, error, data } = useQuery(ALL_CONTROL_ACTIONS, { variables: { digitalDocumentIdentifier } });
  const taskGroups               = data?.ControlAction || [];
  const taskGroupsSorted         = taskGroups.sort(a => a.actionStatus === COMPLETED_ACTION_STATUS? -1 :1);
  const stepsToShow              = stepsPerBreakpoint[width];
  const currentStep              = taskGroupsSorted.filter(taskGroup => taskGroup.actionStatus === COMPLETED_ACTION_STATUS).length;
  const startStep                = currentStep > 0? currentStep - 1 : 0;
  const endStep                  = startStep + stepsToShow;
  const steps                    = endStep < taskGroupsSorted.length? taskGroupsSorted.slice(startStep, endStep) : taskGroupsSorted.slice(-stepsToShow);
  const selectedStep             = steps.filter(taskGroup => taskGroup.actionStatus === COMPLETED_ACTION_STATUS).length;
  const taskGroupNames           = steps.map(taskGroup => taskGroup.name);

  if(loading || error || !taskGroups.length) {
    return null;
  }

  return <ProgressStepper activeStep={selectedStep} steps={taskGroupNames} />;
}

TaskGroupProgress.propTypes = {
  digitalDocumentIdentifier: PropTypes.string,
};

export const ALL_CONTROL_ACTIONS = gql`
  query AllControlActions($digitalDocumentIdentifier: ID!) {
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
  
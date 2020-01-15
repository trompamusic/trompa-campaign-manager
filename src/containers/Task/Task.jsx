import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import PropTypes from 'prop-types';
import ActiveTask from '../../components/ActiveTask';
import { TaskContext } from '../../containers/TaskProvider/TaskProvider';

export const ALL_POTENTIAL_ACTIONS_QUERY = gql`
query AllPotentialActions {
  ControlAction(
    filter: { actionStatus: PotentialActionStatus }
    first: 500
    offset: 0
  ) {
    identifier
    name
    url
  }
}`;

export const NEXT_TEN_POTENTIAL_ACTIONS_QUERY = gql`
query NextTenPotentialActions($identifier: ID!, $offset: Int! ) {
  ControlAction(
    filter: {
      target: { identifier: $identifier }
      actionStatus: PotentialActionStatus
    }
    first: 10
    offset: $offset
  ) {
    identifier
    name
    url
  }
}
`;

export default function Task ({ campaignIdentifier }) {
  // Prepare random offset
  const { data: allPotentialActions } = useQuery(ALL_POTENTIAL_ACTIONS_QUERY);
  const randomOffset                  = Math.floor(Math.random() * (allPotentialActions && allPotentialActions.ControlAction.length) || 0);

  // Get next potential actions
  const { loading, error, data } = useQuery(NEXT_TEN_POTENTIAL_ACTIONS_QUERY,{ variables: { identifier: campaignIdentifier, offset: randomOffset } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  // Decide on next potential action

  return (
    <TaskContext.Consumer>
      {({ setTasks, nextTask, setNextTask }) => (
        <React.Fragment>
          {setTasks(data.ControlAction)}
          {setNextTask(data.ControlAction[0])}
          {nextTask && (
            <ActiveTask
              name={nextTask.name}
              url={nextTask.url}
              campaignIdentifier={campaignIdentifier}
            />
          )}
        </React.Fragment>
      )}
    </TaskContext.Consumer>
  );
}

Task.propTypes = {
  campaignIdentifier: PropTypes.string,
};

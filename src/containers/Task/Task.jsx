import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from "apollo-boost";
import PropTypes from 'prop-types';
import client from '../../graphql';
import ActiveTask from '../../components/ActiveTask';

export default function Task({ campaignIdentifier, taskIdentifier }) {
  const history                               = useHistory();
  const taskAmount                            = 10;
  const [loading, setLoading]                 = useState(false);
  const [task, setTask]                       = useState('');
  const [taskIdentifiers, setTaskIdentifiers] = useState([]);

  // Retrieve task from url (or restart)
  useEffect(() => {
    if(taskIdentifier) {
      client.query({ query: CLIENT_NEXT_POTENTIAL_ACTION_QUERY, variables: { taskIdentifiers: [taskIdentifier], offset: 0 } })
        .then(response => {
          const currentTask = response.data.ControlAction[0];

          if(currentTask) {
            setTask(currentTask);
            console.log('set task from url');
          } else {
            history.replace(`/campaign/${campaignIdentifier}/task`);
          }
        });
    }
  }, [campaignIdentifier, history, taskIdentifier]);

  // Retrieve tasks new run
  useEffect(() => {
    if(taskIdentifier || loading) {
      return;
    }

    const getCurrentTask = identifiers => {
      client.query({ query: CLIENT_NEXT_POTENTIAL_ACTION_QUERY, variables: { taskIdentifiers: identifiers, offset: 0 } })
        .then(response => {
          const firstTask = response.data.ControlAction[0];

          console.log('set task from current task');
          if(firstTask) {
            history.replace(`/campaign/${campaignIdentifier}/task/${firstTask.identifier}`);
            setLoading(false);
          }
        });
    };

    setLoading(true);

    client.query({ query: ALL_POTENTIAL_ACTIONS_QUERY, variables: { identifier: campaignIdentifier } })
      .then(response => {
        const allPotentialActions = response.data.ControlAction;
        const offset              = Math.floor(Math.random() * allPotentialActions.length);
        const identifiers         = allPotentialActions.slice(offset, taskAmount).map(({ identifier }) => identifier);

        setTaskIdentifiers(identifiers);
        getCurrentTask(identifiers);
      });
  }, [campaignIdentifier, history, loading, taskIdentifier, taskIdentifiers]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return <ActiveTask name={task.name} url={task.url} campaignIdentifier={campaignIdentifier} />;
}

Task.propTypes = {
  campaignIdentifier: PropTypes.string,
  taskIdentifier    : PropTypes.string,
};

export const ALL_POTENTIAL_ACTIONS_QUERY = gql`
query AllPotentialActions($identifier: ID!) {
  ControlAction(
    filter: {
      target: { identifier: $identifier }
      actionStatus: PotentialActionStatus
    }
  ) {
    identifier
  }
}`;

export const CLIENT_NEXT_POTENTIAL_ACTION_QUERY = gql`
query ClientNextPotentialAction($taskIdentifiers: [ID!]!, $offset: Int!) {
  ControlAction(
    filter: {
      identifier_in: $taskIdentifiers
      actionStatus: PotentialActionStatus
    }
    first: 1
    offset: $offset
  ) {
    identifier
    name
    url
  }
}`;

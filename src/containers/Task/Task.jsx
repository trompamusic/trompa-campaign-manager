import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from "apollo-boost";
import PropTypes from 'prop-types';
import client from '../../graphql';
import ActiveTask from '../../components/ActiveTask';

export default function Task({ campaignIdentifier, taskIdentifier }) {
  const taskAmount                            = 10;
  const history                               = useHistory();
  const [loading, setLoading]                 = useState(false);
  const [task, setTask]                       = useState('');
  const [taskIdentifiers, setTaskIdentifiers] = useState([]);

  // Handle next task
  const handleNextAction = () => {
    const filteredTaskIdentifiers = [...taskIdentifiers].filter(identifier => identifier !== taskIdentifier);

    setTaskIdentifiers(filteredTaskIdentifiers);
    if(filteredTaskIdentifiers.length > 0) {
      history.replace(`/campaign/${campaignIdentifier}/task/${filteredTaskIdentifiers[0]}`);
    } else {
      history.replace(`/campaign/${campaignIdentifier}/task/`);
    }
  };

  // Retrieve task from url (or restart)
  useEffect(() => {
    if(taskIdentifier) {
      client.query({ query: CLIENT_NEXT_POTENTIAL_ACTION_QUERY, variables: { taskIdentifiers: [taskIdentifier], offset: 0 } })
        .then(response => {
          const currentTask = response.data.ControlAction[0];

          if(currentTask) {
            setTask(currentTask);
          } else {
            history.replace(`/campaign/${campaignIdentifier}/task`);
          }
        });
    }
  }, [campaignIdentifier, history, taskIdentifier]);

  // Retrieve tasks on new run
  useEffect(() => {
    if(taskIdentifier || loading) {
      return;
    }

    const getCurrentTask = identifiers => {
      client.query({ query: CLIENT_NEXT_POTENTIAL_ACTION_QUERY, variables: { taskIdentifiers: identifiers, offset: 0 } })
        .then(response => {
          const firstTask = response.data.ControlAction[0];

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
    return <ActiveTask loading={loading} campaignIdentifier={campaignIdentifier} />;
  }

  return <ActiveTask name={task.name} url={task.url} campaignIdentifier={campaignIdentifier} handleNextAction={handleNextAction} />;
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { gql } from "apollo-boost";
import client from '../../graphql';
import ActiveTask from '../../components/ActiveTask';

export default function Task({ campaignIdentifier, taskIdentifier }) {
  const history                               = useHistory();
  const taskDrawAmount                        = 10;
  let nickname                                = localStorage.getItem('nickname');
  const [loading, setLoading]                 = useState(false);
  const [task, setTask]                       = useState(null);
  const [taskIdentifiers, setTaskIdentifiers] = useState([]);
  const [tasksReceived, setTasksReceived]     = useState([]);
  const [taskTotal, setTaskTotal]             = useState(10);

  const handleNextTaskButtonClick = () => {
    const remainingTaskIdentifiers = taskIdentifiers.filter(identifier => identifier !== taskIdentifier);
    const hasReceivedTask          = tasksReceived.includes(taskIdentifier);

    if(!hasReceivedTask)
      setTasksReceived(tasksReceived.concat(taskIdentifier));

    setTaskIdentifiers(remainingTaskIdentifiers);
    if(remainingTaskIdentifiers.length > 0) {
      history.replace(`/campaign/${campaignIdentifier}/task/${remainingTaskIdentifiers[0]}`);
    } else {
      history.replace(`/campaign/${campaignIdentifier}/task/`);
    }
  };

  // If not logged in reroute to login
  useEffect(() => {
    if(!nickname) {
      history.replace(`/campaign/${campaignIdentifier}/who-are-you`);
    }
  });

  // Retrieve task on existing draw (task identifier in url)
  useEffect(() => {
    if(taskIdentifier) {
      client.query({ query: CLIENT_NEXT_POTENTIAL_ACTION_QUERY, variables: { taskIdentifiers: [taskIdentifier], offset: 0 } })
        .then(response => {
          const newTaskNotReceived = response.data.ControlAction.find(({ identifier }) => !tasksReceived.includes(identifier));

          if (taskTotal === tasksReceived.length) {
            return;
          } else if(newTaskNotReceived) {
            setTask(newTaskNotReceived);
          } else {
            history.replace(`/campaign/${campaignIdentifier}/task`);
          }
        });
    }
  }, [campaignIdentifier, history, taskIdentifier, taskTotal, tasksReceived]);

  // Retrieve tasks on new draw (task identifier not in url)
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
        const identifiers         = allPotentialActions.slice(offset, taskDrawAmount).map(({ identifier }) => identifier);

        setTaskIdentifiers(identifiers);
        getCurrentTask(identifiers);
        setTaskTotal(allPotentialActions.length);
      });
  }, [campaignIdentifier, history, loading, taskIdentifier, taskIdentifiers]);

  if (taskTotal === tasksReceived.length) {
    return <ActiveTask noTasks={true} campaignIdentifier={campaignIdentifier} />;
  }

  if (loading || !task) {
    return <ActiveTask loading={true} campaignIdentifier={campaignIdentifier} />;
  }

  return <ActiveTask name={task.name} url={task.url} identifier={task.identifier} campaignIdentifier={campaignIdentifier} onNextTaskButtonClick={handleNextTaskButtonClick} />;
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

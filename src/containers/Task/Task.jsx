import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import client from '../../graphql';
import ActiveTask from '../../components/ActiveTask';
import { NotificationContext } from '../NotificationsProvider/NotificationsProvider';
import { GET_CAMPAIGN } from '../../screens/ActiveCampaign/';

export default function Task({ campaignIdentifier, taskIdentifier }) {
  const history                               = useHistory();
  const [loading, setLoading]                 = useState(false);
  const [campaign, setCampaign]               = useState(null);
  const [task, setTask]                       = useState(null);
  const [taskIdentifiers, setTaskIdentifiers] = useState([]);
  const [tasksReceived, setTasksReceived]     = useState([]);
  const [taskTotal, setTaskTotal]             = useState(10);
  const taskDrawAmount                        = 10;
  const nickname                              = localStorage.getItem('nickname');

  const onGoBackClick = () => {
    history.goBack();
  };

  const handleNextTaskButtonClick = () => {
    const remainingTaskIdentifiers = taskIdentifiers.filter(identifier => identifier !== taskIdentifier);
    const hasReceivedTask          = tasksReceived.includes(taskIdentifier);

    if (!hasReceivedTask) {
      setTasksReceived(tasksReceived.concat(taskIdentifier));
    }

    setTaskIdentifiers(remainingTaskIdentifiers);
    if (remainingTaskIdentifiers.length > 0) {
      history.replace(`/campaign/${campaignIdentifier}/task/${remainingTaskIdentifiers[0]}`);
    } else {
      history.replace(`/campaign/${campaignIdentifier}/task/`);
    }
  };

  // Get campaign first
  useEffect(() => {
    if (campaignIdentifier) {
      client.query({
        query    : GET_CAMPAIGN,
        variables: { identifier: campaignIdentifier },
      })
        .then(response => {
          setCampaign(response.data.ControlAction[0]);
        });
    }
  }, [campaignIdentifier]);

  // Retrieve task on existing draw (task identifier in url)
  useEffect(() => {
    if (taskIdentifier) {
      client.query({
        query    : CLIENT_NEXT_POTENTIAL_ACTION_QUERY,
        variables: { taskIdentifiers: [taskIdentifier], offset: 0 },
      })
        .then(response => {
          const newTaskNotReceived = response.data.ControlAction.find(({ identifier }) => !tasksReceived.includes(identifier));

          if (taskTotal === tasksReceived.length) {
            return;
          } else if (newTaskNotReceived) {
            setTask(newTaskNotReceived);
          } else {
            history.replace(`/campaign/${campaignIdentifier}/task`);
          }
        });
    }
  }, [campaignIdentifier, history, taskIdentifier, taskTotal, tasksReceived]);

  // Retrieve tasks on new draw (task identifier not in url)
  useEffect(() => {
    if (taskIdentifier || loading || !campaign) {
      return;
    }

    const campaignTasks = campaign.object.find(current => current.name === 'tasks')?.value;

    if (!campaignTasks) {
      return null;
    }

    const getCurrentTask = identifiers => {
      client.query({
        query    : CLIENT_NEXT_POTENTIAL_ACTION_QUERY,
        variables: { taskIdentifiers: identifiers, offset: 0 },
      })
        .then(response => {
          const firstTask = response.data.ControlAction[0];

          if (firstTask) {
            history.replace(`/campaign/${campaignIdentifier}/task/${firstTask.identifier}`);
            setLoading(false);
          }
        });
    };

    setLoading(true);

    client.query({ query: ALL_POTENTIAL_ACTIONS_QUERY, variables: { identifier: campaignTasks } })
      .then(response => {
        const allPotentialActions = response.data.ControlAction;
        const offset              = Math.floor(Math.random() * allPotentialActions.length);
        const identifiers         = allPotentialActions.slice(offset, taskDrawAmount).map(({ identifier }) => identifier);

        setTaskIdentifiers(identifiers);
        getCurrentTask(identifiers);
        setTaskTotal(allPotentialActions.length);
      });
  }, [campaignIdentifier, history, loading, taskIdentifier, taskIdentifiers, campaign]);

  if (taskTotal === tasksReceived.length) {
    return (
      <ActiveTask
        name="No tasks found"
        campaign={campaign?.name}
        campaignIdentifier={campaignIdentifier}
        nickname={nickname}
        onGoBackClick={onGoBackClick}
        noTasks
      />
    );
  }

  if (loading || !task) {
    return (
      <ActiveTask
        name="Loading"
        campaign={campaign?.name}
        campaignIdentifier={campaignIdentifier}
        onGoBackClick={onGoBackClick}
        loading
      />
    );
  }

  const composeTaskUrl = (taskUrl, nickname) => `${task.url}?user=${encodeURIComponent(nickname)}`;

  return (
    <NotificationContext.Consumer>
      {({ handleNotification }) => (
        <ActiveTask
          name={task.name}
          url={composeTaskUrl(task.url, nickname)}
          identifier={task.identifier}
          campaign={campaign?.name}
          campaignIdentifier={campaignIdentifier}
          onNextTaskButtonClick={handleNextTaskButtonClick}
          handleNotification={handleNotification}
          onGoBackClick={onGoBackClick}
        />
      )}
    </NotificationContext.Consumer>
  );
}

Task.propTypes = {
  campaignIdentifier: PropTypes.string,
  taskIdentifier    : PropTypes.string,
};

export const ALL_POTENTIAL_ACTIONS_QUERY = gql`
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
    }
`;

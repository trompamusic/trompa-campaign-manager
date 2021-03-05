import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { enhanceUrlWithParameters, getCampaignDigitalDocument } from '../../utils';
import ActiveTask from '../../components/ActiveTask';
import { NotificationContext } from '../NotificationsProvider/NotificationsProvider';
import { GET_CAMPAIGN } from '../../screens/ActiveCampaign/';

export default function Task({ campaignIdentifier, taskIdentifier }) {
  const history                             = useHistory();
  const [campaign, setCampaign]             = useState(null);
  const [task, setTask]                     = useState(null);
  const [tasksTodo, setTasksTodo]           = useState([]);
  const [tasksSubmitted, setTasksSubmitted] = useState([]);
  const taskDrawAmount                      = 10;
  const refetchTimeout                      = 30000;
  const [refetchCount, setRefetchCount]     = useState(0);
  const nickname                            = localStorage.getItem('nickname');
  const score                               = campaign? getCampaignDigitalDocument(campaign) : null;

  const randomOffset    = list => Math.floor(Math.random() * list.length);
  const randomSelection = list => list.slice(randomOffset(list), taskDrawAmount);
  
  const setTaskUrl      = taskId => history.replace(`/campaign/${campaignIdentifier}/task/${taskId || ""}`);
  const addToSubmitted  = taskId => !tasksSubmitted.includes(taskId)? setTasksSubmitted(tasksSubmitted.concat(taskId)) : null;
  const removeFromTodo  = taskId => setTasksTodo(tasksTodo.filter(identifier => identifier !== taskId));
  const getNextTask     = taskId => tasksTodo.filter(identifier => identifier !== taskId)[0];
  const isTaskSubmitted = task   => tasksSubmitted.includes(task?.identifier);
  const extractTask     = task   => !task || isTaskSubmitted(task)? setTaskUrl('') : setTask(task);
  
  const getCampaignCallback = ({ ControlAction: campaign }) => setCampaign(campaign[0]);
  const getTaskCallback     = ({ ControlAction: task })     => extractTask(task[0]);
  const getTaskListCallback = ({ ControlAction: taskList }) => {
    if (taskList.length){
      const selection = randomSelection(taskList).map(({ identifier }) => identifier);

      setTasksTodo(selection);
      setTaskUrl(selection[0]);
    } else {
      setTask(null);
      setTasksTodo([]);
      setTimeout(() => setRefetchCount(refetchCount + 1), refetchTimeout);
    }
  };
  
  const [getCampaign, { loading:loadingCampaign }] = useLazyQuery(GET_CAMPAIGN, { onCompleted: getCampaignCallback });
  const [getTask,     { loading:loadingTask }]     = useLazyQuery(NEXT_TASK,    { onCompleted: getTaskCallback });
  const [getTaskList, { loading:loadingTaskList }] = useLazyQuery(ALL_TASKS,    { onCompleted: getTaskListCallback, fetchPolicy: "no-cache" });
  
  const onGoBackClick             = () => history.goBack();
  const handleNextTaskButtonClick = () => {
    addToSubmitted(taskIdentifier);
    removeFromTodo(taskIdentifier);
    setTaskUrl(getNextTask(taskIdentifier));
  };

  useEffect(() => {
    if (campaignIdentifier) {
      getCampaign({ variables: { identifier: campaignIdentifier } });
    }
  }, [campaignIdentifier, getCampaign]);

  useEffect(() => {
    if (!taskIdentifier && score) {
      getTaskList({ variables: { identifier: score.identifier, filtered: tasksSubmitted, drawAmount: taskDrawAmount } });
    }
    if (taskIdentifier){
      getTask({ variables: { identifiers: [taskIdentifier] } });
    }
  },[getTaskList, getTask, score, taskIdentifier, refetchCount, tasksSubmitted]);

  if (loadingCampaign || loadingTaskList || loadingTask) {
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
  if (!task) {
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

  return (
    <NotificationContext.Consumer>
      {({ handleNotification }) => (
        <ActiveTask
          name={task.name}
          url={enhanceUrlWithParameters(task.url, { key: 'user', value: nickname })}
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

export const ALL_TASKS = gql`
    query AllPotentialActions($identifier: ID! $filtered: [ID!] $drawAmount: Int) {
      ControlAction(
          filter: {
              wasGeneratedBy_not: null
              wasDerivedFrom_not: null
              actionStatus: PotentialActionStatus
              object_single: { identifier: $identifier }
              identifier_not_in: $filtered
          }
          first: $drawAmount
      ) {
          identifier
      }
    }
`;

export const NEXT_TASK = gql`
    query ClientNextPotentialAction($identifiers: [ID!]!) {
        ControlAction(
            filter: {
                identifier_in: $identifiers
                actionStatus: PotentialActionStatus
            }
            first: 1
        ) {
            identifier
            name
            url
        }
    }
`;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import TaskContainer from '../../containers/Task';

export default function Task ({ match }) {
  const { t }                                  = useTranslation('task');
  const history                                = useHistory();
  const nickname                               = localStorage.getItem('nickname');
  const { campaignIdentifier, taskIdentifier } = match.params;

  if (!nickname) {
    history.replace(`/campaign/${campaignIdentifier}/who-are-you`);

    return null;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('task')}</title>
        <meta name="description" content={t('description')} />
        <meta property="og:title" content="Task" />
      </Helmet>
      <TaskContainer
        campaignIdentifier={campaignIdentifier}
        taskIdentifier={taskIdentifier}
        nickname={nickname}
      />
    </React.Fragment>
  );
}

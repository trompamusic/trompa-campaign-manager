import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import TaskContainer from '../../containers/Task';

export default function Task ({ match }) {
  const { t }                                  = useTranslation('task');
  const { campaignIdentifier, taskIdentifier } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('task')}</title>
        <meta name="description" content={t('description')} />
        <meta property="og:title" content="Task" />
      </Helmet>
      <TaskContainer campaignIdentifier={campaignIdentifier} taskIdentifier={taskIdentifier} />
    </React.Fragment>
  );
}

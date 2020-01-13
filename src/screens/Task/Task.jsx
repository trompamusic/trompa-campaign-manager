import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ActiveTask from '../../components/ActiveTask';

export default function Task () {
  const { t }   = useTranslation('task');

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('task')}</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Task" />
      </Helmet>
      <ActiveTask />
    </React.Fragment>
  );
}

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import NoSupportMobileComponent from '../../components/NoSupportMobile';

export default function NoSupportMobile () {
  const { t }   = useTranslation('noSupportMobile');

  return (
    <Fragment>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('paragraph')} />
      </Helmet>
      <NoSupportMobileComponent />
    </Fragment>
  );
}

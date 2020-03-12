import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import WhoAreYouContainer from '../../containers/WhoAreYou';

export default function WhoAreYou ({ match }) {
  const { t }                  = useTranslation('whoAreYou');
  const { campaignIdentifier } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('who_are_you')}</title>
        <meta name="description" content="" />
        <meta property="og:title" content="WhoAreYou" />
      </Helmet>
      <WhoAreYouContainer campaignIdentifier={campaignIdentifier} />
    </React.Fragment>
  );
}

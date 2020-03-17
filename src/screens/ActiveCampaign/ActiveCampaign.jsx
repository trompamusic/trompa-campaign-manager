import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ActiveCampaignContainer from '../../containers/ActiveCampaign';

export default function ActiveCampaign ({ match }) {
  const { t }                  = useTranslation('campaign');
  const { campaignIdentifier } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('campaign')}</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Campaign" />
      </Helmet>
      <ActiveCampaignContainer campaignIdentifier={campaignIdentifier} />
    </React.Fragment>
  );
}

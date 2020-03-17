import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import NavBar from '../../components/NavBar/NavBar';
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
      <NavBar
        iconLink={{ name: t('navbar.share'), to: '', icon: <ShareIcon /> }}
        primaryIconButton={{ name: t('navbar.download_mei_file'), to: '', icon: <GetAppIcon /> }}
        drawerContent={<div />}
      />
      <ActiveCampaignContainer campaignIdentifier={campaignIdentifier} />
    </React.Fragment>
  );
}

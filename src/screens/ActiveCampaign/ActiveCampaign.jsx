import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ShareIcon from '@material-ui/icons/Share';
import NavBar from '../../components/NavBar/NavBar';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import ActiveCampaignContainer from '../../containers/ActiveCampaign';

export default function ActiveCampaign ({ match }) {
  const { t }                                 = useTranslation('campaign');
  const { campaignIdentifier }                = match.params;
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('campaign')}</title>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        iconLink={{ name: t('navbar.share'), onClick: () => setShareDialogOpen(true), icon: <ShareIcon /> }}
        primaryButton={{ name: t('navbar.join_campaign'), to: `${campaignIdentifier}/who-are-you` }}
        drawerContent={<div />}
      />
      <ShareDialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        title={t('share_dialog.drum_up_support')}
        paragraph={t('share_dialog.lets_face_music')}
        campaignUrl="https://"
      />
      <ActiveCampaignContainer campaignIdentifier={campaignIdentifier} />
    </React.Fragment>
  );
}

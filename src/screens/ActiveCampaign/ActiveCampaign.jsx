import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ShareIcon from '@material-ui/icons/Share';
import NavBar from '../../components/NavBar/NavBar';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import JumbotronContentCampaign from '../../components/JumbotronContentCampaign/JumbotronContentCampaign';
import images from '../../theme/images';
import MailChimpDialog from '../../components/MailChimpDialog/MailChimpDialog';

export default function ActiveCampaign ({ match }) {
  const { t }                                         = useTranslation('campaign');
  const { campaignIdentifier }                        = match.params;
  const [shareDialogOpen, setShareDialogOpen]         = useState(false);
  const [mailChimpDialogOpen, setMailChimpDialogOpen] = useState(false);

  // temp static campaign data
  const campaignInfo = {
    campaignOwner: 'Annabel',
    campaignTitle: 'Summer concert: Mahler\'s 6th in the beer garden.',
    campaignUrl  : `https://trompamusic.eu/campaign/${campaignIdentifier}`,
    scoreTitle   : 'Mahler: Symphony No. 6 in A minor',
    scoreComment : 'Complete score',
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('jumbotron.primaryTitle')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[
          { name: t('home:home'), to: '/' },
          { name: t('navbar.share'), onClick: () => setShareDialogOpen(true), startIcon: <ShareIcon /> },
        ]}
        primaryButton={{ name: t('navbar.join_campaign'), to: `/campaign/${campaignIdentifier}/task` }}
        drawerContent={<div />}
      />
      <ShareDialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        modalContent={{
          title    : t('share_dialog.drum_up_support'),
          paragraph: t('share_dialog.lets_face_music'),
        }}
        campaignInfo={campaignInfo}
      />
      <MailChimpDialog
        open={mailChimpDialogOpen}
        header={t('keep_you_posted')}
        body={t('leave_your_email_here')}
        onClose={() => setMailChimpDialogOpen(false)}
        audience="general"
      />
      <Jumbotron
        image={images.mahlerSymphony}
        text={{
          prefixTitle          : t('jumbotron.prefixTitle'),
          primaryTitle         : t('jumbotron.primaryTitle'),
          secondaryTitle       : t('jumbotron.secondaryTitle'),
          introductionParagraph: t('jumbotron.introductionParagraph'),
        }}
        campaignInfo={campaignInfo}
        campaign
      >
        <JumbotronContentCampaign 
          campaignInfo={campaignInfo}
          campaignIdentifier={campaignIdentifier}
          setMailChimpDialogOpen={setMailChimpDialogOpen} 
        />
      </Jumbotron>
    </React.Fragment>
  );
}

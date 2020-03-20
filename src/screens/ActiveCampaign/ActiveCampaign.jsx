import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ShareIcon from '@material-ui/icons/Share';
import NavBar from '../../components/NavBar/NavBar';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import CampaignJumbotronContent from '../../components/CampaignJumbotronContent/CampaignJumbotronContent';
import images from '../../theme/images';

export default function ActiveCampaign ({ match }) {
  const { t }                  = useTranslation('campaign');
  const { campaignIdentifier } = match.params;
  const shareUrl               = `https://trompamusic.eu/campaign/${campaignIdentifier}`;
  const campaignTitle          ='Summer concert: Mahler\'s 6th in the beer garden.'; // temp

  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('campaign')}</title>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[{ name: t('navbar.share'), onClick: () => setShareDialogOpen(true), startIcon: <ShareIcon /> }]}
        primaryButton={{ name: t('navbar.join_campaign'), to: `${campaignIdentifier}/who-are-you` }}
        drawerContent={<div />}
      />
      <ShareDialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        modalContent={{
          title    : t('share_dialog.drum_up_support'),
          paragraph: t('share_dialog.lets_face_music'),
        }}
        shareContent={{
          campaignTitle,
          shareUrl,
        }}
      />
      <Jumbotron
        image={images.mahlerSymphony}
        text={{
          prefixTitle          : t('jumbotron.prefixTitle'),
          primaryTitle         : t('jumbotron.primaryTitle'),
          secondaryTitle       : t('jumbotron.secondaryTitle'),
          introductionParagraph: t('jumbotron.introductionParagraph'),
        }}
        campaignInfo={{
          campaignOwner: 'Annabel',
          scoreTitle   : t('jumbotron.score.title'),
          scoreComment : t('jumbotron.score.paragraph'),
        }}
        campaign
      >
        <CampaignJumbotronContent />
      </Jumbotron>
    </React.Fragment>
  );
}

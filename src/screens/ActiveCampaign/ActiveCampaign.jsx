import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import NavBar from '../../components/NavBar/NavBar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import JumbotronContentCampaign from '../../components/JumbotronContentCampaign/JumbotronContentCampaign';
import ActiveCampaignProgress from '../../components/ActiveCampaignProgress/ActiveCampaignProgress';
import ActiveCampaignTwoSections from '../../components/ActiveCampaignTwoSections/ActiveCampaignTwoSections';
import Footer from '../../components/Footer/Footer';
import images from '../../theme/images';
import styles from './ActiveCampaign.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaign ({ match }) {
  const { t }                                 = useTranslation('campaign');
  const classes                               = useStyles();
  const { campaignIdentifier }                = match.params;
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

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
        navLinks={[{ name: t('navbar.share'), onClick: () => setShareDialogOpen(true), startIcon: <ShareIcon /> }]}
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
      <Jumbotron
        image={images.mahlerSymphony}
        text={{
          primaryTitle         : 'About Trompa Collaboration Campaign Manager',
          introductionParagraph: 'Trompa is developing powerful and advanced tools for musicians. by combining computing power with the knowledge of the best. Whether you’re singing in a choir, playing in an ensemble or conducting an orchestra, Trompa explores new ways to discover, rehearse and perform classical music.',
        }}
        campaignInfo={campaignInfo}
        campaign
      >
        <JumbotronContentCampaign campaignInfo={campaignInfo} />
      </Jumbotron>
      <ActiveCampaignProgress />
      <ActiveCampaignTwoSections />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          secondaryTitle       : 'About Trompa Collaboration Campaign Manager',
          introductionParagraph: 'Trompa is developing powerful and advanced tools for musicians. by combining computing power with the knowledge of the best. Whether you’re singing in a choir, playing in an ensemble or conducting an orchestra, Trompa explores new ways to discover, rehearse and perform classical music.',
        }}
      >
        <Button
          className={classes.buttonHero}
          component={Link}
          to={`campaign/${process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER}`}
          variant="contained"
          color="primary"
        >
          Start today
        </Button>
      </Jumbotron>
      <Footer />
    </React.Fragment>
  );
}

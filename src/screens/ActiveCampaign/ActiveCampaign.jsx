import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import NotFound from '../NotFound';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import MailChimpDialog from '../../components/MailChimpDialog/MailChimpDialog';
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
  const { campaignIdentifier } = match.params;
  const { t }                  = useTranslation('campaign');
  const classes                = useStyles();

  const [shareDialogOpen, setShareDialogOpen]         = useState(false);
  const [mailChimpDialogOpen, setMailChimpDialogOpen] = useState(false);
  const { loading, error, data }                      = useQuery(GET_CAMPAIGN, { variables: { identifier: campaignIdentifier } });
  const campaign                                      = data?.ControlAction[0];
  const author                                        = "TROMPA";

  if (loading) {
    return null;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!loading && !campaign) {
    return <NotFound />;
  }

  const digitalDocument = campaign.object.find(obj => obj.name === 'Work')?.nodeValue;
  const campaignUrl     = `https://trompamusic.eu/campaign/${campaignIdentifier}`;
  const doTaskUrl       = `${process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER}/who-are-you`;

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
        campaign={campaign}
        campaignUrl={campaignUrl}
      />
      <MailChimpDialog
        open={mailChimpDialogOpen}
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
        campaign={campaign}
        author={author}
        digitalDocument={digitalDocument}
        isCampaign
      >
        <JumbotronContentCampaign
          campaign={campaign}
          campaignUrl={campaignUrl}
          to={doTaskUrl}
          setMailChimpDialogOpen={setMailChimpDialogOpen}
        />
      </Jumbotron>
      <ActiveCampaignProgress />
      <ActiveCampaignTwoSections campaign={campaign} digitalDocument={digitalDocument} />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          secondaryTitle       : t('about_collaboration_manager'),
          introductionParagraph: t('trompa_is_developing'),
        }}
      >
        <Button
          className={classes.buttonHero}
          component="button"
          onClick={() => setMailChimpDialogOpen(true)}
          variant="contained"
          color="primary"
        >
          {t('start_today')}
        </Button>
      </Jumbotron>
      <Footer />
    </React.Fragment>
  );
}

export const GET_CAMPAIGN = gql`
    query Campaign($identifier: ID!) {
        ControlAction (identifier: $identifier) {
            identifier
            name
            description
            object {
                ... on PropertyValue {
                    name
                    value
                    nodeValue {
                        ... on DigitalDocument {
                            identifier
                            title
                            source
                        }
                    }
                }
            }
        }
    }
`;

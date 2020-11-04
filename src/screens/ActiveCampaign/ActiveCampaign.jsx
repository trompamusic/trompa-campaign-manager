import React, { useRef, useState } from 'react';
import moment from 'moment';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import NotFound from '../NotFound';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import NavBar from '../../components/NavBar/NavBar';
import TypeformModal from '../../components/TypeformModal';
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

  const subscribeFormRef                      = useRef();
  const openSubscribeForm                     = () => subscribeFormRef.current.typeform.open();
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const { loading, error, data }              = useQuery(GET_CAMPAIGN, { variables: { identifier: campaignIdentifier } });
  const campaign                              = data?.ControlAction[0];
  const author                                = "TROMPA";

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
  const campaignUrl     = window.location.href;
  const campaignEndDate = campaign?.endTime?.day && moment([campaign?.endTime?.year, campaign?.endTime?.month, campaign?.endTime?.day]);
  const doTaskUrl       = `/campaign/${campaignIdentifier}/task`;

  const navLinks      = [{ name: t('home'), to: '/' }];
  const buttons       = [{ name: t('navbar.share'), onClick: () => setShareDialogOpen(true), startIcon: <ShareIcon /> }];
  const primaryButton = { name: t('navbar.join_campaign'), to: doTaskUrl };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {campaign?.name
            ? `${t('help_us_digitize')}: ${campaign?.name}`
            : t('help_us_digitize_untitled')}
        </title>
        <meta name="description" content={campaign?.description || ''} />
      </Helmet>
      <NavBar
        navLinks={navLinks}
        buttons={buttons}
        primaryButton={primaryButton}
      />
      <Jumbotron
        image={digitalDocument.image}
        campaign={campaign}
        author={campaign.agent || author}
        digitalDocument={digitalDocument}
        isCampaignPageHeader
      >
        <JumbotronContentCampaign
          campaign={campaign}
          campaignUrl={campaignUrl}
          endDate={campaignEndDate}
          to={doTaskUrl}
          openSubscribeForm={openSubscribeForm}
        />
      </Jumbotron>
      <ActiveCampaignProgress />
      <ActiveCampaignTwoSections
        campaign={campaign}
        digitalDocument={digitalDocument}
        musicComposition={digitalDocument?.exampleOfWork[0]}
        composer={digitalDocument?.exampleOfWork[0]?.composer[0]}
      />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          aboutTitle : t('about.about_collaboration_manager'),
          description: t('about.trompa_is_developing'),
        }}
      >
        <Button
          className={classes.buttonHero}
          component={Link}
          to={doTaskUrl}
          variant="contained"
          color="primary"
        >
          {t('about.start_today')}
        </Button>
      </Jumbotron>
      <Footer />
      <ShareDialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        modalContent={{
          title    : t('sharedialog.drum_up_support'),
          paragraph: t('sharedialog.lets_face_music'),
        }}
        campaign={campaign}
        campaignUrl={campaignUrl}
      />
      <TypeformModal url={`https://kirkandblackbeard.typeform.com/to/NHbUkT?campaignid=${campaignIdentifier}`} formRef={subscribeFormRef} />
    </React.Fragment>
  );
}

export const GET_CAMPAIGN = gql`
    query Campaign($identifier: ID!) {
        ControlAction (identifier: $identifier) {
            agent
            identifier
            name
            alternateName
            description
            endTime {
              year
              month
              day
            }
            object {
                ... on PropertyValue {
                    name
                    value
                    nodeValue {
                        ... on DigitalDocument {
                            identifier
                            title
                            source
                            image
                            exampleOfWork {
                                ... on MusicComposition {
                                    title
                                    description
                                    composer {
                                        ... on Person {
                                            name
                                            description
                                            birthDate {
                                                formatted
                                            }
                                            deathDate {
                                                formatted
                                            }
                                            image
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

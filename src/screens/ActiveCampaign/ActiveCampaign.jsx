import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import { gql } from 'apollo-boost';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import NotFound from '../NotFound';
import { getCampaignDigitalDocument, hasUrlParameter } from '../../utils';
import useTaskCount from '../../hooks/useTaskCount';
import ShareDialog from '../../components/ShareDialog/ShareDialog';
import NavBar from '../../components/NavBar/NavBar';
import TypeformModal from '../../components/TypeformModal';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import JumbotronContentCampaign from '../../components/JumbotronContentCampaign/JumbotronContentCampaign';
import ActiveCampaignTwoSections from '../../components/ActiveCampaignTwoSections/ActiveCampaignTwoSections';
import ActiveCampaignOverviewSection from '../../components/ActiveCampaignOverviewSection';
import ActiveCampaignOverviewItem from '../../components/ActiveCampaignOverviewItem';
import TaskGroupProgress from '../../containers/TaskGroupProgress';
import Footer from '../../components/Footer/Footer';
import images from '../../theme/images';
import styles from './ActiveCampaign.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaign ({ match }) {
  const { t }                                                           = useTranslation('campaign');
  const classes                                                         = useStyles();
  const subscribeFormRef                                                = useRef();
  const openSubscribeForm                                               = () => subscribeFormRef.current.typeform.open();
  const history                                                         = useHistory();
  const createdParameter                                                = hasUrlParameter("created");
  const [shareDialogOpen, setShareDialogOpen]                           = useState(false);
  const { loading: loadingCampaign, error, data: campaignListResponse } = useQuery(GET_CAMPAIGNS);
  const campaigns                                                       = campaignListResponse?.ControlAction;
  const { campaignIdentifier }                                          = match.params;
  const { loading: loadingCampaignList, data: campaignResponse  }       = useQuery(GET_CAMPAIGN_WITH_COMPOSITION, { variables: { identifier: campaignIdentifier } });
  const campaign                                                        = campaignResponse?.ControlAction?.[0];
  const taskCount                                                       = useTaskCount(campaign);
  const isLoading                                                       = loadingCampaign || loadingCampaignList;

  useEffect(() => {
    if(createdParameter) {
      setShareDialogOpen(true);
    }
  }, [createdParameter]);

  const handleShareDialogClose = () => {
    if(createdParameter) {
      history.replace(`/campaign/${campaignIdentifier}`);
    }
    setShareDialogOpen(false);
  };

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!campaignIdentifier) {
    return <NotFound />;
  }

  const digitalDocument = getCampaignDigitalDocument(campaign);
  const campaignUrl     = window.location.href;
  const campaignEndDate = campaign?.endTime?.formatted && moment(campaign.endTime.formatted);
  const doTaskUrl       = `/campaign/${campaignIdentifier}/task`;
  const navLinks        = [{ name: t('navbar.home'), to: '/' }];
  const buttons         = [{ name: t('navbar.share'), onClick: () => setShareDialogOpen(true), startIcon: <ShareIcon /> }];
  const primaryButton   = { name: t('navbar.join_campaign'), to: doTaskUrl };

  const metaTitle       = campaign?.name ? `${t('help_us_digitize')}: ${campaign?.name}` : t('help_us_digitize_untitled');
  const metaDescription = campaign?.description || '';
  const metaImage       = `${window.location.origin}/assets/social-image.jpg`;

  return (
    <React.Fragment>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={metaImage.replace(/^https:/, 'http:')} />
        <meta property="og:image:secure_url" content={metaImage.replace(/^http:/, 'https:')} />
        <meta property="og:image:width" content={1280} />
        <meta property="og:image:height" content={628} />
      </Helmet>
      <NavBar
        navLinks={navLinks}
        buttons={buttons}
        primaryButton={primaryButton}
      />
      { isLoading ? (
        <div className={classes.spinner}>
          <CircularProgress color="primary" />
        </div>
      ): (
        <React.Fragment>
          <Jumbotron
            image={digitalDocument?.image || images.scoreImage}
            campaign={campaign}
            author={campaign.creator}
            digitalDocument={digitalDocument}
            isCampaignPageHeader
          >
            <JumbotronContentCampaign
              campaign={campaign}
              campaignUrl={campaignUrl}
              endDate={campaignEndDate}
              to={doTaskUrl}
              hasTasksAvailable={taskCount > 0}
              openSubscribeForm={openSubscribeForm}
            />
          </Jumbotron>
          <TaskGroupProgress digitalDocumentIdentifier={digitalDocument?.identifier} />
          <ActiveCampaignTwoSections
            campaign={campaign}
            digitalDocument={digitalDocument}
            musicComposition={digitalDocument?.exampleOfWork[0]}
            composer={digitalDocument?.exampleOfWork?.[0]?.composer?.[0]}
          />
          <ActiveCampaignOverviewSection>
            {campaigns?.map(campaign => {
              const daysToGo        = moment(campaign.endTime.formatted)?.diff(moment(), 'days');
              const digitalDocument = getCampaignDigitalDocument(campaign);

              return (
                <ActiveCampaignOverviewItem
                  key={campaign.identifier}
                  scoreImage={digitalDocument?.image}
                  scoreTitle={digitalDocument?.title}
                  campaignTitle={campaign.title}
                  campaignDeadline={daysToGo}
                  onClick={() => {
                    history.push(`/campaign/${campaign?.identifier}`);
                  }}
                />
              );})}
          </ActiveCampaignOverviewSection>
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
            onClose={handleShareDialogClose}
            modalContent={{
              title    : t('sharedialog.drum_up_support'),
              paragraph: t('sharedialog.lets_face_music'),
            }}
            campaign={campaign}
            campaignUrl={campaignUrl}
          />
          <TypeformModal url={`https://kirkandblackbeard.typeform.com/to/NHbUkT?campaignid=${campaignIdentifier}`} formRef={subscribeFormRef} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const GET_CAMPAIGNS = gql`
    query {
      ControlAction(filter:{wasDerivedFrom:{identifier: "b559c52d-6104-4cb3-ab82-39b82bb2de6c"}}, orderBy: endTime_asc, first: 20) {
        agent
            identifier
            name
            alternateName
            description
            endTime {
              formatted
            }
            object
            {
                ... on PropertyValue {
                    name
                    value
                    nodeValue {
                        ... on DigitalDocument {
                            identifier
                            title
                            source
                            image
                        }
                    }
                }
            }
        }
    }`;

const GET_CAMPAIGN_WITH_COMPOSITION = gql`
  query CampaignWithComposition($identifier: ID!) {
      ControlAction (identifier: $identifier) {
          agent
          identifier
          name
          alternateName
          creator
          description
          endTime {
            formatted
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

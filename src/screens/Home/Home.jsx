import React, { useRef } from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CircularProgress } from '@material-ui/core';
import { getCampaignDigitalDocument } from '../../utils';
import images from '../../theme/images';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavBar from '../../components/NavBar/NavBar';
import TypeformModal from '../../components/TypeformModal';
import HomeTwoSections from '../../components/HomeTwoSections/HomeTwoSections';
import HomeThreeSteps from '../../components/HomeThreeSteps/HomeThreeSteps';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';
import ActiveCampaignOverviewSection from '../../components/ActiveCampaignOverviewSection';
import ActiveCampaignOverviewItem from '../../components/ActiveCampaignOverviewItem';
import HomeAboutTrompa from '../../components/HomeAboutTrompa/HomeAboutTrompa';
import Footer from '../../components/Footer/Footer';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes                  = useStyles();
  const { t }                    = useTranslation('home');
  const history                  = useHistory();
  const startCampaignFormRef     = useRef();
  const {
    loading,
    error,
    data: { ControlAction: campaigns } = {},
  }                              = useQuery(GET_CAMPAIGNS, { variables: { endTime: moment().format() } });
  const publicCampaignIdentifier = process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER;
  const campaign                 = campaigns?.find(({ identifier }) => identifier === publicCampaignIdentifier) || campaigns?.[0];
  const digitalDocument          = getCampaignDigitalDocument(campaign);

  if (error) {
    return null;
  }

  const navLinks      = [{ name: t('home'), to: '/' }, { name: t('start_campaign'), to: '/createcampaign' }];
  const primaryButton = {
    name: t('join_campaign'),
    to  : `campaign/${process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER}`,
  };

  const metaTitle       = campaign?.name ? `${t('help_us_digitize')}: ${campaign?.name}` : t('help_us_digitize_untitled');
  const metaDescription = campaign?.description || '';
  const metaImage       = `${window.location.origin}/assets/social-image.jpg`;

  return (
    <div className={classes.root}>
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
        primaryButton={primaryButton}
      />
      {loading && (
        <div className={classes.spinner}>
          <CircularProgress color="primary" />
        </div>
      )}
      {!loading &&
      <React.Fragment>

        <TypeformModal
          url={`https://kirkandblackbeard.typeform.com/to/BpMzhX?campaignid=${campaign?.identifier}`}
          formRef={startCampaignFormRef}
        />
        <Jumbotron
          image={images.collaborateHero}
          text={{
            slogan     : campaign?.name || t('jumbotron.slogan'),
            description: t('jumbotron.description'),
          }}
          campaign={campaign}
          digitalDocument={digitalDocument}
        >
          {!!campaign &&
          <Button
            className={classes.buttonHero}
            component={Link}
            to={`campaign/${publicCampaignIdentifier}`}
            variant="contained"
            color="primary"
          >
            {t('join_campaign')}
          </Button>
          }
        </Jumbotron>
        <HomeTwoSections />
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
                onClick={() => history.push(`/campaign/${campaign.identifier}`)}
              />
            );
          })}
        </ActiveCampaignOverviewSection>
        <HomeThreeSteps />
        <HomeTestimonials />
        <HomeAboutTrompa />
        <Footer />
      </React.Fragment>
      }
    </div>
  );
}

const GET_CAMPAIGNS = gql`
    query($endTime: String) {
        ControlAction(filter:{
            wasDerivedFrom:{identifier: "b559c52d-6104-4cb3-ab82-39b82bb2de6c"},
            endTime_gt: { formatted: $endTime }
        }, orderBy: endTime_asc, first: 20) {
            identifier
            name
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
                            image
                        }
                    }
                }
            }
        }
    }`;

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

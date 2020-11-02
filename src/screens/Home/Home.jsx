import React, { useState } from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { getCampaignDigitalDocument } from '../../utils';
import images from '../../theme/images';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavBar from '../../components/NavBar/NavBar';
import HomeTwoSections from '../../components/HomeTwoSections/HomeTwoSections';
import HomeThreeSteps from '../../components/HomeThreeSteps/HomeThreeSteps';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';
import ActiveCampaignOverviewSection from '../../components/ActiveCampaignOverviewSection';
import ActiveCampaignOverviewItem from '../../components/ActiveCampaignOverviewItem';
import HomeAboutTrompa from '../../components/HomeAboutTrompa/HomeAboutTrompa';
import Footer from '../../components/Footer/Footer';
import MailChimpDialog from '../../components/MailChimpDialog/MailChimpDialog';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes                                                     = useStyles();
  const history                                                     = useHistory();
  const { t }                                                       = useTranslation('home');
  const { loading, error, data: { ControlAction: campaigns } = {} } = useQuery(GET_CAMPAIGNS);
  const publicCampaignIdentifier                                    = process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER;
  const campaign                                                    = campaigns?.find(({ identifier }) => identifier === publicCampaignIdentifier);
  const digitalDocument                                             = getCampaignDigitalDocument(campaign);
  const [mailChimpDialogOpen, setMailChimpDialogOpen]               = useState(false);

  if (loading || error || !campaign) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>{t('jumbotron.slogan')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[
          { name: t('home'), to: '/' },
          { name: t('start_campaign'), onClick: () => setMailChimpDialogOpen(true) },
        ]}
        primaryButton={{ name: t('join_campaign'), to: `campaign/${publicCampaignIdentifier}` }}
        drawerContent={<div />}
      />
      <MailChimpDialog
        open={mailChimpDialogOpen}
        onClose={() => setMailChimpDialogOpen(false)}
        formLink={`https://kirkandblackbeard.typeform.com/to/BpMzhX?campaignid=${campaign?.identifier}`}
      />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          slogan     : t('jumbotron.slogan'),
          description: t('jumbotron.description'),
        }}
        campaign={campaign}
        digitalDocument={digitalDocument}
      >
        <Button
          className={classes.buttonHero}
          component={Link}
          to={`campaign/${publicCampaignIdentifier}`}
          variant="contained"
          color="primary"
        >
          {t('join_campaign')}
        </Button>
      </Jumbotron>
      <HomeTwoSections />
      <HomeThreeSteps />
      <ActiveCampaignOverviewSection>
        {campaigns?.map(campaign => {
          const deadline        = moment([campaign.endTime.year, campaign.endTime.month, campaign.endTime.day]);
          const daysToGo        = deadline?.diff(moment(), 'days');
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
          );})}
      </ActiveCampaignOverviewSection>
      <HomeTestimonials />
      <HomeAboutTrompa />
      <Footer />
    </div>
  );
}

const GET_CAMPAIGNS = gql`
query {
	ControlAction(filter:{wasDerivedFrom:{identifier: "b559c52d-6104-4cb3-ab82-39b82bb2de6c"}}) {
		identifier
    name
    endTime {
      year
      month
      day
    }
    object(filter: {name: "Work"})
    {
			... on PropertyValue {
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

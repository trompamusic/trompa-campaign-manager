import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import images from '../../theme/images';
import NavBar from '../../components/NavBar/NavBar';
import HomeTwoSections from '../../components/HomeTwoSections/HomeTwoSections';
import HomeThreeSteps from '../../components/HomeThreeSteps/HomeThreeSteps';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';
import HomeAboutTrompa from '../../components/HomeAboutTrompa/HomeAboutTrompa';
import Footer from '../../components/Footer/Footer';
import MailChimpDialog from '../../components/MailChimpDialog/MailChimpDialog';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const { t }                                         = useTranslation('home');
  const { loading, error, data }                      = useQuery(GET_CAMPAIGN, { variables: { identifier: process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER } });
  const classes                                       = useStyles();
  const [mailChimpDialogOpen, setMailChimpDialogOpen] = useState(false);
  const campaign                                      = data?.ControlAction[0];
  const digitalDocument                               = campaign?.object.find(obj => obj.name === 'Work')?.nodeValue;

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
          { name: t('start_campaign'), to: '/createcampaign' },
        ]}
        primaryButton={{ name: t('join_campaign'), to: `campaign/${process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER}` }}
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
          to={`campaign/${process.env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER}`}
          variant="contained"
          color="primary"
        >
          {t('join_campaign')}
        </Button>
      </Jumbotron>
      <HomeTwoSections />
      <HomeThreeSteps />
      <HomeTestimonials />
      <HomeAboutTrompa />
      <Footer />
    </div>
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

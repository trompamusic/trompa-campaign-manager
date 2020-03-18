import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import images from '../../theme/images';
import NavBar from '../../components/NavBar/NavBar';
import HomeTwoSections from '../../components/HomeTwoSections/HomeTwoSections';
import HomeThreeSteps from '../../components/HomeThreeSteps/HomeThreeSteps';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';
import HomeAboutTrompa from '../../components/HomeAboutTrompa/HomeAboutTrompa';
import Footer from '../../components/Footer/Footer';
import MailChimpDialog from '../../components/MailChimpDialog/MailChimpDialog';
import * as startupActions from '../../redux/Startup/Startup.actions';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const { t }                                         = useTranslation('home');
  const classes                                       = useStyles();
  const dispatch                                      = useDispatch();
  const [mailChimpDialogOpen, setMailChimpDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(startupActions.startup());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[
          { name: t('home'), to: '/' },
          { name: t('start_campaign'), onClick: () => setMailChimpDialogOpen(true) },
        ]}
        primaryButton={{ name: t('join_campaign'), to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' }}
        drawerContent={<div />}
      />
      <MailChimpDialog
        open={mailChimpDialogOpen}
        onClose={() => setMailChimpDialogOpen(false)}
        title="temp"
        paragraph="temp"
      />
      <Jumbotron
        image={images.collaborateHero}
        text={{
          prefixTitle          : t('trompa_collaboration_campaign_manager'),
          primaryTitle         : t('make_more_memorable'),
          secondaryTitle       : t('help_us'),
          introductionParagraph: t('create_modern_classics'),
        }}
      >
        <Button
          className={classes.buttonHero}
          component={Link}
          to="campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c"
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

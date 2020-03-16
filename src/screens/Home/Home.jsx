import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import images from '../../theme/images';
import NavBar from '../../components/NavBar/NavBar';
import QuotationMarksIcon from '../../components/Icons/QuotationMarksIcon';
import * as startupActions from '../../redux/Startup/Startup.actions';
import styles from './Home.styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const { t }    = useTranslation('home');
  const classes  = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startupActions.startup());
  }, [dispatch]);

  const renderDrawerContent = () => {
    return (
      <div />
    );
  };

  return (
    <div>
      <Helmet>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <NavBar
        navLinks={[
          { name: t('home'), to: '/' },
          { name: t('start_campaign'), to: '/createCampaign' },
        ]}
        buttons={[
          { name: t('join_campaign'), to: 'campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c' },
        ]}
        renderDrawerContent={renderDrawerContent}
      />
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} item>
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
        </Grid>
        <Grid className={classNames(classes.twoSections, classes.greatScores)} xs={12} md={6} item>
          <section>
            <Typography variant="h2">
              {t('great_scores_title')}
            </Typography>
            <Typography gutterBottom>
              {t('great_scores_paragraph')}
            </Typography>
            <img src={images.greatScores} alt={t('great_scores_alt')} />
          </section>
        </Grid>
        <Grid className={classNames(classes.twoSections, classes.unlockClassics)} xs={12} md={6} item>
          <section>
            <Typography variant="h2">
              {t('unlock_classics_title')}
            </Typography>
            <Typography gutterBottom>
              {t('unlock_classics_paragraph')}
            </Typography>
            <div className={classes.relative}>
              <img src={images.unlockClassics} alt={t('unlock_classics_alt')} />
              <div className={classes.unlockClassicsImageOverlay}>
                <span>500k</span>
                <Typography variant="subtitle2">
                  {t('scores_available_online')}
                  <a target="_blank" rel="noopener noreferrer" href="https://imslp.org/wiki/Main_Page">
                    imslp
                  </a>
                </Typography>
              </div>
            </div>
          </section>
        </Grid>
        <Grid xs={12} item>
          <section>
            <Grid
              direction="row"
              justify="center"
              alignItems="center"
              container
            >
              <Grid className={classes.stepsTextContainer} xs={12} md={6} item>
                <div className={classes.stepsTextContent}>
                  <span className={classes.number}>
                    1
                  </span>
                  <Typography variant="h2">
                    {t('pick_a_score')}
                  </Typography>
                </div>
              </Grid>
              <Grid className={classes.stepsImageContainer} xs={12} md={6} item>
                <img src={images.pickAScore} alt={t('pick_a_score')} />
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid xs={12} item>
          <section>
            <Grid
              className={classes.stepWithGradient}
              direction="row"
              justify="center"
              alignItems="center"
              container
            >
              <Grid className={classes.stepsImageContainer} xs={12} md={6} item>
                <img src={images.algorithmsWillDistribute} alt={t('algorithms_will_distribute')} />
              </Grid>
              <Grid className={classes.stepsTextContainer} xs={12} md={6} item>
                <div className={classes.stepsTextContent}>
                  <span className={classes.number}>
                    2
                  </span>
                  <Typography variant="h2">
                    {t('algorithms_will_distribute')}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid xs={12} item>
          <section>
            <Grid
              direction="row"
              justify="center"
              alignItems="center"
              container
            >
              <Grid className={classes.stepsTextContainer} xs={12} md={6} item>
                <div className={classes.stepsTextContent}>
                  <span className={classes.number}>
                    3
                  </span>
                  <Typography variant="h2">
                    {t('every_collaborator')}
                  </Typography>
                </div>
              </Grid>
              <Grid className={classes.stepsImageContainer} xs={12} md={6} item>
                <img src={images.everyCollaborator} alt={t('every_collaborator')} />
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid xs={12} item>
          <section className={classes.testimonialsContainer}>
            <Typography variant="h2">
              {t('supported_by')}
            </Typography>
            <div className={classes.testimonialsBlock}>
              <div className={classes.testimonial}>
                <QuotationMarksIcon />
                <div className={classes.testimonialHeader}>
                  <img src={images.avatar} alt="" />
                  <div>
                    <Typography variant="h3">
                      Marcel van Tilburg
                    </Typography>
                    <Typography>
                      Koninklijk Concertgebouworkest
                    </Typography>
                  </div>
                </div>
                <Typography>
                  “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
                </Typography>
              </div>
              <div className={classes.testimonial}>
                <QuotationMarksIcon />
                <div className={classes.testimonialHeader}>
                  <img src={images.avatar} alt="" />
                  <div>
                    <Typography variant="h3">
                      Marcel van Tilburg
                    </Typography>
                    <Typography>
                      Koninklijk Concertgebouworkest
                    </Typography>
                  </div>
                </div>
                <Typography>
                  “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
                </Typography>
              </div>
              <div className={classes.testimonial}>
                <QuotationMarksIcon />
                <div className={classes.testimonialHeader}>
                  <img src={images.avatar} alt="" />
                  <div>
                    <Typography variant="h3">
                      Marcel van Tilburg
                    </Typography>
                    <Typography>
                      Koninklijk Concertgebouworkest
                    </Typography>
                  </div>
                </div>
                <Typography>
                  “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
                </Typography>
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
      <footer />
    </div>
  );
}

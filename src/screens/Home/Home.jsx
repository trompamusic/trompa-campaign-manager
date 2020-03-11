import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AppbarTop from '../../components/AppbarTop/AppbarTop';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import images from '../../theme/images';
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

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('welcome_message')} />
      </Helmet>
      <AppbarTop />
      <div className={classes.row}>
        <Jumbotron
          image={images.collaborateHero}
          text={{
            subtitle : t('trompa_collaboration_campaign_manager'),
            h1       : t('make_more_memorable'),
            h2       : t('help_us'),
            paragraph: t('create_modern_classics'),
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
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import MusicProcessIcon from '../../components/Icons/MusicProcessIcon';
import AppbarTop from '../../components/AppbarTop/AppbarTop';
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
      <div className={classes.container}>
        <Button component={Link} to="campaign/e63fc3c5-f84e-4a64-9d5b-98a49dd4680c" startIcon={<MusicProcessIcon />} variant="contained" color="primary">
          {t('go_to_demo_campaign')}
        </Button>
      </div>
    </div>
  );
}

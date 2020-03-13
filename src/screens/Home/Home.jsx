import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import NavBar from '../../components/NavBar/NavBar';
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
      <div className={classes.container} />
    </div>
  );
}

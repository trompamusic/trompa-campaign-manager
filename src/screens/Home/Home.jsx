import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import images from '../../theme/images';
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
      <div className={classes.row}>
        <div className={classes.jumbotron}>
          <div className={classes.jumbotronContent}>
            {/*  */}
          </div>
          <img className={classes.jumbotronImage} src={images.collaborateHero} alt="" />
        </div>
      </div>
    </div>
  );
}

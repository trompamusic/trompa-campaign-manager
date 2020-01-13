import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
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
        <title>{t('home:title')}</title>
        <meta name="description" content={t('home:welcome_message')} />
      </Helmet>
      <div className={classes.hero}>
        <div>
          <Typography variant="h4" color="inherit">
            {t('home:welcome_message')}
          </Typography>
        </div>
      </div>
    </div>
  );
}

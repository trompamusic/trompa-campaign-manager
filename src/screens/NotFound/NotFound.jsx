import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { setPrerenderReady } from '../../utils';
import styles from './NotFound.styles';

const useStyles = makeStyles(styles);

export default function NotFound () {
  const { t }   = useTranslation('not_found');
  const classes = useStyles();

  useEffect(() => {
    setPrerenderReady(true);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t('notfound:title')}</title>
        <meta name="description" content={t('notfound:message')} />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className={classes.root}>
        <div>
          <Typography variant="h4" align="center" paragraph gutterBottom>
            {t('notfound:message')}
          </Typography>
        </div>
        <div className={classes.buttonRow}>
          <Button
            className={classes.button}
            color="primary"
            component={Link}
            children={t('notfound:reload_button_text')}
            to="/"
            variant="contained"
          />
        </div>
      </div>
    </div>
  );
}

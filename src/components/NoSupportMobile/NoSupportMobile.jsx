import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './NoSupportMobile.styles';

const useStyles = makeStyles(styles);

export default function NoSupportMobile () {
  const { t }   = useTranslation('noSupportMobile');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoBlock}>
          <img className={classes.logoIcon} src={images.logoIcon} alt={t('logo_text')} />
          <Typography variant="subtitle2">
            {t('logo_text')}
          </Typography>
        </div>
        <Typography variant="h1">
          {t('title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('paragraph')}
        </Typography>
      </div>
      <img className={classes.heroImage} src={images.collaborateHero} alt="" />
    </div>
  );
}

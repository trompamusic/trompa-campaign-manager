import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Slider from '../Slider';
import styles from './ActiveCampaignOverviewSection.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaignOverviewSection ({ children }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  const campaignItemWidth = 244;

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h2">
        {t('overview.heading')}
      </Typography>
      <Slider itemWidth={campaignItemWidth} framePadding="20px 25px 0 25px">
        {children}
      </Slider>
    </div>
  );
}

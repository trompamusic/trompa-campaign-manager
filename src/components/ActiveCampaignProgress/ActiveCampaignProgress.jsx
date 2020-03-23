import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styles from './ActiveCampaignProgress.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaignProgress () {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  const renderCheckItem = (amountDone, amountTotal, description) => (
    <Grid className={classes.checkItem} xs={12} sm={6} md item>
      <Typography className={classes.amountDone} variant="h3">
        {amountDone}
      </Typography>
      <Typography className={classes.amountTotal} variant="h3">
        /{amountTotal}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Grid>
  );

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          {renderCheckItem('12k', '345k', t('campaignProgress.clefs_checked'))}
          {renderCheckItem('0', '345k', t('campaignProgress.tempo_checked'))}
          {renderCheckItem('0', '345k', t('campaignProgress.measure_checked'))}
          {renderCheckItem('0', '345k', t('campaignProgress.key_checked'))}
          {renderCheckItem('0', '345k', t('campaignProgress.mei_changes'))}
        </Grid>
      </div>
    </section>
  );
}

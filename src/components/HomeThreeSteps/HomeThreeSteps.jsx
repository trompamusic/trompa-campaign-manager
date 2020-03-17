import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './HomeThreeSteps.styles';

const useStyles = makeStyles(styles);

export default function HomeThreeSteps () {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="center"
      container
    >
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
                  {t('three_steps.pick_a_score')}
                </Typography>
              </div>
            </Grid>
            <Grid className={classes.stepsImageContainer} xs={12} md={6} item>
              <img src={images.pickAScore} alt={t('three_steps.pick_a_score')} />
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
              <img src={images.algorithmsWillDistribute} alt={t('three_steps.algorithms_will_distribute')} />
            </Grid>
            <Grid className={classes.stepsTextContainer} xs={12} md={6} item>
              <div className={classes.stepsTextContent}>
                <span className={classes.number}>
                    2
                </span>
                <Typography variant="h2">
                  {t('three_steps.algorithms_will_distribute')}
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
                  {t('three_steps.every_collaborator')}
                </Typography>
              </div>
            </Grid>
            <Grid className={classes.stepsImageContainer} xs={12} md={6} item>
              <img src={images.everyCollaborator} alt={t('three_steps.every_collaborator')} />
            </Grid>
          </Grid>
        </section>
      </Grid>
    </Grid>
  );
}

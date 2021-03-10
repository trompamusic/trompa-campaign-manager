import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './HomeTwoSections.styles';

const useStyles = makeStyles(styles);

export default function HomeTwoSections () {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="stretch"
      container
    >
      <Grid className={classNames(classes.twoSections, classes.greatScores)} xs={12} md={6} item>
        <section>
          <Typography variant="h2">
            {t('two_sections.great_scores_title')}
          </Typography>
          <Typography gutterBottom>
            {t('two_sections.great_scores_paragraph')}
          </Typography>
          <img src={images.greatScores} alt={t('two_sections.great_scores_alt')} />
        </section>
      </Grid>
      <Grid className={classNames(classes.twoSections, classes.unlockClassics)} xs={12} md={6} item>
        <section>
          <Typography variant="h2">
            {t('two_sections.unlock_classics_title')}
          </Typography>
          <Typography gutterBottom>
            {t('two_sections.unlock_classics_paragraph')}
          </Typography>
          <div className={classes.relative}>
            <img src={images.unlockClassics} alt={t('two_sections.unlock_classics_alt')} />
            <div className={classes.unlockClassicsImageOverlay}>
              <span>500k</span>
              <Typography variant="subtitle2">
                {t('two_sections.scores_available_online')}
                <a target="_blank" rel="noopener noreferrer" href="https://imslp.org/wiki/Main_Page">
                imslp
                </a>
              </Typography>
            </div>
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

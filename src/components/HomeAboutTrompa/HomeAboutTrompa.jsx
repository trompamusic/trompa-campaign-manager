import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './HomeAboutTrompa.styles';

const useStyles = makeStyles(styles);

export default function HomeAboutTrompa () {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="center"
      container
    >
      <Grid className={classes.aboutTrompaSection} xs={12} item>
        <section>
          <Typography variant="h2">
            {t('about.about_trompa')}
          </Typography>
          <Typography>
            {t('about.about_trompa_paragraph')}
          </Typography>
          <div className={classes.partnersContainer}>
            <img src={images.partnerUpfTide} alt={t('about.partners.uptide')} />
            <img src={images.partnerUpfMtg} alt={t('about.partners.upfmtg')} />
            <img src={images.partnerMuziekweb} alt={t('about.partners.muziekweb')} />
            <img src={images.partnerPeachnote} alt={t('about.partners.peachnote')} />
            <img src={images.partnerVideodock} alt={t('about.partners.videodock')} />
            <img src={images.partnerGoldsmiths} alt={t('about.partners.goldsmiths')} />
            <img className={classes.verticalLogo} src={images.partnerRco} alt={t('about.partners.rco')} />
            <img className={classes.smallLogo} src={images.partnerVoctroLabs} alt={t('about.partners.voctroLabs')} />
            <img className={classes.verticalLogo} src={images.partnerMdw} alt={t('about.partners.mdw')} />
            <img className={classes.smallLogo} src={images.partnerTuDelft} alt={t('about.partners.tudelft')} />
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

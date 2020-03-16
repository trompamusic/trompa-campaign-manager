import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './AboutTrompa.styles';

const useStyles = makeStyles(styles);

export default function AboutTrompa () {
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
            {t('about_TROMPA')}
          </Typography>
          <Typography>
            {t('about_TROMPA_paragraph')}
          </Typography>
          <div className={classes.partnersContainer}>
            <img src={images.partnerUpfTide} alt={t('partners.uptide')} />
            <img src={images.partnerUpfMtg} alt={t('partners.upfmtg')} />
            <img src={images.partnerMuziekweb} alt={t('partners.muziekweb')} />
            <img src={images.partnerPeachnote} alt={t('partners.peachnote')} />
            <img src={images.partnerVideodock} alt={t('partners.videodock')} />
            <img src={images.partnerGoldsmiths} alt={t('partners.goldsmiths')} />
            <img className={classes.verticalLogo} src={images.partnerRco} alt={t('partners.rco')} />
            <img className={classes.verticalLogo} src={images.partnerVoctroLabs} alt={t('partners.voctroLabs')} />
            <img className={classes.verticalLogo} src={images.partnerMdw} alt={t('partners.mdw')} />
            <img src={images.partnerTuDelft} alt={t('partners.tudelft')} />
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

AboutTrompa.propTypes = {};

AboutTrompa.defaultProps = {};

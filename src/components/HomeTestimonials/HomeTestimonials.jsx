import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import QuotationMarksIcon from '../Icons/QuotationMarksIcon';
import styles from './HomeTestimonials.styles';

const useStyles = makeStyles(styles);

export default function HomeTestimonials () {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2">
        {t('testimonials.supported_by')}
      </Typography>
      <div className={classes.container}>
        <div className={classes.testimonialItem}>
          <QuotationMarksIcon />
          <div className={classes.testimonialHead}>
            <img src={images.avatarMahler} alt="" />
            <div>
              <Typography variant="h3">
              G. Mahler
              </Typography>
              <Typography>
                {t('testimonials.composer')}
              </Typography>
            </div>
          </div>
          <Typography>
          "{t('testimonials.quoteMahler')}"
          </Typography>
        </div>
        <div className={classes.testimonialItem}>
          <QuotationMarksIcon />
          <div className={classes.testimonialHead}>
            <img src={images.avatarMozart} alt="" />
            <div>
              <Typography variant="h3">
              W. A. Mozart
              </Typography>
              <Typography>
                {t('testimonials.composer')}
              </Typography>
            </div>
          </div>
          <Typography>
          "{t('testimonials.quoteMozart')}"
          </Typography>
        </div>
        <div className={classes.testimonialItem}>
          <QuotationMarksIcon />
          <div className={classes.testimonialHead}>
            <img src={images.avatarBeethoven} alt="" />
            <div>
              <Typography variant="h3">
              L. von Beethoven
              </Typography>
              <Typography>
                {t('testimonials.composer')}
              </Typography>
            </div>
          </div>
          <Typography>
          "{t('testimonials.quoteBeethoven')}"
          </Typography>
        </div>
      </div>
    </section>
  );
}

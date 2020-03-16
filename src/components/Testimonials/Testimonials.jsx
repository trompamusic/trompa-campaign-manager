import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import QuotationMarksIcon from '../../components/Icons/QuotationMarksIcon';
import styles from './Testimonials.styles';

const useStyles = makeStyles(styles);

export default function Testimonials () {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="center"
      container
    >
      <Grid xs={12} item>
        <section className={classes.testimonialsContainer}>
          <Typography variant="h2">
            {t('supported_by')}
          </Typography>
          <div className={classes.testimonialsBlock}>
            <div className={classes.testimonial}>
              <QuotationMarksIcon />
              <div className={classes.testimonialHeader}>
                <img src={images.avatar} alt="" />
                <div>
                  <Typography variant="h3">
                  Marcel van Tilburg
                  </Typography>
                  <Typography>
                  Koninklijk Concertgebouworkest
                  </Typography>
                </div>
              </div>
              <Typography>
              “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
              </Typography>
            </div>
            <div className={classes.testimonial}>
              <QuotationMarksIcon />
              <div className={classes.testimonialHeader}>
                <img src={images.avatar} alt="" />
                <div>
                  <Typography variant="h3">
                  Marcel van Tilburg
                  </Typography>
                  <Typography>
                  Koninklijk Concertgebouworkest
                  </Typography>
                </div>
              </div>
              <Typography>
              “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
              </Typography>
            </div>
            <div className={classes.testimonial}>
              <QuotationMarksIcon />
              <div className={classes.testimonialHeader}>
                <img src={images.avatar} alt="" />
                <div>
                  <Typography variant="h3">
                  Marcel van Tilburg
                  </Typography>
                  <Typography>
                  Koninklijk Concertgebouworkest
                  </Typography>
                </div>
              </div>
              <Typography>
              “The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.”
              </Typography>
            </div>
          </div>
        </section>
      </Grid>
    </Grid>
  );
}

Testimonials.propTypes = {};

Testimonials.defaultProps = {};

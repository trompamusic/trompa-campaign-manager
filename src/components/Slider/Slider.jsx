import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './Slider.styles';

const useStyles = makeStyles(styles);

export default function Slider ({ children, slidesToShow = 4, framePadding }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <Carousel
      cellSpacing={16}
      framePadding={framePadding}
      slidesToShow={slidesToShow}
      renderCenterLeftControls={({ previousSlide, currentSlide }) => {
        return currentSlide > 0 ? (
          <IconButton classes={{ root: classes.slideButton }} onClick={previousSlide} aria-label={t('overview.slide_left')}>
            <ArrowBackIcon />
          </IconButton>
        ) : null;}}
      renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {
        const isLastSlide = currentSlide + slidesToShow === slideCount;

        return !isLastSlide ? (
          <IconButton classes={{ root: classes.slideButton }} onClick={nextSlide} aria-label={t('overview.slide_right')}>
            <ArrowForwardIcon />
          </IconButton>
        ) : null;}}
    >
      {children}
    </Carousel>
  );
}

Slider.propTypes = {
  slidesToShow: PropTypes.number,
  framePadding: PropTypes.string,
};

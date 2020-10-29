import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './Slider.styles';

const useStyles = makeStyles(styles);

export default function Slider ({ children, itemWidth, framePadding }) {
  const classes                = useStyles();
  const { width: windowWidth } = useWindowSize();
  const { t }                  = useTranslation('campaign');
  const slidesToShow           = calculateSlidesToShow(windowWidth, itemWidth);

  return (
    <Carousel
      slidesToShow={slidesToShow}
      framePadding={framePadding}
      renderCenterLeftControls={({ previousSlide, currentSlide }) => {
        return currentSlide > 0 ? (
          <IconButton classes={{ root: classes.slideButton }} onClick={previousSlide} aria-label={t('overview.slide_left')}>
            <ArrowBackIcon />
          </IconButton>
        ) : null;}}
      renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {
        const nextSlideAvailable = currentSlide + slidesToShow < slideCount;

        return nextSlideAvailable ? (
          <IconButton classes={{ root: classes.slideButton }} onClick={nextSlide} aria-label={t('overview.slide_right')}>
            <ArrowForwardIcon />
          </IconButton>
        ) : null;}}
      cellSpacing={16}
      scrollMode="page"
    >
      {children}
    </Carousel>
  );
}

Slider.propTypes = {
  itemWidth   : PropTypes.number.isRequired,
  framePadding: PropTypes.string,
};

function calculateSlidesToShow (windowWidth, itemWidth) {
  const minimumSlides = 2;

  if(!windowWidth || !itemWidth) return minimumSlides;

  const amountToShow = Math.floor(windowWidth / itemWidth) - 1;

  return amountToShow > minimumSlides ? amountToShow : minimumSlides;
};


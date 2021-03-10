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
  const slidesToShow           = getSlidesToShow(windowWidth, itemWidth);
  const slideCount             = children?.length;

  function getSlidesToShow (windowWidth, itemWidth) {
    const shouldShowOneItem = (windowWidth / 2) <= itemWidth;
    const minimumSlides     = shouldShowOneItem ? 1: 2;

    if(!windowWidth || !itemWidth) return minimumSlides;

    const slidesToShow = Math.floor(windowWidth / itemWidth) - 1;

    return slidesToShow > minimumSlides ? slidesToShow : minimumSlides;
  };

  const renderCenterLeftControls = ({ previousSlide, currentSlide }) => {
    return currentSlide > 0 ? (
      <IconButton classes={{ root: classes.slideButton }} onClick={previousSlide} aria-label={t('overview.slide_left')}>
        <ArrowBackIcon />
      </IconButton>
    ) : null;};

  const renderCenterRightControls = ({ nextSlide, currentSlide, slideCount }) => {
    const moreSlidesAvailable = currentSlide + slidesToShow < slideCount;

    return moreSlidesAvailable ? (
      <IconButton classes={{ root: classes.slideButton }} onClick={nextSlide} aria-label={t('overview.slide_right')}>
        <ArrowForwardIcon />
      </IconButton>
    ) : null;};

  return (
    <Carousel
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}
      framePadding={framePadding}
      renderCenterLeftControls={renderCenterLeftControls}
      renderCenterRightControls={renderCenterRightControls}
      renderBottomCenterControls={slideCount <= slidesToShow ? null : undefined}
      cellSpacing={16}
    >
      {children}
    </Carousel>
  );
}

Slider.propTypes = {
  itemWidth   : PropTypes.number.isRequired,
  framePadding: PropTypes.string,
};


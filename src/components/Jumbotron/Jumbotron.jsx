import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './Jumbotron.styles';

const useStyles = makeStyles(styles);

export default function Jumbotron ({ children, image, text }) {
  const classes = useStyles();

  const renderContent = device => (
    <div className={classes[device]}>
      <div className={classes.prefixTitle}>
        <img className={classes.logoIcon} src={images.logoIcon} alt="" />
        <Typography variant="subtitle2">
          {text.prefixTitle}
        </Typography>
      </div>
      <Typography variant="h1">
        {text.primaryTitle}
      </Typography>
      <Typography variant="h2">
        {text.secondaryTitle}
        <span className={classes.compositionTitle}>Requiem in D minor</span>
      </Typography>
      <Typography gutterBottom>
        {text.introductionParagraph}
      </Typography>
      {children}
    </div>
  );

  return (
    <header>
      <div className={classes.root}>
        {renderContent('desktop')}
        <img className={classes.image} src={image} alt="" />
      </div>
      {renderContent('mobile')}
    </header>
  );
}

Jumbotron.propTypes = {
  image: PropTypes.string,
  text : PropTypes.exact({
    prefixTitle          : PropTypes.string,
    primaryTitle         : PropTypes.string,
    secondaryTitle       : PropTypes.string,
    introductionParagraph: PropTypes.string,
  }),
};

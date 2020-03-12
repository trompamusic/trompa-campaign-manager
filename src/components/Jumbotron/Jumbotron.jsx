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
      <div className={classes.subtitle}>
        <img className={classes.logoIcon} src={images.logoIcon} alt="" />
        <Typography variant="subtitle2">
          {text.subtitle}
        </Typography>
      </div>
      <Typography variant="h1">
        {text.h1}
      </Typography>
      <Typography variant="h2">
        {text.h2}
        <span className={classes.compositionTitle}>Requiem in D minor</span>
      </Typography>
      <Typography gutterBottom>
        {text.paragraph}
      </Typography>
      {children}
    </div>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        {renderContent('desktop')}
        <img className={classes.image} src={image} alt="" />
      </div>
      {renderContent('mobile')}
    </React.Fragment>
  );
}

Jumbotron.propTypes = {
  image: PropTypes.string,
  text : PropTypes.exact({
    subtitle : PropTypes.string,
    h1       : PropTypes.string,
    h2       : PropTypes.string,
    paragraph: PropTypes.string,
  }),
};

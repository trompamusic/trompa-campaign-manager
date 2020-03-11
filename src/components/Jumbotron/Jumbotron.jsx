import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './Jumbotron.styles';

const useStyles = makeStyles(styles);

export default function Jumbotron ({ children, image, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentSection}>
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
        </Typography>
        <Typography gutterBottom>
          {text.paragraph}
        </Typography>
        {children}
      </div>
      <img className={classes.image} src={image} alt="" />
    </div>
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

Jumbotron.defaultProps = {};

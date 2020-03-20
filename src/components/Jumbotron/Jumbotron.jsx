import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './Jumbotron.styles';

const useStyles = makeStyles(styles);

export default function Jumbotron ({ children, image, text, campaign, campaignInfo }) {
  const classes = useStyles();

  const renderContent = device => (
    <div className={classes[device]}>
      {!campaign && (
        <div className={classes.prefixTitleHome}>
          <img className={classes.logoIcon} src={images.logoIcon} alt="" />
          <Typography variant="subtitle2">
            {text?.prefixTitle}
          </Typography>
        </div>
      )}
      {campaign && (
        <div className={classes.prefixTitleCampaign}>
          <span className={classes.avatar} >
            <img src={images.avatarOne} alt="" />
          </span>
          <Typography variant="caption">
            <Link>{campaignInfo?.campaignOwner}</Link>
            {text?.prefixTitle}
          </Typography>
        </div>
      )}
      <Typography variant="h1">
        {text?.primaryTitle}
      </Typography>
      <Typography variant="h2">
        {text?.secondaryTitle}
        {!campaign && (<span className={classes.compositionTitle}>Requiem in D minor</span>)}
      </Typography>
      <Typography gutterBottom>
        {text?.introductionParagraph}
      </Typography>
      {children}
    </div>
  );

  return (
    <header>
      <div className={classes.root}>
        {renderContent('desktop')}
        {!campaign && (<img className={classes.image} src={image} alt="" />)}
        {campaign && (
          <div className={classes.score}>
            <Typography variant="h3">
              {campaignInfo?.scoreTitle}
            </Typography>
            <Typography gutterBottom>
              {campaignInfo?.scoreComment}
            </Typography>
            <img className={classes.scoreImage} src={image} alt="" />
          </div>
        )}
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
  campaign    : PropTypes.bool,
  campaignInfo: PropTypes.exact({
    campaignOwner: PropTypes.string,
    scoreTitle   : PropTypes.string,
    scoreComment : PropTypes.string,
  }),
};

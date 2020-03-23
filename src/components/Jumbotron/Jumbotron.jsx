import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './Jumbotron.styles';

const useStyles = makeStyles(styles);

export default function Jumbotron ({
  children,
  image,
  text: {
    prefixTitle,
    primaryTitle,
    secondaryTitle,
    introductionParagraph,
  },
  campaign,
  author,
  digitalDocument,
  isCampaign,
}) {
  const classes = useStyles();

  const renderContent = device => (
    <div className={classNames(classes[device], { [classes.campaign]: isCampaign })}>
      {!isCampaign && prefixTitle && (
        <div className={classes.prefixTitleHome}>
          <img className={classes.logoIcon} src={images.logoIcon} alt="" />
          <Typography variant="subtitle2">
            {prefixTitle}
          </Typography>
        </div>
      )}
      {isCampaign && (
        <div className={classes.prefixTitleCampaign}>
          <span className={classes.avatar} >
            <img src={images.avatarOne} alt="" />
          </span>
          <Typography variant="caption">
            <Link to="#">{author}</Link>
            {prefixTitle}
          </Typography>
        </div>
      )}
      {primaryTitle && (
        <Typography variant="h1">
          {primaryTitle}
        </Typography>
      )}
      <Typography variant="h2">
        {secondaryTitle ? secondaryTitle : <span className={classes.compositionTitle}>{campaign?.name}</span>}
      </Typography>
      <Typography gutterBottom>
        {isCampaign ? campaign?.description : introductionParagraph}
      </Typography>
      {children}
    </div>
  );

  return (
    <header>
      <div className={classNames(classes.root, { [classes.campaign]: isCampaign })}>
        {renderContent('desktop')}
        {!isCampaign && (<img className={classes.image} src={image} alt="" />)}
        {isCampaign && (
          <div className={classes.score}>
            <Typography variant="h3">
              {digitalDocument?.title}
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
  campaign       : PropTypes.object,
  digitalDocument: PropTypes.object,
  author         : PropTypes.string,
  isCampaign     : PropTypes.bool,
};

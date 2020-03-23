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
  campaignInfo,
}) {
  const classes = useStyles();

  const renderContent = device => (
    <div className={classNames(classes[device], { [classes.campaign]: campaign })}>
      {!campaign && (
        <div className={classes.prefixTitleHome}>
          <img className={classes.logoIcon} src={images.logoIcon} alt="" />
          <Typography variant="subtitle2">
            {prefixTitle}
          </Typography>
        </div>
      )}
      {campaign && (
        <div className={classes.prefixTitleCampaign}>
          <span className={classes.avatar} >
            <img src={images.avatarOne} alt="" />
          </span>
          <Typography variant="caption">
            <Link to="">{campaignInfo?.campaignOwner}</Link>
            {prefixTitle}
          </Typography>
        </div>
      )}
      <Typography variant="h1">
        {primaryTitle}
      </Typography>
      <Typography variant="h2">
        {secondaryTitle} <span className={classes.compositionTitle}>{campaignInfo?.campaignTitle}</span>
      </Typography>
      <Typography gutterBottom>
        {introductionParagraph}
      </Typography>
      {children}
    </div>
  );

  return (
    <header>
      <div className={classNames(classes.root, { [classes.campaign]: campaign })}>
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
  campaignInfo: PropTypes.shape({
    campaignOwner: PropTypes.string,
    campaignTitle: PropTypes.string,
    campaignUrl  : PropTypes.string,
    scoreTitle   : PropTypes.string,
    scoreComment : PropTypes.string,
  }),
};

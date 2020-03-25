import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './Jumbotron.styles';

const useStyles = makeStyles(styles);

export default function Jumbotron ({
  children,
  image,
  author,
  text,
  campaign,
  digitalDocument,
  isCampaignPageHeader,
}) {
  const classes = useStyles();
  const { t }   = useTranslation('common');

  const renderContent = device => (
    <div className={classNames(classes[device], { [classes.campaign]: isCampaignPageHeader })}>
      {isCampaignPageHeader && (
        <div className={classes.prefixTitleCampaign}>
          <span className={classes.avatar} >
            <img src={images.avatarOne} alt="" />
          </span>
          <Typography variant="caption">
            <Link to="#">{author}</Link>
            {t('jumbotron.has_started')}
          </Typography>
        </div>
      )}
      {!isCampaignPageHeader && (
        <div className={classes.prefixTitleHome}>
          <img className={classes.logoIcon} src={images.logoIcon} alt="" />
          <Typography variant="subtitle2">
            {t('jumbotron.trompa_collaboration_manager')}
          </Typography>
        </div>
      )}
      {isCampaignPageHeader && (
        <Typography variant="h1">
          {t('jumbotron.help_us_digitize')}
          <span className={classes.compositionTitle}>{campaign?.name}</span>
        </Typography>
      )}
      {!isCampaignPageHeader && text?.slogan && (
        <Typography variant="h1">
          {text?.slogan}
        </Typography>
      )}
      {isCampaignPageHeader && (
        <Typography variant="h2">
          {campaign?.alternateName || "So we can play it at the beer garden festival in May"}
        </Typography>
      )}
      {!isCampaignPageHeader && text?.aboutTitle && (
        <Typography variant="h2">
          {text?.aboutTitle}
        </Typography>
      )}
      {!isCampaignPageHeader && !text?.aboutTitle && (
        <Typography variant="h2">
          {t('jumbotron.help_us_digitize')}
          <span className={classes.compositionTitle}>
            {campaign?.name}
          </span>
        </Typography>
      )}
      <Typography gutterBottom>
        {isCampaignPageHeader ? campaign?.description : text?.description}
      </Typography>
      {children}
    </div>
  );

  return (
    <header>
      <div className={classNames(classes.root, { [classes.campaign]: isCampaignPageHeader })}>
        {renderContent('desktop')}
        {!isCampaignPageHeader && (<img className={classes.image} src={image} alt="" />)}
        {isCampaignPageHeader && (
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
  image               : PropTypes.string,
  author              : PropTypes.string,
  text                : PropTypes.object,
  campaign            : PropTypes.object,
  digitalDocument     : PropTypes.object,
  isCampaignPageHeader: PropTypes.bool,
};

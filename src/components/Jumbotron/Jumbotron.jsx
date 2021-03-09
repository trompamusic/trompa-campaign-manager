import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ScoreContainer from '../../containers/ScoreContainer/ScoreContainer';
import images from '../../theme/images';
import ScoreModal from '../ScoreModal/ScoreModal';
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
  const classes                            = useStyles();
  const { t }                              = useTranslation('common');
  const [scoreModalOpen, toggleScoremodal] = useState(false);

  const extractSourceName = str => {
    if(!str) return "";
    const value = str.substring(str.lastIndexOf('/') + 1);
    return value.substring(0, value.lastIndexOf('.'));
 }

  const renderContent = device => (
    <div className={classNames(classes[device], { [classes.campaign]: isCampaignPageHeader })}>
      {isCampaignPageHeader && (
        <div className={classes.prefixTitleCampaign}>
          {author && (
            <span className={classes.avatar} >
              <img src={images.avatarOne} alt="" />
            </span>)}
          {author && (
            <Typography variant="caption">
              <Link to="#">{author}</Link>
              {t('jumbotron.has_started')}
            </Typography>)}
        </div>
      )}
      {!isCampaignPageHeader && (
        <div className={classes.prefixTitleHome}>
          <img className={classes.logoIcon} src={images.logoIcon} alt={t('jumbotron.score')} />
          <Typography variant="subtitle2">
            {t('jumbotron.trompa_collaboration_manager')}
          </Typography>
        </div>
      )}
      {isCampaignPageHeader && (
        <Typography variant="h1">
          {campaign?.name}
        </Typography>
      )}
      {!isCampaignPageHeader && text?.slogan && (
        <Typography variant="h1">
          {text?.slogan}
        </Typography>
      )}
      {isCampaignPageHeader && campaign?.alternateName && (
        <Typography variant="h2">
          {campaign?.alternateName}
        </Typography>
      )}
      {!isCampaignPageHeader && text?.aboutTitle && (
        <Typography variant="h2">
          {text?.aboutTitle}
        </Typography>
      )}
      {!isCampaignPageHeader && digitalDocument?.title && (
        <Typography variant="h2">
          {t('jumbotron.help_us_digitize')}
          <span className={classes.compositionTitle}>
            {digitalDocument.title}
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
          <div className={classes.score} >
            <Typography variant="h3" color="inherit">
              {digitalDocument?.title}
            </Typography>
            <ScoreContainer pdfName={extractSourceName(digitalDocument.source)}/>
            <Button className={classes.toggleScoreModal} startIcon={<RemoveRedEyeIcon color="inherit" />} onClick={() => toggleScoremodal(true)}>
              <Typography variant="body2" color="inherit">
              View progress
              </Typography>
            </Button>
            <Typography className={classes.progress} variant="body2" color="inherit">
            2/12 pages done
            </Typography>
          </div>
        )}
      </div>
      {renderContent('mobile')}
      <ScoreModal isOpen={scoreModalOpen} onClose={() => toggleScoremodal(false)} />
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

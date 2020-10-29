import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import images from '../../theme/images';
import styles from './ActiveCampaignOverviewItem.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaignOverviewItem ({ scoreImage, scoreTitle, campaignTitle, campaignDeadline }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={scoreImage} alt={t('overview.score')} />
      </div>
      <div className={classes.metaContainer}>
        <Typography className={classes.caption}>
          {scoreTitle}
        </Typography>
        <Typography className={classes.title} variant="h2">
          {campaignTitle}
        </Typography>
        <Typography>
          {campaignDeadline}
        </Typography>
      </div>
    </div>
  );
}

ActiveCampaignOverviewItem.propTypes = {
  scoreImage      : PropTypes.string,
  scoreTitle      : PropTypes.string,
  campaignTitle   : PropTypes.string,
  campaignDeadline: PropTypes.string,
};

ActiveCampaignOverviewItem.defaultProps = {
  scoreImage: images.scorePlaceholder,
};

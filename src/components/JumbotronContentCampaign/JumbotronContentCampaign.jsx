import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CopyAndShareRow from '../CopyAndShareRow/CopyAndShareRow';
import styles from './JumbotronContentCampaign.styles';

const useStyles = makeStyles(styles);

export default function JumbotronContentCampaign ({ campaign, campaignUrl, endDate, to, setMailChimpDialogOpen }) {
  const { t }    = useTranslation('campaign');
  const classes  = useStyles();
  const daysLeft = endDate?.diff(moment(), 'days');

  return (
    <div className={classes.root}>
      <Typography className={classes.daysToGo}>
        {daysLeft
          ? t('jumbotron.days_to_go', { count: daysLeft })
          : t('jumbotron.no_deadline_available')}
      </Typography>
      <Typography className={classes.deadline}>
        {endDate && `${t('jumbotron.deadline')}: ${endDate.format("MMMM Do YYYY")}`}
      </Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.primaryButton}
          component={Link}
          to={to}
          variant="contained"
          color="primary"
        >
          {t('navbar.join_campaign')}
        </Button>
        <Button
          component="button"
          onClick={() => setMailChimpDialogOpen(true)}
          variant="text"
          startIcon={<NotificationsIcon />}
        >
          {t('jumbotron.subscribe_for_updates')}
        </Button>
      </div>
      <CopyAndShareRow className={classes.copyAndShareRow} campaign={campaign} campaignUrl={campaignUrl} />
    </div>
  );
}

JumbotronContentCampaign.propTypes = {
  campaign              : PropTypes.object,
  campaignUrl           : PropTypes.string,
  campaignEndDate       : PropTypes.string,
  to                    : PropTypes.string,
  setMailChimpDialogOpen: PropTypes.func,
};

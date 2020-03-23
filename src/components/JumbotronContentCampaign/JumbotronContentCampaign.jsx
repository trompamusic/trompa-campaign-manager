import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CopyAndShareRow from '../CopyAndShareRow/CopyAndShareRow';
import styles from './JumbotronContentCampaign.styles';

const useStyles = makeStyles(styles);

export default function JumbotronContentCampaign ({ campaign, campaignUrl, to, setMailChimpDialogOpen }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.daysToGo}>
        33 days to go
      </Typography>
      <Typography className={classes.deadline}>
        Deadline: 16 May 2020
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
  to                    : PropTypes.string,
  setMailChimpDialogOpen: PropTypes.func,
};

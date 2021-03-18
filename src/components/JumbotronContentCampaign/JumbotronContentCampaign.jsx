import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CopyAndShareRow from '../CopyAndShareRow/CopyAndShareRow';
import useWidth from '../../hooks/useWidth';
import styles from './JumbotronContentCampaign.styles';

const useStyles = makeStyles(styles);

export default function JumbotronContentCampaign ({ campaign, campaignUrl, endDate, to, openSubscribeForm, hasTasksAvailable }) {
  const { t }   = useTranslation('campaign');
  const width   = useWidth();
  const classes = useStyles();

  let daysLeft = endDate?.diff(moment(), 'days');

  if(daysLeft < 0) daysLeft = 0;

  return (
    <div className={classes.root}>
      {endDate &&
        <Typography className={classes.daysToGo}>
          {t('jumbotron.days_to_go', { count: daysLeft }) }
        </Typography>
      }
      <Typography className={classes.deadline}>
        {endDate && `${t('jumbotron.deadline')}: ${endDate.format("MMMM Do YYYY")}`}
      </Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.primaryButton}
          component={Link}
          to={to}
          variant="contained"
          disabled={!hasTasksAvailable}
          color="primary"
          fullWidth={['xs', 'sm', 'md'].includes(width)}
        >
          {hasTasksAvailable ? t('navbar.join_campaign') : t('jumbotron.processing_score')}
        </Button>
      </div>
      <CopyAndShareRow campaign={campaign} campaignUrl={campaignUrl} />
    </div>
  );
}

JumbotronContentCampaign.propTypes = {
  campaign         : PropTypes.object,
  campaignUrl      : PropTypes.string,
  campaignEndDate  : PropTypes.string,
  to               : PropTypes.string,
  openSubscribeForm: PropTypes.func,
  hasTasksAvailable: PropTypes.bool,
};

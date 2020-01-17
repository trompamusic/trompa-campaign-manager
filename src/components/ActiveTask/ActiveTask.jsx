import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AppbarTop from '../AppbarTop/AppbarTop';
import AppbarBottom from '../AppbarBottom/AppbarBottom';
import styles from './ActiveTask.styles';

const useStyles = makeStyles(styles);

export default function ActiveTask ({ loading, noTasks, url, campaignIdentifier, onNextTaskButtonClick }) {
  const { t }   = useTranslation('task');
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop>
        <Button component={Link} to={`/campaign/${campaignIdentifier}`} startIcon={<CloseIcon />} variant="text">
          {t('close')}
        </Button>
      </AppbarTop>
      <iframe
        src={url}
        className={classes.iframe}
        name="task-iframe"
        title={t('task')}
      />
      <AppbarBottom>
        {loading && (
          <Button variant="contained" color="primary" disabled>
            {t('loading')}
          </Button>
        )}
        {noTasks && (
          <Button variant="contained" disabled>
            {t('no_tasks_left')}
          </Button>
        )}
        {!loading && !noTasks && (
          <Button onClick={() => onNextTaskButtonClick()} variant="contained" color="primary">
            {t('next_task')}
          </Button>
        )}
      </AppbarBottom>
    </React.Fragment>
  );
}

ActiveTask.propTypes = {
  loading              : PropTypes.bool,
  noTasks              : PropTypes.bool,
  name                 : PropTypes.string,
  url                  : PropTypes.string,
  campaignIdentifier   : PropTypes.string,
  onNextTaskButtonClick: PropTypes.func,
};

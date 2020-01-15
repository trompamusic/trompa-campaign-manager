import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AppbarTop from '../AppbarTop/AppbarTop';
import AppbarBottom from '../AppbarBottom/AppbarBottom';
import styles from './ActiveTask.styles';

const useStyles = makeStyles(styles);

export default function ActiveTask () {
  const { t }   = useTranslation('task');
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop>
        <Button startIcon={<CloseIcon />} variant="text">
          {t('close')}
        </Button>
      </AppbarTop>
      <iframe
        src="http://www.aap.nl"
        className={classes.iframe}
        name="task-iframe"
        title={t('task')}
      />
      <AppbarBottom>
        <Button variant="contained" color="primary">
          {t('next_task')}
        </Button>
      </AppbarBottom>
    </React.Fragment>
  );
}
ActiveTask.defaultProps = {};

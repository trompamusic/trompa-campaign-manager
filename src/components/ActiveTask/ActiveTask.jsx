import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import images from '../../theme/images';
import styles from './ActiveTask.styles';

const useStyles = makeStyles(styles);

export default function ActiveTask () {
  const { t }   = useTranslation("task");
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar classes={{ dense: classes.toolbarTop }} variant="dense">
          <img className={classes.logo} src={images.logo} alt="logo" />
        </Toolbar>
      </AppBar>
      <iframe
        src="http://www.aap.nl"
        className={classes.iframe}
        name="task-iframe"
        title={t('task')}
      />
      <AppBar classes={{ positionFixed: classes.appbarBottom }} position="fixed">
        <Toolbar classes={{ dense: classes.toolbarBottom }} variant="dense" >
          <Button variant="contained" color="primary">
            {t('next_task')}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
ActiveTask.defaultProps = {};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
import * as PropTypes from 'prop-types';
import styles from './NotificationsProvider.styles';

const useStyles = makeStyles(styles);

export default function NotificationsProvider ({
  children,
  open,
  message,
  handleClose,
  type,
}) {
  const { t }   = useTranslation();
  const classes = useStyles();

  // onClose={handleClose} 
  // severity={type}

  return (
    <React.Fragment>
      {children}
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        {/* <Alert severity="success"> */}
        {message}
        {/* </Alert> */}
      </Snackbar>
    </React.Fragment>
  );
}

NotificationsProvider.propTypes = {
  open       : PropTypes.bool,
  message    : PropTypes.string,
  handleClose: PropTypes.func,
  type       : PropTypes.string,
};

NotificationsProvider.defaultProps = {
  open: true,
  type: 'success',
};

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as PropTypes from 'prop-types';
import styles from './AppbarBottom.styles';

const useStyles = makeStyles(styles);

export default function AppbarBottom ({ children, position }) {
  const classes = useStyles();

  return (
    <AppBar classes={{ positionFixed: classes.appbarBottom }} position={position}>
      <Toolbar classes={{ dense: classes.toolbarBottom }} variant="dense" >
        {children}
      </Toolbar>
    </AppBar>
  );
}

AppbarBottom.propTypes = {
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
};

AppbarBottom.defaultProps = {
  position: 'fixed',
};

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as PropTypes from 'prop-types';
import images from '../../theme/images';
import styles from './AppbarTop.styles';

const useStyles = makeStyles(styles);

export default function AppbarTop ({ children, position }) {
  const classes = useStyles();

  return (
    <AppBar position={position}>
      <Toolbar classes={{ dense: classes.toolbarTop }} variant="dense">
        <img className={classes.logo} src={images.logo} alt="logo" />
        {children}
      </Toolbar>
    </AppBar>
  );
}

AppbarTop.propTypes = {
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
};

AppbarTop.defaultProps = {
  position: 'relative',
};

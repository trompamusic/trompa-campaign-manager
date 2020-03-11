import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import images from '../../theme/images';
import styles from './AppbarTop.styles';

const useStyles = makeStyles(styles);

export default function AppbarTop ({ children, position, mobile }) {
  const { t }   = useTranslation('common');
  const classes = useStyles();

  return (
    <AppBar position={position}>
      {!mobile && (
        <Toolbar classes={{ dense: classes.dense }} variant="dense">
          <Link to="/">
            <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
          </Link>
          {children}
        </Toolbar>
      )}
      {mobile && (
        <Toolbar classes={{ dense: classNames(classes.dense, classes.mobile) }} variant="dense">
          <div className={classes.hamburger}>
            {children}
          </div>
          <Link to="/">
            <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
          </Link>
        </Toolbar>
      )}
    </AppBar>
  );
}

AppbarTop.propTypes = {
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  mobile  : PropTypes.bool,
};

AppbarTop.defaultProps = {
  position: 'relative',
  mobile  : 'false',
};

import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import images from '../../theme/images';
import styles from './AppbarTop.styles';

const useStyles = makeStyles(styles);

export default function AppbarTop ({ children, position }) {
  const { t }   = useTranslation('common');
  const classes = useStyles();

  return (
    <AppBar position={position}>
      <Toolbar classes={{ dense: classes.dense }} variant="dense">
        <Link to="/">
          <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
        </Link>
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

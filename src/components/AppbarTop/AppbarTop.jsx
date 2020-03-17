import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
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

  const renderLogo = () => (
    <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/">
      <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
    </a>
  );

  return (
    <AppBar position={position}>
      <Toolbar classes={{ dense: classNames(classes.dense, { [classes.mobile]: mobile }) }} variant="dense">
        {!mobile && (
          <React.Fragment>
            {renderLogo()}
            {children}
          </React.Fragment>
        )}
        {mobile && (
          <React.Fragment>
            <div className={classes.hamburger}>
              {children}
            </div>
            {renderLogo()}
          </React.Fragment>

        )}
      </Toolbar>
    </AppBar>
  );
}

AppbarTop.propTypes = {
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  mobile  : PropTypes.bool,
};

AppbarTop.defaultProps = {
  position: 'relative',
  mobile  : false,
};

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import images from '../../theme/images';
import styles from './AppbarTop.styles';

const useStyles = makeStyles(styles);

export default function AppbarTop ({ 
  children, 
  position, 
  hasContextNavigation,
  type,
  campaign, 
}) {
  const { t }   = useTranslation();
  const classes = useStyles();

  return (
    <AppBar position={position}>
      <Toolbar classes={{ dense: classes.toolbarTop }} variant="dense">
        <Link className={classes.link} to="/">
          {hasContextNavigation ? (
            <div className={classes.header}>
              <ArrowBackIcon className={classes.backIcon} />
              <div>
                <Typography className={classes.pageType} variant="h6" color="secondary">
                  {type ? type : t('common:unknown_type')}
                </Typography>
                <Typography className={classes.title} variant="h5">
                  {campaign ? campaign : t('common:unknown_campaign')}
                </Typography>
              </div>
            </div>
          ) : (
            <img className={classes.logo} src={images.logo} alt="logo" />
          )}
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

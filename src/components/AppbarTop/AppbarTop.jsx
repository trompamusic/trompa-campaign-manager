import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import images from '../../theme/images';
import styles from './AppbarTop.styles';

const useStyles = makeStyles(styles);

export default function AppbarTop ({
  children,
  position,
  hasContextNavigation,
  type,
  campaign,
  campaignIdentifier,
  mobile,
  onGoBackClick,
}) {
  const { t }   = useTranslation();
  const classes = useStyles();

  const renderLogo = () => (
    <a rel="noopener noreferrer" href="/">
      <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
    </a>
  );

  return (
    <AppBar position={position}>
      <Toolbar classes={{ dense: classNames(classes.dense, { [classes.mobile]: mobile }) }} variant="dense">
        {!mobile && (
          <React.Fragment>
            {hasContextNavigation ? (
              <div className={classes.header}>
                <ArrowBackIcon onClick={onGoBackClick} className={classes.backIcon} />
                <div>
                  <Link className={classes.link} to={`/campaign/${campaignIdentifier}`}>
                    <Typography className={classes.pageType} variant="h6" color="secondary">
                      {type ? type : t('common:unknown_type')}
                    </Typography>
                    <Typography className={classes.title} variant="h5">
                      {campaign ? campaign : t('common:unknown_campaign')}
                    </Typography>
                  </Link>
                </div>
              </div>
            ) : renderLogo()}
            {children}
          </React.Fragment>
        )}
        {mobile && (
          hasContextNavigation ? (
            <Link className={classes.link} to={`/campaign/${campaignIdentifier}`}>
              <div className={classes.header}>
                <ArrowBackIcon onClick={() => onGoBackClick} className={classes.backIcon} />
                <div>
                  <Typography className={classes.pageType} variant="h6" color="secondary">
                    {type ? type : t('common:unknown_type')}
                  </Typography>
                  <Typography className={classes.title} variant="h5">
                    {campaign ? campaign : t('common:unknown_campaign')}
                  </Typography>
                </div>
              </div>
            </Link>
          ) : (
            <React.Fragment>
              <div className={classes.hamburger}>
                {children}
              </div>
              {renderLogo()}
            </React.Fragment>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}

AppbarTop.propTypes = {
  position            : PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  hasContextNavigation: PropTypes.bool,
  type                : PropTypes.string,
  campaign            : PropTypes.string,
  campaignIdentifier  : PropTypes.string,
  mobile              : PropTypes.bool,
  onGoBackClick       : PropTypes.func,
};

AppbarTop.defaultProps = {
  position: 'relative',
  mobile  : false,
};

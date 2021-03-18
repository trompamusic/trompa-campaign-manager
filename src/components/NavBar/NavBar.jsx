import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppbarTop from '../AppbarTop/AppbarTop';
import images from '../../theme/images';
import styles from './NavBar.styles';

const useStyles = makeStyles(styles);

export default function NavBar ({
  navLinks,
  buttons,
  primaryButton,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile                    = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const classes = useStyles();

  const renderLinks = () => {
    return navLinks?.map(({ name, to }) => (
      <NavLink
        key={name}
        className={classes.navLink}
        activeClassName={classes.navLinkActive}
        to={to}
      >
        {name}
      </NavLink>
    ));
  };

  const renderButtons = () => {
    return buttons?.map(({ name, onClick, startIcon }) => (
      <Button
        key={name}
        classes={{ root: classes.removeHover, text: classes.navLink }}
        component="button"
        onClick={onClick}
        variant="text"
        startIcon={startIcon}
        disableFocusRipple
        disableRipple
      >
        {name}
      </Button>
    ));
  };

  const renderPrimaryButton = () => {
    return primaryButton
       && (
         <Button
           key={primaryButton?.name}
           component={primaryButton?.to ? Link : 'button'}
           to={primaryButton?.to ? primaryButton?.to : undefined }
           onClick={primaryButton?.onClick ? primaryButton?.onClick : undefined }
           variant="contained"
           color="primary"
         >
           {primaryButton?.name}
         </Button>
       );
  };

  return (
    <React.Fragment>
      <div className={classes.mobile}>
        <AppbarTop position="fixed" mobile>
          <IconButton onClick={() => setDrawerOpen(true)} aria-label="menu" component="span">
            <MenuIcon />
          </IconButton>
        </AppbarTop>
        <SwipeableDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <div className={classes.drawerTop}>
            <img className={classes.drawerLogo} src={images.logoAsSvg} alt="" />
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="" color="primary" component="span">
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.drawerBody}>
            {renderLinks()}
          </div>
          <div className={classes.drawerBottom}>
            {renderButtons()}
            {renderPrimaryButton()}
          </div>
        </SwipeableDrawer>
      </div>
      {!isMobile && (
        <div className={classes.desktop}>
          <AppbarTop position="fixed">
            <div>
              {renderLinks()}
              {renderButtons()}
              {renderPrimaryButton()}
            </div>
          </AppbarTop>
        </div>                )}
    </React.Fragment>
  );
}

NavBar.propTypes = {
  navLinks     : PropTypes.array,
  primaryButton: PropTypes.object,
  drawerContent: PropTypes.element,
};

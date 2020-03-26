import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
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
  primaryButton,
  primaryIconButton,
  drawerContent,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();

  const renderLinks = () => {
    return navLinks?.length > 0
      ? navLinks.map(({ name, to, onClick, startIcon }) => {
        if(to) {
          return (
            <NavLink
              key={name}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              to={to}
            >
              {name}
            </NavLink>
          );
        } else {
          return (
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
          );
        }
      })
      : null;
  };

  const renderPrimaryButton = () => {
    return primaryButton
      ? (
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
      )
      : null;
  };

  const renderPrimaryIconButton = () => {
    return primaryIconButton
      ? (
        <Button
          key={primaryIconButton?.name}
          component={primaryIconButton?.to ? Link : 'button'}
          to={primaryIconButton?.to ? primaryIconButton?.to : undefined }
          onClick={primaryIconButton?.onClick ? primaryIconButton?.onClick : undefined }
          variant="contained"
          color="primary"
          startIcon={primaryIconButton?.icon}
        >
          {primaryIconButton?.name}
        </Button>
      )
      : null;
  };

  return (
    <React.Fragment>
      <div className={classes.mobile}>
        <AppbarTop mobile>
          <IconButton onClick={() => setDrawerOpen(true)} aria-label="" component="span">
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
          {drawerContent}
        </SwipeableDrawer>
      </div>
      <div className={classes.desktop}>
        <AppbarTop>
          <div>
            {renderLinks()}
            {renderPrimaryButton()}
            {renderPrimaryIconButton()}
          </div>
        </AppbarTop>
      </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  navLinks         : PropTypes.array,
  primaryButton    : PropTypes.object,
  primaryIconButton: PropTypes.object,
  drawerContent    : PropTypes.element,
};

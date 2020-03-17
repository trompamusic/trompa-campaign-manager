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

export default function NavBar ({ navLinks, iconLink, primaryButton, primaryIconButton, drawerContent }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();

  const renderLinks = () => {
    return navLinks?.length > 0
      ? navLinks.map(({ name, to }) => (
        <NavLink key={name} className={classes.navLink} activeClassName={classes.navLinkActive} to={to}>
          {name}
        </NavLink>
      ))
      : null;
  };

  const renderIconLink = () => {
    return iconLink
      ? (
        <Button
          key={iconLink?.name}
          component={Link}
          to={iconLink?.to}
          variant="text"
          startIcon={iconLink?.icon}
        >
          {iconLink?.name}
        </Button>
      )
      : null;
  };

  const renderPrimaryButton = () => {
    return primaryButton
      ? (
        <Button
          key={primaryButton?.name}
          component={Link}
          to={primaryButton?.to}
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
          component={Link}
          to={primaryIconButton?.to}
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
            <img className={classes.drawerLogo} src={images.logo} alt="" />
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
            {renderIconLink()}
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
  iconLink         : PropTypes.object,
  primaryButton    : PropTypes.object,
  primaryIconButton: PropTypes.object,
  drawerContent    : PropTypes.element,
};

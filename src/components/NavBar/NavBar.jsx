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

export default function NavBar ({ navLinks, buttons, renderDrawerContent }) {
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

  const renderButtons = () => {
    return buttons?.length > 0
      ? buttons.map(({ name, to }) => (
        <Button
          key={name}
          component={Link}
          to={to}
          variant="contained"
          color="primary"
        >
          {name}
        </Button>
      ))
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
          {renderDrawerContent()}
        </SwipeableDrawer>
      </div>
      <div className={classes.desktop}>
        <AppbarTop>
          <div>
            {renderLinks()}
            {renderButtons()}
          </div>
        </AppbarTop>
      </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  navLinks           : PropTypes.array,
  buttons            : PropTypes.array,
  renderDrawerContent: PropTypes.func,
};

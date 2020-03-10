import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AppbarTop from '../AppbarTop/AppbarTop';
import styles from './NavBar.styles';

const useStyles = makeStyles(styles);

export default function NavBar ({ navLinks, buttons }) {
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
          color="secondary"
        >
          {name}
        </Button>
      ))
      : null;
  };

  return (
    <AppbarTop>
      <div>
        {renderLinks()}
        {renderButtons()}
      </div>
    </AppbarTop>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
  buttons : PropTypes.array,
};

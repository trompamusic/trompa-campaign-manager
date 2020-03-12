import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Helmet } from 'react-helmet';
import styles from './WhoAreYou.styles';

const useStyles = makeStyles(styles);

export default function WhoAreYou () {
  const pathname = useSelector(state => state.router.location.pathname, shallowEqual);
  const classes  = useStyles();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Helmet>
        <title>WhoAreYou screen</title>
        <meta name="description" content="WhoAreYou screen description" />
        <meta property="og:title" content="WhoAreYou" />
      </Helmet>
      <header>
        <Typography type="title">Welcome to the "WhoAreYou" screen skeleton</Typography>
      </header>
      <Typography paragraph>
        To get started, edit <code>src/screens/WhoAreYou/WhoAreYou.skeleton.jsx</code> and save to reload.
      </Typography>
      <Typography paragraph>
        Your current location is {pathname}
      </Typography>
    </React.Fragment>
  );
}

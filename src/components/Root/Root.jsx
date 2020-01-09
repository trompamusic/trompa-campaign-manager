import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Home from '../../screens/Home';
import NotFound from '../../screens/NotFound';
import ControlActionList from '../../containers/ControlActionList/ControlActionList'; // temporarily test first query
import styles from './Root.styles';

const useStyles = makeStyles(styles);

export default function Root(props) {
  const classes = useStyles();

  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div className={classes.container}>
      {content}
      <ControlActionList />
    </div>
  );
};

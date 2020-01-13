import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import NotFound from '../../screens/NotFound';
import ControlAction from '../../containers/ControlAction/ControlAction'; // testing control action query
import styles from './Root.styles';

const useStyles = makeStyles(styles);

export default function Root(props) {
  const classes = useStyles();

  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/task" component={Task} exact />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div className={classes.container}>
      {content}
      <ControlAction />
    </div>
  );
};

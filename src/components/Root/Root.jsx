import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import Campaign from '../../screens/Campaign';
import NotFound from '../../screens/NotFound';
import styles from './Root.styles';

const useStyles = makeStyles(styles);

export default function Root(props) {
  const classes = useStyles();

  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/campaign/:campaignIdentifier" component={Campaign} exact />
      <Route path="/campaign/:campaignIdentifier/task/" component={Task} exact />
      <Route path="/campaign/:campaignIdentifier/task/:taskIdentifier" component={Task} exact />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div className={classes.container}>
      {content}
    </div>
  );
};

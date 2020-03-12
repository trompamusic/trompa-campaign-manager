import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import Campaign from '../../screens/Campaign';
import NotFound from '../../screens/NotFound';
import WhoAreYou from '../../screens/WhoAreYou';

export default function Root(props) {
  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/campaign/:campaignIdentifier" component={Campaign} exact />
      <Route path="/campaign/:campaignIdentifier/whoAreYou" component={WhoAreYou} exact />
      <Route path="/campaign/:campaignIdentifier/task/" component={Task} exact />
      <Route path="/campaign/:campaignIdentifier/task/:taskIdentifier" component={Task} exact />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div>
      {content}
    </div>
  );
};

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import ActiveCampaign from '../../screens/ActiveCampaign';
import NotFound from '../../screens/NotFound';

export default function Root(props) {
  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/campaign/:campaignIdentifier" component={ActiveCampaign} exact />
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

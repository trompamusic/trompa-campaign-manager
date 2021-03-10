import React,{ useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import ActiveCampaign from '../../screens/ActiveCampaign';
import NotFound from '../../screens/NotFound';
import WhoAreYou from '../../screens/WhoAreYou';
import CreateCampaign from '../../screens/CreateCampaign';

export default function Root(props) {
  const { pathname } = useLocation();
  const history      = useHistory();

  useEffect(() => {
    const isPush       = history.action === 'PUSH';

    if (isPush) {
      window.scrollTo(0, 0);
    }
  }, [history.action, pathname]);

  const content = props.error ? (
    <div>Something went terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/campaign/:campaignIdentifier" component={ActiveCampaign} exact />
      <Route path="/campaign/:campaignIdentifier/who-are-you" component={WhoAreYou} exact />
      <Route path="/campaign/:campaignIdentifier/task/" component={Task} exact />
      <Route path="/campaign/:campaignIdentifier/task/:taskIdentifier" component={Task} exact />
      <Route path="/createcampaign/:step?/:status?" component={CreateCampaign} />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <div>
      {content}
    </div>
  );
};

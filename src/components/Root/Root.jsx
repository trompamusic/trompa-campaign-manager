import React from 'react';
import { Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Home from '../../screens/Home';
import Task from '../../screens/Task';
import ActiveCampaign from '../../screens/ActiveCampaign';
import NotFound from '../../screens/NotFound';
import WhoAreYou from '../../screens/WhoAreYou';
import NoSupportMobile from '../../screens/NoSupportMobile';

export default function Root(props) {
  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  if(isMobile) {
    return <NoSupportMobile />;
  }

  const content = props.error ? (
    <div>Something wen't terribly wrong!</div>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/campaign/:campaignIdentifier" component={ActiveCampaign} exact />
      <Route path="/campaign/:campaignIdentifier/who-are-you" component={WhoAreYou} exact />
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

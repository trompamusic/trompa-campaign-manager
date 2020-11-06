import React from 'react';
import { storiesOf } from '@storybook/react';
import ActiveCampaignOverviewItem from './ActiveCampaignOverviewItem';

storiesOf('ActiveCampaignOverviewItem', module)
  .add('basic', () => <ActiveCampaignOverviewItem />);

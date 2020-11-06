import React from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import CreateCampaignSetupComponent from '../../components/CreateCampaignSetup';

export default function CreateCampaignSetup({
  campaignTitle = '',
  campaignDescription = '',
  campaignDeadline = moment().hours(17).minute(0).add(2, 'months'),
  onBackButtonClick,
  onCampaignMetaSubmit,
}) {
  const onFormSubmit = CampaignMetaValues => {
    onCampaignMetaSubmit(CampaignMetaValues);
  };

  return <CreateCampaignSetupComponent onSubmit={onFormSubmit} initialFormValues={{ campaignTitle, campaignDescription, campaignDeadline }} onBackButtonClick={onBackButtonClick} />;
}

CreateCampaignSetup.propTypes = {
  campaignTitle       : PropTypes.string,
  campaignDescription : PropTypes.string,
  campaignDeadline    : PropTypes.string,
  onBackButtonClick   : PropTypes.func,
  onCampaignMetaSubmit: PropTypes.func,
};

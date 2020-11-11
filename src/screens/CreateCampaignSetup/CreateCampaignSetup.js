import React from 'react';
import * as PropTypes from 'prop-types';
import CreateCampaignSetupComponent from '../../components/CreateCampaignSetup';

export default function CreateCampaignSetup({
  campaignTitle = '',
  campaignDescription = '',
  campaignDeadline,
  onBackButtonClick,
  onCampaignMetaSubmit,
}) {
  const onFormSubmit = CampaignMetaValues => onCampaignMetaSubmit(CampaignMetaValues);

  return <CreateCampaignSetupComponent onSubmit={onFormSubmit} initialFormValues={{ campaignTitle, campaignDescription, campaignDeadline }} onBackButtonClick={onBackButtonClick} />;
}

CreateCampaignSetup.propTypes = {
  campaignTitle       : PropTypes.string,
  campaignDescription : PropTypes.string,
  campaignDeadline    : PropTypes.object,
  onBackButtonClick   : PropTypes.func,
  onCampaignMetaSubmit: PropTypes.func,
};

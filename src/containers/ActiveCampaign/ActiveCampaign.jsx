import React from 'react';
import PropTypes from 'prop-types';
import ActiveCampaignComponent from '../../components/ActiveCampaign';

export default function ActiveCampaign ({ campaignIdentifier }) {
  return <ActiveCampaignComponent campaignIdentifier={campaignIdentifier} />;
}

ActiveCampaign.propTypes = {
  campaignIdentifier: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import CampaignComponent from '../../components/Campaign';

export default function Campaign ({ campaignIdentifier }) {
  return <CampaignComponent />;
}

Campaign.propTypes = {
  campaignIdentifier: PropTypes.string,
};

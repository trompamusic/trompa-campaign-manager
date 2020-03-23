import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ActiveCampaignComponent from '../../components/ActiveCampaign';
import NotFound from '../../screens/NotFound';

export default function ActiveCampaign({ campaignIdentifier }) {
  const { loading, error, data } = useQuery(GET_CAMPAIGN, { variables: { identifier: campaignIdentifier } });
  const campaign                 = data?.ControlAction[0];

  if (loading) {
    return null;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!loading && !campaign) {
    return <NotFound />;
  }

  const digitalDocument = campaign.object.find(obj => obj.name === 'Work')?.nodeValue;

  return (
    <ActiveCampaignComponent
      campaignIdentifier={campaignIdentifier}
      author="TROMPA"
      title={campaign.name}
      description={campaign.description}
      scoreTitle={digitalDocument?.title}
      scoreSource={digitalDocument?.source}
    />
  );
}

ActiveCampaign.propTypes = {
  campaignIdentifier: PropTypes.string,
};

export const GET_CAMPAIGN = gql`
    query Campaign($identifier: ID!) {
        ControlAction (identifier: $identifier) {
            identifier
            name
            description
            object {
                ... on PropertyValue {
                    name
                    value
                    nodeValue {
                        ... on DigitalDocument {
                            identifier
                            title
                            source
                        }
                    }
                }
            }
        }
    }
`;

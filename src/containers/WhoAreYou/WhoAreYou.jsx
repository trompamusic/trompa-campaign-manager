import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import WhoAreYouComponent from '../../components/WhoAreYou/WhoAreYou';
import AppbarTop from '../../components/AppbarTop';
import NotFound from '../../screens/NotFound';
import { GET_CAMPAIGN } from '../../screens/ActiveCampaign';

export default function WhoAreYou({ campaignIdentifier }) {
  const history                  = useHistory();
  const [nickname, setNickname]  = useState(localStorage.getItem('nickname') || '');
  const { t }                    = useTranslation('whoAreYou');
  const { loading, error, data } = useQuery(GET_CAMPAIGN, { variables: { identifier: campaignIdentifier } });
  const campaign                 = data?.ControlAction[0];

  // If already logged in
  if (nickname) {
    history.replace(`/campaign/${campaignIdentifier}/task`);

    return null;
  }

  if (loading) {
    return null;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!loading && !campaign) {
    return <NotFound />;
  }

  const onFormSubmit = ({ ...formValues }) => {
    const givenNickname = formValues.nickname || t('anonymous');

    // save user to local storage
    localStorage.setItem('nickname', givenNickname);

    setNickname(givenNickname);
  };

  return (
    <React.Fragment>
      <AppbarTop
        type={t('First things first')}
        campaignIdentifier={campaignIdentifier}
        campaign={campaign.name}
        hasContextNavigation
      />
      <WhoAreYouComponent
        campaignIdentifier={campaignIdentifier}
        onSubmit={onFormSubmit}
        initialFormValues={{ nickname }}
      />
    </React.Fragment>
  );
}

WhoAreYou.propTypes = {
  campaignIdentifier: PropTypes.string,
};

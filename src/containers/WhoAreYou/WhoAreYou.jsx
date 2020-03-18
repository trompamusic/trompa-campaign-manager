import React, { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import WhoAreYouComponent from '../../components/WhoAreYou/WhoAreYou';

export default function WhoAreYou ({ campaignIdentifier }) {
  const history = useHistory();
  let nickname  = localStorage.getItem('nickname');
  const { t }   = useTranslation('whoAreYou');

  // If already logged in
  useEffect(() => {
    if(nickname) {
      history.replace(`/campaign/${campaignIdentifier}/task`);
    }
  });

  const onFormSubmit = ({ ...formValues }) => {
    let nickname    = formValues.nickname;

    // create anonymous user if no nickname is given
    if (nickname === '') {
      nickname = t('anonymous');
    }

    // save user to local storage
    localStorage.setItem('nickname', nickname);
    
    // route to task
    history.push(`/campaign/${campaignIdentifier}/task`);
  };

  return (
    <WhoAreYouComponent 
      campaignIdentifier={campaignIdentifier}
      onSubmit={onFormSubmit} 
      initialFormValues={{
        nickname: '',
      }}
    />
  );
}

WhoAreYou.propTypes = {
  campaignIdentifier: PropTypes.string,
};

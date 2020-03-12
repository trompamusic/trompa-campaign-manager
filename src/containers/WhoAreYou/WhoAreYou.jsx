import React, { useRef } from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import WhoAreYouComponent from '../../components/WhoAreYou/WhoAreYou';

export default function WhoAreYou ({ campaignIdentifier }) {
  const formRef = useRef();
  const history = useHistory();

  const onFormSubmit = ({ ...formValues }, form) => {
    formRef.current = form;

    console.log('submit ran');

    console.log('submitted', formValues);
    
    // route to task
    history.push(`/campaign/${campaignIdentifier}/task`);
  };

  return (
    <WhoAreYouComponent 
      campaignIdentifier={campaignIdentifier}
      onSubmit={onFormSubmit} 
      initialFormValues={{
        nickname: 'test',
      }}
    />
  );
}

WhoAreYou.propTypes = {
  campaignIdentifier: PropTypes.string,
};

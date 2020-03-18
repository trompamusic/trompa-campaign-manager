import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import NicknameMenu from '../../components/NicknameMenu';

export default function NicknameMenuContainer ({ campaignIdentifier }) {
  const history                                   = useHistory();
  const nickname                                  = localStorage.getItem('nickname');
  const [nicknameMenuState, setNicknameMenuState] = useState({ open: false, target: null });

  const handleOpen = event => {
    setNicknameMenuState({ open: true, target: event.currentTarget });
  };

  const handleClose = () => {
    setNicknameMenuState({ open: false, target: null });
  };

  const onLogoutClick = () => {
    handleClose();
    localStorage.removeItem('nickname');
    history.push(`/campaign/${campaignIdentifier}/who-are-you`);
  };

  return (
    <NicknameMenu 
      isOpen={nicknameMenuState.open}
      target={nicknameMenuState.target}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onLogoutClick={onLogoutClick}
      nickname={nickname} 
    />
  );
}

NicknameMenuContainer.propTypes = {
  campaignIdentifier: PropTypes.string,
};

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import NicknameMenu from '../../components/NicknameMenu';

export default function NicknameMenuContainer ({ campaignIdentifier }) {
  const history                                     = useHistory();
  const nickname                                    = localStorage.getItem('nickname');
  const [nicknameMenuOpen, setNicknameMenuOpen]     = useState(false);
  const [nicknameMenuTarget, setNicknameMenuTarget] = useState(null);

  const handleOpen = event => {
    setNicknameMenuTarget(event.currentTarget);
    setNicknameMenuOpen(true);
  };

  const handleClose = () => {
    setNicknameMenuOpen(false);
    setNicknameMenuTarget(null);
  };

  const onLogoutClick = () => {
    handleClose();
    localStorage.removeItem('nickname');
    history.push(`/campaign/${campaignIdentifier}/who-are-you`);
  };

  return (
    <NicknameMenu 
      isOpen={nicknameMenuOpen}
      target={nicknameMenuTarget}
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

NicknameMenuContainer.defaultProps = {};

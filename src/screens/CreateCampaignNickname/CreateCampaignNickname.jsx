import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CreateCampaignNicknameComponent from '../../components/CreateCampaignNickname';

export default function CreateCampaignNickname({ nickname = '', onBackButtonClick, onNicknameSubmit }) {
  const { t } = useTranslation('whoAreYou');

  const onFormSubmit = ({ nickname }) => {
    const givenNickname = nickname || t('anonymous');

    onNicknameSubmit(givenNickname);
  };

  return <CreateCampaignNicknameComponent onSubmit={onFormSubmit} initialFormValues={{ nickname }} onBackButtonClick={onBackButtonClick} />;
}

CreateCampaignNickname.propTypes = {
  nickname         : PropTypes.string,
  onBackButtonClick: PropTypes.func,
  onNicknameSubmit : PropTypes.func,
};

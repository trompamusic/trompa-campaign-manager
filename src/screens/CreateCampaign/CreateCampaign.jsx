import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import NicknameMenuContainer from '../../containers/NicknameMenuContainer/NicknameMenuContainer';
import CreateCampaignNickname from '../CreateCampaignNickname/CreateCampaignNickname';
import CreateCampaignSetup from '../CreateCampaignSetup/CreateCampaignSetup';
import SelectComposition from '../SelectComposition/SelectComposition';
import AppbarTop from "../../components/AppbarTop/AppbarTop";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import { createCampaign } from '../../services/api.service';
import styles from './CreateCampaign.styles';

const useStyles = makeStyles(styles);

export default function CreateCampaign() {
  const { t }        = useTranslation('startCampaign');
  const classes      = useStyles();
  const history      = useHistory();
  const { pathname } = useLocation();

  const [nickname, setNickname]                    = useState(localStorage.getItem('nickname') || '');
  const [campaignMetaData, updateCampaignMetadata] = useState({
    title             : '',
    description       : '',
    name              : '',
    deadline          : '',
    url               : '',
    digitalDocumentRef: '',
  });

  useEffect(() => {
    if (!nickname) {
      history.replace('/createcampaign/nickname');
    } else {
      history.replace('/createcampaign/compositionScore');
    }
  },[history, nickname]);

  const getCurrentStep = () => {
    return pathname === '/createcampaign/compositionScore' ? 0 : 1;
  };

  const Steps = [t('composition_score'),t('campaign')];

  const onBackButtonClick = () => history.goBack();

  const onNicknameSubmit = givenNickname => {
    // save user to local storage
    localStorage.setItem('nickname', givenNickname);

    setNickname(givenNickname);
    history.push('/createcampaign/compositionScore');
  };

  const onCompositionSubmit = value => {
    console.log(value);
    updateCampaignMetadata({
      ...campaignMetaData,
      digitalDocumentId: value.score.identifier,
      name             : value.score.name,
    });
    history.push('/createcampaign/campaign');
  };

  const onCampaignSubmit = async ({ campaignTitle, campaignDeadline, campaignDescription }) => {
    updateCampaignMetadata(() => ({
      ...campaignMetaData,
      title      : campaignTitle,
      description: campaignDescription,
      deadline   : campaignDeadline,
    }));

    const {     
      name,
      digitalDocumentId,
    } = campaignMetaData;

    try {
      const response = await createCampaign({ name, title: campaignTitle, description: campaignDescription, digitalDocumentId });

      if (response.ok) {
        console.log(response);
      }
    }
    catch(error) {
      console.log(error);
    } 
    
    history.push('/createcampaign/campaign');
  };
  
  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <AppbarTop
        type={'test'}
        onGoBackClick={onBackButtonClick}
        hasContextNavigation
      >
        <NicknameMenuContainer  />
      </AppbarTop>
      {(pathname !== '/createcampaign/nickname' ) && <ProgressStepper activeStep={getCurrentStep()} steps={Steps} />}
      <Box className={classes.main}>
        <Switch>
          <Route path="/createcampaign/nickname"exact >
            <CreateCampaignNickname nickname={nickname} onBackButtonClick={onBackButtonClick} onNicknameSubmit={onNicknameSubmit} />
          </Route>
          <Route path="/createcampaign/compositionScore"  exact >
            <SelectComposition onBackButtonClick={onBackButtonClick}   onCompositionSubmit={onCompositionSubmit} />
          </Route> 
          <Route path="/createcampaign/campaign" exact >
            <CreateCampaignSetup 
              campaignTitle={campaignMetaData.title} 
              campaignDescription={campaignMetaData.description} 
              campaignDeadline={campaignMetaData.deadline} 
              onCampaignMetaSubmit={onCampaignSubmit}
            />
          </Route>
        </Switch>
      </Box>
    </div>
  );
}


import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import NicknameMenuContainer from '../../containers/NicknameMenuContainer/NicknameMenuContainer';
import AppbarTop from "../../components/AppbarTop/AppbarTop";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import CreateDigitalDoc from "../../containers/CreateDigitalDoc/CreateDigitalDoc";
import styles from './CreateCampaign.styles';

const useStyles = makeStyles(styles);

// this screen is work in progress

/* eslint-disable */

export default function CreateCampaign() {
  const { t }        = useTranslation('startCampaign');
  const classes      = useStyles();
  const history      = useHistory();
  const { pathname } = useLocation();

  const [nickname, setNickname]                    = useState(localStorage.getItem('nickname') || '');
  const [campaignMetaData, updateCampaignMetadata] = useState({
    title             : '',
    description       : '',
    deadline          : '',
    url               : '',
    digitalDocumentRef: '',
  });

  // useEffect(() => {
  //   if (!nickname) {
  //     history.replace('/createcampaign/nickname');
  //   } else {
  //     history.replace('/createcampaign/compositionScore');
  //   }
  // },[history, nickname]);

  const getCurrentStep = () => {
    return pathname === '/createcampaign/compositionScore' ? 0 : 1;
  }

  const Steps = [t('composition_score'),t('campaign')];

  const onBackButtonClick = () => history.goBack();

  const onNicknameSubmit = givenNickname => {
    // save user to local storage
    localStorage.setItem('nickname', givenNickname);

    setNickname(givenNickname);
    history.push('/createcampaign/compositionScore');
  };

  const onScoreSubmit = () => {
    history.push('/createcampaign/campaign');
  };

  const onCampaignSubmit =({ title, description, deadline }) => {
    updateCampaignMetadata({
      ...campaignMetaData,
      title,
      description,
      deadline,
    });
  };

  if(true) {
    return (
<CreateDigitalDoc />
    )
  }
  
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
        {(pathname !== '/createcampaign/nickname' ) && <ProgressStepper activeStep={getCurrentStep()} steps={Steps}/>}
      <Box className={classes.main}>
        <Switch>
          <Route path="/createcampaign/nickname"exact >
            <div>test</div>
            {/* <Nickname nickname={nickname} onBackButtonClick={onBackButtonClick} onNicknameSubmit={onNicknameSubmit} /> */}
          </Route>
          <Route path="/createcampaign/compositionScore"  exact >
            <div>test1</div>
            {/* <CompositionScore  digitalDocumentRef={campaignMetaData.digitalDocumentRef} onScoreSubmit={onScoreSubmit} /> */}
          </Route> 
          <Route path="/createcampaign/campaign" exact >
            <div>test2</div>
            {/* <Campaign 
              title={campaignMetaData.title} 
              description={campaignMetaData.description} 
              deadline={campaignMetaData.deadline} 
              onCampaignSubmit={onCampaignSubmit}
            /> */}
          </Route>
        </Switch>
      </Box>
    </div>
  );
}


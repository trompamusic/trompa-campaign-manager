import { Box, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import NicknameMenuContainer from '../../containers/NicknameMenuContainer/NicknameMenuContainer';
import CreateCampaignNickname from '../CreateCampaignNickname/CreateCampaignNickname';
import CreateCampaignSetup from '../CreateCampaignSetup/CreateCampaignSetup';
import SelectComposition from '../SelectComposition/SelectComposition';
import AppbarTop from '../../components/AppbarTop/AppbarTop';
import ProgressStepper from '../../components/ProgressStepper/ProgressStepper';
import { createCampaign } from '../../services/api.service';
import styles from './CreateCampaign.styles';

const useStyles = makeStyles(styles);

export default function CreateCampaign() {
  const { t }        = useTranslation('startCampaign');
  const classes      = useStyles();
  const history      = useHistory();
  const { pathname } = useLocation();

  const [nickname, setNickname]                    = useState(localStorage.getItem('nickname') || '');
  const [composition, setComposition]              = useState();
  const [score, setScore]                          = useState();
  const [campaignMetaData, updateCampaignMetadata] = useState({
    title      : '',
    description: '',
    deadline   : moment().hours(17).minute(0).add(2, 'months'),
    url        : '',
  });

  useEffect(() => {
    if (!nickname) {
      history.replace('/createcampaign/nickname');
    } else {
      history.replace('/createcampaign/compositionscore');
    }
  }, [history, nickname]);

  const getCurrentStep = () => {
    return pathname === '/createcampaign/compositionscore' ? 0 : 1;
  };

  const Steps = [t('composition_score'), t('campaign')];

  const onBackButtonClick = () => history.replace('/');

  const onNicknameSubmit = givenNickname => {
    // save user to local storage
    localStorage.setItem('nickname', givenNickname);

    setNickname(givenNickname);
    history.push('/createcampaign/compositionscore');
  };

  const onCompositionSubmit = () => history.push('/createcampaign/campaign');

  const onCampaignSubmit = async ({ campaignTitle, campaignDeadline, campaignDescription }) => {
    updateCampaignMetadata(metadata => ({
      ...metadata,
      title      : campaignTitle,
      description: campaignDescription,
      deadline   : campaignDeadline,
    }));

    const digitalDocumentId = score.identifier;

    try {
      const { ok, data: { data } } = await createCampaign({
        name       : campaignTitle,
        title      : campaignTitle,
        description: campaignDescription,
        digitalDocumentId,
      });

      if (ok && data?.identifier) {
        history.push(`/campaign/${data.identifier}?created`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('meta_description')} />
      </Helmet>
      <AppbarTop
        type={' '}
        campaign="Create Campaign"
        onGoBackClick={onBackButtonClick}
        hasContextNavigation
      >
        <NicknameMenuContainer logoutPath={'/createcampaign/nickname'} />
      </AppbarTop>
      {(pathname !== '/createcampaign/nickname') && <ProgressStepper activeStep={getCurrentStep()} steps={Steps} />}
      <Box className={classes.main}>
        <Switch>
          <Route path="/createcampaign/nickname" exact>
            <CreateCampaignNickname
              nickname={nickname}
              onBackButtonClick={onBackButtonClick}
              onNicknameSubmit={onNicknameSubmit}
            />
          </Route>
          <Route path="/createcampaign/compositionscore" exact>
            <SelectComposition
              score={score}
              composition={composition}
              onSetScore={score => setScore(score)}
              onSetComposition={composition => setComposition(composition)}
              onBackButtonClick={onBackButtonClick}
              onCompositionSubmit={onCompositionSubmit}
            />
          </Route>
          <Route path="/createcampaign/campaign" exact>
            <CreateCampaignSetup
              campaignTitle={campaignMetaData.title}
              campaignDescription={campaignMetaData.description}
              campaignDeadline={campaignMetaData.deadline}
              onCampaignMetaSubmit={onCampaignSubmit}
              onBackButtonClick={onBackButtonClick}
            />
          </Route>
        </Switch>
      </Box>
    </div>
  );
}


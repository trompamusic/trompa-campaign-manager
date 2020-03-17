import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import AppbarTop from '../AppbarTop/AppbarTop';
import AppbarBottom from '../AppbarBottom/AppbarBottom';
import NicknameMenuContainer from '../../containers/NicknameMenuContainer/NicknameMenuContainer';
import styles from './ActiveTask.styles';

const useStyles = makeStyles(styles);

export default function ActiveTask ({ 
  identifier, 
  loading, 
  noTasks, 
  url, 
  campaignIdentifier, 
  onNextTaskButtonClick,
  name, 
  handleNotification,
}) {
  const { t }   = useTranslation('task');
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop type={name} hasContextNavigation>
        <NicknameMenuContainer campaignIdentifier={campaignIdentifier} />
      </AppbarTop>
      <iframe
        src={url && url.replace('{identifier}', identifier)}
        className={classes.iframe}
        name="task-iframe"
        title={t('task')}
      />
      <AppbarBottom>
        {loading && (
          <Button variant="contained" color="primary" disabled>
            {t('loading')}
          </Button>
        )}
        {noTasks && (
          <Button variant="contained" disabled>
            {t('no_tasks_left')}
          </Button>
        )}
        {!loading && !noTasks && (
          <Button 
            onClick={() => { 
              onNextTaskButtonClick();
              handleNotification('success', t('notifications:thank_you_for_contributing'));
            }} 
            variant="contained" 
            color="primary"
          >
            {t('next_task')}
          </Button>
        )}
      </AppbarBottom>
    </React.Fragment>
  );
}

ActiveTask.propTypes = {
  loading              : PropTypes.bool,
  noTasks              : PropTypes.bool,
  name                 : PropTypes.string,
  url                  : PropTypes.string,
  campaignIdentifier   : PropTypes.string,
  onNextTaskButtonClick: PropTypes.func,
  handleNotification   : PropTypes.func,
};

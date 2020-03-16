import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography/Typography';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import AppbarTop from '../AppbarTop/AppbarTop';
import AppbarBottom from '../AppbarBottom/AppbarBottom';
import images from '../../theme/images';
import Form from '../Form/Form';
import styles from './WhoAreYou.styles';

const useStyles = makeStyles(styles);

export default function WhoAreYou ({ 
  campaignIdentifier,
  initialFormValues,
  onSubmit, 
  submitting, 
  error,
  nicknames,
  ...rest 
}) {
  const { t, i18n } = useTranslation('whoAreYou');
  const classes     = useStyles();

  const renderNicknameCheck = (chosenNickname, nicknames) => {
    if (nicknames && nicknames.contains(chosenNickname)) {
      return (
        <div className={classes.nicknameTaken}>
          <PersonIcon className={classes.missingPersonIcon} />
          <Typography className={classes.warning}>
            {t('nickname_taken_warning')}
          </Typography>
        </div>
      );
    }

    return null;
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        ...initialFormValues,
        language: i18n.language,
      }}
      errors={error}
    >
      {({ values, handleChange, handleSubmit, handleBlur }) => (
        <React.Fragment>
          <AppbarTop type="General task" campaign="Test2" hasContextNavigation />
          <div className={classes.root}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <img className={classes.person} src={images.personTrumpetStandingLeft} alt="" />
              <div className={classes.content}>
                <Typography className={classes.goal} variant="h1">
                  {t('goal')}
                </Typography>
                <Typography className={classes.body} variant="body1" paragraph>
                  {`${t('creative_commons')} `}
                  <a 
                    href="https://creativecommons.org/licenses/by/4.0/legalcode" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('creative_commons_link')}
                  </a>
                </Typography>
                <Typography className={classes.body} variant="body1" paragraph>
                  {t('explanation')}
                </Typography>
                <form className={classes.fullWidth} id="nickname-form" onSubmit={handleSubmit}>
                  <TextField
                    className={classes.fullWidth} 
                    id="user-nickname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="nickname"
                    value={values.nickname}
                    placeholder={t('nickname_input.placeholder')}
                    label={t('nickname_input.label')}
                    variant="filled"
                  />            
                </form>
                <Typography className={classes.tip}>
                  {t('nickname_tip')}
                </Typography>
                {renderNicknameCheck(values.nickname, nicknames)}
              </div>
              <img className={classes.person} src={images.personStandingRight} alt="" />
            </div>
          </div>
          <AppbarBottom>
            <Button
              type={"submit"} 
              form={"nickname-form"} 
              variant="contained" 
              color="primary"
            >
              {t('agree_and_continue')}
            </Button>
          </AppbarBottom>
        </React.Fragment>
      )}
    </Form>    
  );
}

WhoAreYou.propTypes = {
  campaignIdentifier: PropTypes.string,
  initialFormValues : PropTypes.object,
  onSubmit          : PropTypes.func, 
  submitting        : PropTypes.bool, 
  error             : PropTypes.object,
};

WhoAreYou.defaultProps = {};

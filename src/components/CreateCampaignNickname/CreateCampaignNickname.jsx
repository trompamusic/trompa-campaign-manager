import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import images from '../../theme/images';
import Form from '../Form/Form';
import styles from './CreateCampaignNickname.styles';

const useStyles = makeStyles(styles);

export default function CreateCampaignNickname ({ initialFormValues, onSubmit, onBackButtonClick }) {
  const { t }   = useTranslation('whoAreYou');
  const classes = useStyles();

  return (
    <Form onSubmit={onSubmit} initialValues={{ ...initialFormValues }}>
      {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
        <div className={classes.root}>
          <div className={classes.container}>
            <img className={classes.person} src={images.personTrumpetStandingLeft} alt={t('person')} />
            <div className={classes.content}>
              <Typography className={classes.goal} variant="h1">
                {t('goal')}
              </Typography>
              <div>
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
                <form id="nickname-form" onSubmit={handleSubmit}>
                  <Typography className={classes.inputHeader} variant="body1">
                    {t('nickname_input.label')}
                  </Typography>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="nickname"
                    value={values.nickname}
                    placeholder={t('nickname_input.placeholder')}
                    label={t('nickname_input.label')}
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    fullWidth
                  />
                  <Typography className={classes.tip}>
                    {t('nickname_tip')}
                  </Typography>
                  <div className={classes.buttons}>
                    <Button aria-label={t('back')} onClick={onBackButtonClick} variant="text">
                      {t('back')}
                    </Button>
                    <Button
                      type="submit"
                      form="nickname-form"
                      variant="contained"
                      color="primary"
                      aria-label={t('agree_and_continue')}
                      disabled={isSubmitting}
                    >
                      {t('agree_and_continue')}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <img className={classes.person} src={images.personStandingRight} alt={t('person')} />
          </div>
        </div>
      )}
    </Form>
  );
}

CreateCampaignNickname.propTypes = {
  initialFormValues: PropTypes.object,
  onSubmit         : PropTypes.func,
  onBackButtonClick: PropTypes.func,
};

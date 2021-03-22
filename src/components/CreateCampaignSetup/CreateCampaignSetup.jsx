import React from 'react';
import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TodayIcon from '@material-ui/icons/Today';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import images from '../../theme/images';
import Form from '../Form/Form';
import styles from './CreateCampaignSetup.styles';

const useStyles = makeStyles(styles);

export default function CreateCampaignSetup ({ initialFormValues, onSubmit, onBackButtonClick }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Form onSubmit={onSubmit} initialValues={{ ...initialFormValues }}>
        {({ values, handleChange, handleSubmit, handleBlur, setFieldValue, setFieldTouched, isSubmitting }) => (
          <div className={classes.root}>
            <div className={classes.container}>
              <img className={classes.person} src={images.personWithBass} alt={t('person')} />
              <div className={classes.content}>
                <Typography className={classes.header} variant="h1">
                  {t('setup.header')}
                </Typography>
                <form className={classes.form} id="campaign-meta-form" onSubmit={handleSubmit}>
                  <div className={classes.inputItem}>
                    <Typography className={classes.inputHeader} variant="body1">
                      {t('setup.give_catchy_title')}
                    </Typography>
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="campaignTitle"
                      value={values.campaignTitle}
                      label={t('setup.campaign_title')}
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      fullWidth
                      required
                    />
                  </div>
                  <div className={classes.inputItem}>
                    <Typography className={classes.inputHeader} variant="body1">
                      {t('setup.why_want_to_improve')}
                    </Typography>
                    <TextField
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="campaignDescription"
                      value={values.campaignDescription}
                      label={t('setup.description')}
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      rows={4}
                      fullWidth
                      multiline
                      required
                    />
                  </div>
                  <div className={classes.inputItem}>
                    <Typography className={classes.inputHeader} variant="body1">
                      {t('setup.when_need_it')}
                    </Typography>
                    <DateTimePicker
                      ampm={false}
                      label={t('setup.deadline')}
                      name="campaignDeadline"
                      value={values.campaignDeadline}
                      onChange={value => setFieldValue("campaignDeadline", value)}
                      onBlur={value => setFieldTouched("campaignDeadline", true)}
                      format="MMMM DD HH:mm"
                      inputVariant="filled"
                      InputProps={{
                        disableUnderline: true,
                        endAdornment    : (
                          <InputAdornment position="end">
                            <IconButton>
                              <TodayIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                      autoOk
                      hideTabs
                    />
                  </div>
                  <div className={classes.buttons}>
                    <Button aria-label={t('back')} onClick={onBackButtonClick} variant="text">
                      {t('back')}
                    </Button>
                    <Button
                      type="submit"
                      form="campaign-meta-form"
                      variant="contained"
                      color="primary"
                      aria-label={t('setup.setup_my_campaign')} 
                      disabled={isSubmitting}
                    >
                      {t('setup.setup_my_campaign')}
                    </Button>
                  </div>
                </form>
              </div>
              <img className={classes.person} src={images.personTrumpetStandingRight} alt={t('person')} />
            </div>
          </div>
        )}
      </Form>
    </MuiPickersUtilsProvider>
  );
}

CreateCampaignSetup.propTypes = {
  initialFormValues: PropTypes.object,
  onSubmit         : PropTypes.func,
  onBackButtonClick: PropTypes.func,
};


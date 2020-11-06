import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography/Typography';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField/TextField';
import AppbarBottom from '../AppbarBottom/AppbarBottom';
import images from '../../theme/images';
import Form from '../Form/Form';
import styles from './WhoAreYou.styles';

const useStyles = makeStyles(styles);

export default function WhoAreYou ({ initialFormValues, onSubmit }) {
  const { t, i18n } = useTranslation('whoAreYou');
  const classes     = useStyles();

  return (
    <Form onSubmit={onSubmit} initialValues={{ language: i18n.language, ...initialFormValues }}>
      {({ values, handleChange, handleSubmit, handleBlur }) => (
        <React.Fragment>
          <div className={classes.root}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
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
                    <TextField
                      id="user-nickname"
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
                  </form>
                </div>
              </div>
              <img className={classes.person} src={images.personStandingRight} alt={t('person')} />
            </div>
          </div>
          <AppbarBottom>
            <Button
              type="submit"
              form="nickname-form"
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
  initialFormValues: PropTypes.object,
  onSubmit         : PropTypes.func,
};

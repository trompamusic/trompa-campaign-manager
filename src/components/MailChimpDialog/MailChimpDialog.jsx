import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styles from './MailChimpDialog.styles';

const useStyles = makeStyles(styles);

export default function MailChimpDialog ({ open, onClose, audience }) {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Dialog classes={{ paperWidthSm: classes.root }} onClose={onClose} open={open}>
      <DialogTitle disableTypography>
        <IconButton className={classes.closeButton} aria-label={t('common:close')} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Typography variant="h2">
          {t('start_campaign')}
        </Typography>
        <Typography>
          {t('mail_chimp_dialog.paragraph')}
        </Typography>
        <form 
          action="https://trompamusic.us4.list-manage.com/subscribe/post?u=7c60dbc6ba7c06709a4145899&amp;id=e85d4ca8dc"
          method="post" 
          target="_blank" 
          onSubmit={onClose}
        >  
          <div className={classes.indicatesRequired}>
            <span className={classes.asterisk}>*</span>{t('mail_chimp_dialog.required')}
          </div>
          <div className={classes.mcFieldGroup}>
            <label htmlFor="mce-EMAIL">
              {t('mail_chimp_dialog.email')} <span className={classes.asterisk}>*</span>
            </label>
            <input type="email" name="EMAIL" id="mce-EMAIL" />
          </div>
          <div className={classes.mcFieldGroup}>
            <label htmlFor="mce-FNAME">{t('mail_chimp_dialog.first_name')}</label>
            <input type="text" name="FNAME" id="mce-FNAME" />
          </div>
          <div className={classes.mcFieldGroup}>
            <label htmlFor="mce-LNAME">{t('mail_chimp_dialog.last_name')}</label>
            <input type="text" name="LNAME" id="mce-LNAME" />
          </div>
          <div className={classes.mcFieldGroup}>
            <label htmlFor="mce-MMERGE6">{t('mail_chimp_dialog.which_work')}</label>
            <input type="text" name="MMERGE6" id="mce-MMERGE6" />
          </div>
          <div className={classes.submit}>
            <input type="submit" value={t('mail_chimp_dialog.subscribe')} name="subscribe" />
          </div>
          <div class="mc-field-group input-group" style={{ display: 'none' }}>
            <strong>Audiences </strong>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="1"
                  name="group[68895][1]"
                  id="mce-group[68895]-68895-0"
                  checked={audience === 'contributor'}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  value="2"
                  name="group[68895][2]"
                  id="mce-group[68895]-68895-1"
                  checked={audience === 'campaignLead'}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  value="4"
                  name="group[68895][4]"
                  id="mce-group[68895]-68895-2"
                  checked={audience === 'general'}
                />
              </li>
            </ul>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

MailChimpDialog.propTypes = {
  open    : PropTypes.bool,
  onClose : PropTypes.func,
  audience: PropTypes.string,
};

MailChimpDialog.defaultProps = {
  open: false,
};

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

export default function MailChimpDialog ({ open, onClose, title, paragraph, formTranslations: { email, firstName, lastName, required, subscribe, whichWork } }) {
  const { t }   = useTranslation('common');
  const classes = useStyles();

  const mailChimpSignupForm = `
  <!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
  <form action="https://trompamusic.us4.list-manage.com/subscribe/post?u=7c60dbc6ba7c06709a4145899&amp;id=e85d4ca8dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
  <div class="indicates-required"><span class="asterisk">*</span> ${required}</div>
  <div class="mc-field-group">
    <label for="mce-EMAIL">${email}  <span class="asterisk">*</span>
  </label>
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  </div>
  <div class="mc-field-group">
    <label for="mce-FNAME">${firstName} </label>
    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
  </div>
  <div class="mc-field-group">
    <label for="mce-LNAME">${lastName} </label>
    <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
  </div>
  <div class="mc-field-group">
    <label for="mce-MMERGE6">${whichWork} </label>
    <input type="text" value="" name="MMERGE6" class="" id="mce-MMERGE6">
  </div>
    <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7c60dbc6ba7c06709a4145899_e85d4ca8dc" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value=${subscribe} name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='MMERGE6';ftypes[6]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  <!--End mc_embed_signup-->
`;

  return (
    <Dialog classes={{ paperWidthSm: classes.root }} onClose={onClose} open={open}>
      <DialogTitle disableTypography>
        <IconButton className={classes.closeButton} aria-label={t('close')} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Typography variant="h2">
          {title}
        </Typography>
        <Typography>
          {paragraph}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: mailChimpSignupForm }} />
      </DialogContent>
    </Dialog>
  );
}

MailChimpDialog.propTypes = {
  open            : PropTypes.bool,
  onClose         : PropTypes.func,
  title           : PropTypes.string,
  paragraph       : PropTypes.string,
  formTranslations: PropTypes.object,
};

MailChimpDialog.defaultProps = {
  open: false,
};

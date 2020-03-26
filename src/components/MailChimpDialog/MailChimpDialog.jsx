import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './MailChimpDialog.styles';

const useStyles = makeStyles(styles);

export default function MailChimpDialog ({
  open,
  onClose,
  formLink,
}) {
  const { t }   = useTranslation('home');
  const classes = useStyles();

  return (
    <Dialog classes={{ paperWidthSm: classes.root }} onClose={onClose} open={open}>
      <DialogTitle disableTypography>
        <IconButton className={classes.closeButton} aria-label={t('common:close')} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ReactTypeformEmbed url={formLink} onSubmit={onClose} />
      </DialogContent>
    </Dialog>
  );
}

MailChimpDialog.propTypes = {
  open    : PropTypes.bool,
  onClose : PropTypes.func,
  formLink: PropTypes.string,
};

MailChimpDialog.defaultProps = {
  open: false,
};

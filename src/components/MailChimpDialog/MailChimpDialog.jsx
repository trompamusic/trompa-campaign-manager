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

export default function MailChimpDialog ({ open, onClose, title, paragraph }) {
  const { t }   = useTranslation('common');
  const classes = useStyles();

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
        <Typography paragraph>
          {paragraph}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

MailChimpDialog.propTypes = {
  open     : PropTypes.bool,
  onClose  : PropTypes.func,
  title    : PropTypes.string,
  paragraph: PropTypes.string,
};

MailChimpDialog.defaultProps = {
  open: false,
};

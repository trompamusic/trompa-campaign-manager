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
import images from '../../theme/images';
import CopyAndShareRow from '../CopyAndShareRow/CopyAndShareRow';
import styles from './ShareDialog.styles';

const useStyles = makeStyles(styles);

export default function ShareDialog ({ open, onClose, modalContent: { title, paragraph }, campaignInfo }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <Dialog classes={{ paperWidthSm: classes.root }} onClose={onClose} open={open}>
      <DialogTitle disableTypography>
        <IconButton className={classes.closeButton} aria-label={t('close')} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <img className={classes.image} src={images.everyCollaboratorNoBg} alt="" />
        <Typography variant="h2">
          {title}
        </Typography>
        <Typography paragraph>
          {paragraph}
        </Typography>
        <CopyAndShareRow campaignInfo={campaignInfo} />
      </DialogContent>
    </Dialog>
  );
}

ShareDialog.propTypes = {
  open        : PropTypes.bool,
  onClose     : PropTypes.func,
  modalContent: PropTypes.shape({
    title    : PropTypes.string,
    paragraph: PropTypes.string,
  }),
  campaignInfo: PropTypes.object,
};

ShareDialog.defaultProps = {
  open: false,
};

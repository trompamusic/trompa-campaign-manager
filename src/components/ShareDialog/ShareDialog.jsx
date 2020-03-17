import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import images from '../../theme/images';
import CopyField from '../CopyField/CopyField';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import styles from './ShareDialog.styles';

const useStyles = makeStyles(styles);

export default function ShareDialog ({ open, onClose, title, paragraph }) {
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
        <img className={classes.image} src={images.everyCollaboratorNoBg} alt="" />
        <Typography variant="h2">
          {title}
        </Typography>
        <Typography paragraph>
          {paragraph}
        </Typography>
        <Grid
          className={classes.copyAndShareRow}
          direction="row"
          justify="flex-start"
          alignItems="center"
          container
        >
          <Grid sm={8} item>
            <CopyField defaultValue="https://" fullWidth />
          </Grid>
          <Grid className={classes.sharingIcons} sm={4} item>
            <FacebookIcon />
            <TwitterIcon />
            <EmailIcon />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ShareDialog.propTypes = {
  open     : PropTypes.bool,
  onClose  : PropTypes.func,
  title    : PropTypes.string,
  paragraph: PropTypes.string,
};

ShareDialog.defaultProps = {
  open: false,
};

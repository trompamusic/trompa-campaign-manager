import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import CopyField from '../CopyField/CopyField';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import styles from './CopyAndShareRow.styles';

const useStyles = makeStyles(styles);

export default function CopyAndShareRow ({ className, campaignInfo: { campaignTitle, campaignUrl } }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  const shareContent = {
    twitter: t('share_dialog.content.twitter') + campaignUrl,
    mail   : { subject: campaignTitle, body: t('share_dialog.content.mail') + campaignUrl },
  };

  return (
    <Grid
      className={classNames(classes.copyAndShareRow, className)}
      direction="row"
      justify="flex-start"
      alignItems="center"
      container
    >
      <Grid xs={12} sm={9} item>
        <CopyField defaultValue={campaignUrl} fullWidth />
      </Grid>
      <Grid className={classes.sharingIcons} sm={3} item>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${campaignUrl}`}>
          <FacebookIcon aria-label="Facebook" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${shareContent.twitter}`}>
          <TwitterIcon aria-label="Twitter" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`mailto:?subject=${shareContent.mail.subject}&body=${shareContent.mail.body}`}>
          <EmailIcon aria-label="Mail" />
        </a>
      </Grid>
    </Grid>
  );
}

CopyAndShareRow.propTypes = {
  campaignInfo: PropTypes.shape({
    campaignOwner: PropTypes.string,
    campaignTitle: PropTypes.string,
    campaignUrl  : PropTypes.string,
    scoreTitle   : PropTypes.string,
    scoreComment : PropTypes.string,
  }),
};

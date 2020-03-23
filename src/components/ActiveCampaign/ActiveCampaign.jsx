import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FileMusicIcon from '../Icons/FileMusicIcon';
import MusicProcessIcon from '../Icons/MusicProcessIcon';
import ProgressCloseIcon from '../Icons/ProgressCloseIcon';
import CopyField from '../CopyField/CopyField';
import styles from './ActiveCampaign.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaign({
  campaignIdentifier,
  author,
  title,
  description,
  scoreTitle,
  scoreSource,
}) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.section}>
        <Typography variant="caption">
          <span className={classes.author}>{author}</span> has started this campaign. Help us to improve this score.
        </Typography>
        <Typography variant="h1">
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        {scoreTitle ? (
          <div className={classes.work}>
            <a className={classes.workLink} href={scoreSource} target="_blank" rel="noopener noreferrer">
              <FileMusicIcon className={classes.workMusicIcon} />
              <DownloadIcon className={classes.workDownloadIcon} />
            </a>
            <div>
              <Typography variant="h3">
                {scoreTitle}
              </Typography>
              <Typography variant="body1">
                Complete Score
              </Typography>
            </div>
          </div>
        ) : null }
        <Grid spacing={1} classes={{ container: classes.actions }} container>
          <Grid xs={12} sm={'auto'} item>
            <Button
              component={Link}
              to={`/campaign/${campaignIdentifier}/task`}
              startIcon={<MusicProcessIcon />}
              variant="contained"
              color="primary"
            >
              {t('help_this_campaign')}
            </Button>
          </Grid>
          <Grid xs={12} sm={'auto'} item>
            <Button startIcon={<EmailIcon />} variant="text">
              {t('subscribe_for_updates')}
            </Button>
          </Grid>
          <Grid xs={12} sm={'auto'} item>
            <Button startIcon={<ProgressCloseIcon />} variant="text">
              {t('close_campaign')}
            </Button>
          </Grid>
        </Grid>
        <Typography variant="caption">
          {t('share_this_campaign')}
        </Typography>
        <CopyField defaultValue={window.location.href} />
      </div>
      <Divider />
      <div className={classes.section}>
        <Typography variant="h2">
          Enhance classical sheet music, together
        </Typography>
        <Grid spacing={1} container>
          <Grid xs={12} sm={6} item>
            <Typography variant="body1" paragraph>
              <a href="https://trompamusic.eu/">Trompa</a> is developing powerful and advanced tools for musicians. by combining computing power with the knowledge of the best. Whether you’re singing in a choir, playing in an ensemble or conducting an orchestra, Trompa explores new ways to discover, rehearse and perform classical music.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum eveniet accusantium ipsum excepturi reiciendis mollitia? Assumenda soluta doloremque fugit! Repellendus accusantium aliquid aperiam corporis obcaecati quia praesentium minima architecto.
            </Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary">
          {t('start_your_own_campaign')}
        </Button>
      </div>
    </React.Fragment>
  );
}

ActiveCampaign.propTypes = {
  campaignIdentifier: PropTypes.string,
  author            : PropTypes.string,
  title             : PropTypes.string,
  description       : PropTypes.string,
  scoreTitle        : PropTypes.string,
  scoreSource       : PropTypes.string,
};

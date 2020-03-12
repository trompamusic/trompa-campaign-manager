import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import AppbarTop from '../AppbarTop/AppbarTop';
import FileMusicIcon from '../Icons/FileMusicIcon';
import MusicProcessIcon from '../Icons/MusicProcessIcon';
import ProgressCloseIcon from '../Icons/ProgressCloseIcon';
import styles from './Campaign.styles';

const useStyles = makeStyles(styles);

export default function Campaign ({ campaignIdentifier }) {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop />
      <div className={classes.section}>
        <Typography variant="caption">
        &lt;campaign_leader&gt; has started this campaign. Help us to improve this score.
        </Typography>
        <Typography variant="h1">
        Summer concert: Mahler's 6th in the beer garden.
        </Typography>
        <Typography variant="body1" paragraph>
        Let's work together on bringing Mahler's 6th to our yearly outdoor performance. This version would be perfect, but the quality of the PDF is really insufficient. Can you all help cleaning it up? We've got five weeks to do it, people!
        </Typography>
        <div className={classes.work}>
          <div className={classes.fileMusicIcon}>
            <FileMusicIcon />
          </div>
          <div>
            <Typography variant="h3">
            Mahler: Symphony No. 6 in A minor
            </Typography>
            <Typography variant="body1">
            Complete Score
            </Typography>
          </div>
        </div>
        <Grid spacing={1} classes={{ container: classes.actions }} container>
          <Grid xs={12} sm={'auto'} item>
            <Button component={Link} to={`/campaign/${campaignIdentifier}/whoAreYou`} startIcon={<MusicProcessIcon />} variant="contained" color="primary">
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
        <Typography variant="caption" >
          {t('share_this_campaign')}
        </Typography>
        <TextField
          classes={{ root: classes.textField }}
          size="small"
          defaultValue="https://"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes         : {
              input           : classes.shareCampaignInput,
              adornedEnd      : classes.shareCampaignAdornedEnd,
              inputMarginDense: classes.shareCampaignInputMarginDense,
            },
            endAdornment: (
              <span className={classes.copy}>{t('copy')}</span>
            ),
          }}
        />
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

Campaign.propTypes = {
  campaignIdentifier: PropTypes.string,
};

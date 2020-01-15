import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import AppbarTop from '../AppbarTop/AppbarTop';
import FileMusicIcon from '../Icons/FileMusicIcon';
import MusicProcessIcon from '../Icons/MusicProcessIcon';
import ProgressCloseIcon from '../Icons/ProgressCloseIcon';
import styles from './Campaign.styles';

const useStyles = makeStyles(styles);

export default function Campaign () {
  const { t }   = useTranslation('campaign');
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppbarTop />
      <div className={classes.section}>
        <Typography variant="h1">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum eveniet accusantium ipsum excepturi reiciendis mollitia? Assumenda soluta doloremque fugit! Repellendus accusantium aliquid aperiam corporis obcaecati quia praesentium minima architecto.
        </Typography>
        <div className={classes.work}>
          <div className={classes.fileMusicIcon}>
            <FileMusicIcon />
          </div>
          <div>
            <Typography variant="h3">
             Lorem, ipsum dolor sit amet.
            </Typography>
            <Typography variant="body1">
              Lorem, ipsum.
            </Typography>
          </div>
        </div>
        <Grid spacing={1} classes={{ container: classes.actions }} container>
          <Grid xs={12} sm={'auto'} item>
            <Button startIcon={<MusicProcessIcon />} variant="contained" color="primary">
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
            Lorem, ipsum dolor sit amet consectetur.
        </Typography>
        <Grid spacing={1} container>
          <Grid xs={12} sm={6} item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum eveniet accusantium ipsum excepturi reiciendis mollitia? Assumenda soluta doloremque fugit! Repellendus accusantium aliquid aperiam corporis obcaecati quia praesentium minima architecto.
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

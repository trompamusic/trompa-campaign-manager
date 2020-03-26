import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './Footer.styles';

const useStyles = makeStyles(styles);

export default function Footer () {
  const { t }   = useTranslation('footer');
  const classes = useStyles();

  return (
    <footer>
      <Grid
        className={classes.footer}
        direction="row"
        justify="center"
        alignItems="center"
        container
      >
        <Grid xs={12} item>
          <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/">
            <img className={classes.logo} src={images.logoAsSvg} alt={t('trompa_logo')} />
          </a>
        </Grid>
        <Grid xs={12} item>
          <Grid
            className={classes.linksRow}
            direction="row"
            justify="center"
            alignItems="flex-start"
            container
          >
            <Grid xs={12} sm={4} item>
              <Typography variant="h3">
                {t('about')}
              </Typography>

              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} md={6} item>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/about">{t('about_us')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/partners">{t('partners')}</a>
                </Grid>
                <Grid className={classes.linksBlock} xs={12} md={6} item>
                  <a target="_blank" rel="noopener noreferrer" href="https://videodock.atlassian.net/servicedesk/customer/portal/6">{t('support')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/news">{t('news')}</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={4} item>
              <Typography variant="h3">
                {t('use_cases')}
              </Typography>
              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/music-scholars">{t('music_scholars')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/choir-singers">{t('choir_singers')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/content-owners">{t('content_owners')}</a>
                </Grid>
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/instrumental-players">{t('instrumental_players')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/music-enthusiasts">{t('music_enthusiasts')}</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.linksLastColumn} xs={12} sm={4} item>
              <Typography variant="h3">
                {t('get_involved')}
              </Typography>
              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <a target="_blank" rel="noopener noreferrer" href="https://trompamusic.eu/newsletter">{t('newsletter')}</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TrompaMusic">{t('twitter')}</a>
                </Grid>
                <Grid className={classes.linksBlock} xs={false} lg={6} item />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.euBlock}
            container
          >
            <Grid item>
              <img className={classes.euFlag} src={images.euFlag} alt={t('eu_flag')} />
            </Grid>
            <Grid sm={10} item>
              <Typography >
                {t('eu_flag_paragraph')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

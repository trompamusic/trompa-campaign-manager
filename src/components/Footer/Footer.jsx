import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import images from '../../theme/images';
import styles from './Footer.styles';

const useStyles = makeStyles(styles);

export default function Footer () {
  const { t }   = useTranslation('home');
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
          <img className={classes.logo} src={images.logo} alt={t('trompa_logo')} />
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
                {t('footer.about')}
              </Typography>

              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} md={6} item>
                  <Link to="/">{t('footer.about_us')}</Link>
                  <Link to="/">{t('footer.partners')}</Link>
                </Grid>
                <Grid className={classes.linksBlock} xs={12} md={6} item>
                  <Link to="/">{t('footer.support')}</Link>
                  <Link to="/">{t('footer.news')}</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={4} item>
              <Typography variant="h3">
                {t('footer.user_cases')}
              </Typography>
              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <Link to="/">{t('footer.music_scolars')}</Link>
                  <Link to="/">{t('footer.choir_singers')}</Link>
                  <Link to="/">{t('footer.content_owners')}</Link>
                </Grid>
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <Link to="/">{t('footer.instrumental_players')}</Link>
                  <Link to="/">{t('footer.music_enthusiasts')}</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.linksLastColumn} xs={12} sm={4} item>
              <Typography variant="h3">
                {t('footer.get_involved')}
              </Typography>
              <Grid
                justify="flex-start"
                alignItems="flex-start"
                container
              >
                <Grid className={classes.linksBlock} xs={12} lg={6} item>
                  <Link to="/"> {t('footer.newsletter')}</Link>
                  <Link to="/"> {t('footer.twitter')}</Link>
                </Grid>
                <Grid className={classes.linksBlock} xs={false} lg={6} item />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.euBlock}
            container
          >
            <Grid item>
              <img className={classes.euFlag} src={images.euFlag} alt={t('eu_flag')} />
            </Grid>
            <Grid sm={9} item>
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

Footer.propTypes = {};

Footer.defaultProps = {};

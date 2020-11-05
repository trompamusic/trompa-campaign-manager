import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styles from './ActiveCampaignTwoSections.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaignTwoSections ({ digitalDocument, musicComposition, composer }) {
  const classes = useStyles();
  const { t }   = useTranslation('campaign');

  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="center"
      container
    >
      <Grid className={classNames(classes.twoSections, classes.pieceInfo)} xs={12} md={6} item>
        <section>
          {musicComposition ? (
            <React.Fragment>
              <Typography variant="h2">
                {musicComposition?.title}
              </Typography>
              <Typography gutterBottom>
                {musicComposition?.description}
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h2">
              {digitalDocument?.title}
            </Typography>
          )}
          <Typography variant="h2">
            {t('complete_score')}
          </Typography>
          <a className={classes.moreLink} target="_blank" rel="noopener noreferrer" href={digitalDocument?.source}>
            <OpenInNewIcon />
            {t('download')}
          </a>
        </section>
      </Grid>
      <Grid className={classNames(classes.twoSections, classes.pieceAuthor)} xs={12} md={6} item>
        <section>
          {composer ? (
            <React.Fragment>
              {composer.image && (
                <img className={classes.mahlerHeadshot} src={composer.image} alt="" />
              )}
              <Typography variant="h2">
                {composer.name}
              </Typography>
              {composer.birthDate.formatted ? (
                <Typography gutterBottom>
                  ({moment(composer.birthDate.formatted).format('YYYY')} - {moment(composer.deathDate.formatted).format('YYYY')})
                </Typography>
              ) : null}
              <Typography gutterBottom>
                {composer.description}
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h2">
              {t('unknown_composer')}
            </Typography>
          )}
        </section>
      </Grid>
    </Grid>
  );
}

ActiveCampaignTwoSections.propTypes = {
  campaign       : PropTypes.object,
  digitalDocument: PropTypes.object,
};

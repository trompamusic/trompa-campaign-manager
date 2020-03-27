import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import images from '../../theme/images';
import styles from './ActiveCampaignTwoSections.styles';

const useStyles = makeStyles(styles);

export default function ActiveCampaignTwoSections ({ campaign, digitalDocument }) {
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
          <Typography variant="h2">
            Mahler: Symphony No. 6 in A minor
          </Typography>
          <Typography gutterBottom>
            Mahler’s A-minor Sixth Symphony is a mythical piece. Mahler may or may not have subtitled it “Tragic” at some stage of its composition, and it could, possibly, contain music that consecrates and depicts his wife Alma. It may be “the first nihilist work in the history of music”, as conductor Wilhelm Furtwängler described it. Conductor and friend of Mahler’s Bruno Walter found the piece too expressively dark for him to conduct, since it “ends in hopelessness and the dark night of the soul”. Most significantly, it’s a work you are always told is dangerously, prophetically autobiographical, above all in its final fourth movement, that half-hour-long hallucinogenic, emotional nightmare-scape.
          </Typography>
          <Typography variant="h2">
          Complete Score
          </Typography>
          <a className={classes.moreLink} target="_blank" rel="noopener noreferrer" href={digitalDocument?.source}>
            <OpenInNewIcon />
            {t('download')}
          </a>
        </section>
      </Grid>
      <Grid className={classNames(classes.twoSections, classes.pieceAuthor)} xs={12} md={6} item>
        <section>
          <img className={classes.mahlerHeadshot} src={images.mahlerHeadshot} alt="" />
          <Typography variant="h2">
          Gustav Mahler
          </Typography>
          <Typography gutterBottom>
          (7 July 1860 — 18 May 1911)
          </Typography>
          <Typography gutterBottom>
          Gustav Mahler was an Austro-Bohemian Romantic composer, and one of the leading conductors of his generation. As a composer he acted as a bridge between the 19th century Austro-German tradition and the modernism of the early 20th century. While in his lifetime his status as a conductor was established beyond question, his own music gained wide popularity only after periods of relative neglect, which included a ban on its performance in much of Europe during the Nazi era. After 1945 his compositions were rediscovered by a new generation of listeners; Mahler then became one of the most frequently performed and recorded of all composers, a position he has sustained into the 21st century.
          </Typography>
        </section>
      </Grid>
    </Grid>
  );
}

ActiveCampaignTwoSections.propTypes = {
  campaign       : PropTypes.object,
  digitalDocument: PropTypes.object,
};

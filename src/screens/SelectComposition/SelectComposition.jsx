import React, { useState } from "react";
import * as PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Box, IconButton, Container, Dialog, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MultiModalComponent, { SearchConfig, searchTypes } from "trompa-multimodal-component";
import SelectCompositionComponent from "../../components/SelectComposition";
import SelectScoreModal from "../../components/SelectScoreModal";
import CreateDigitalDoc from "../../containers/CreateDigitalDoc";
import styles from './SelectComposition.styles';

const MODAL_NONE       = 0;
const MODAL_COMP       = 1;
const MODAL_SCORE      = 2;
const MODAL_SELECT_URL = 3;

const searchConfig = new SearchConfig({
  searchTypes: [searchTypes.MusicComposition],
});

const useStyles = makeStyles(styles);

export default function SelectComposition({ composition, score, onSetComposition, onSetScore, onBackButtonClick, onCompositionSubmit }) {
  const { t }             = useTranslation('selectComposition');
  const classes           = useStyles();
  const [modal, setModal] = useState(MODAL_NONE);

  const lazyQueryCallback                              = { onCompleted: data => onGqlLoaded(data), fetchPolicy: "no-cache" };
  const [getCompositionWithScores, { loading, error }] = useLazyQuery(GET_COMPOSITION_WITH_SCORES, lazyQueryCallback );

  /**
   * DATA
   * Recieve node (composition) from MMC, then trigger lazyQuery to get metadata + scores
   *
   * Todo: Get active campaigns of selected composition
   */
  const loadComposition = node => {
    setModal(MODAL_NONE);
    onSetScore();
    getCompositionWithScores({ variables: { identifier: node.identifier }, ...lazyQueryCallback });
  };
  const onGqlLoaded     = data => onSetComposition(data.MusicComposition?.[0]);

  /**
   * INTERNAL
   */
  const loadScore         = score => {
    onSetScore(score);
    setModal(MODAL_NONE);
  };

  const deselectBoth      = () => {
    onSetComposition();
    onSetScore();
  };

  if (loading) return <Box>{t('loading')}</Box>;
  if (error) console.log('Failed to load scores', error);

  return (
    <Container className={classes.root}>
      <SelectCompositionComponent
        composition={composition}
        score={score}
        onSelectCompositionClick={() => setModal(MODAL_COMP)}
        onDeselectCompositionClick={deselectBoth}
        onSelectScoreClick={() => setModal(MODAL_SCORE)}
        onDeselectScoreClick={() => onSetScore()}
        onBackButtonClick={onBackButtonClick}
        onNextButtonClick={onCompositionSubmit}
      />
      <Dialog
        className={classes.dialog}
        open={modal !== MODAL_NONE}
        onClose={e => setModal(MODAL_NONE)}
        maxWidth="lg"
        fullWidth
      >
        <Box className={classes.dialogBox}>
          <Typography variant="h1" className={classes.dialogHeader}>
            {modal === MODAL_COMP && t('select_composition')}
            {modal === MODAL_SCORE && t('select_score')}
          </Typography>
          <IconButton  className={classes.closeButton} onClick={() => setModal(MODAL_NONE)}>
            <CloseIcon />
          </IconButton>
          {modal === MODAL_COMP && (
            <MultiModalComponent
              config={searchConfig}
              onResultClick={node => loadComposition(node)}
            />
          )}
          {modal === MODAL_SCORE && (
            <SelectScoreModal
              composition={composition}
              onSelectFileClick={() => setModal(MODAL_SELECT_URL)}
              onLoadScore={node => loadScore(node)}
            />
          )}
          {modal === MODAL_SELECT_URL && (
            <CreateDigitalDoc musicCompositionId={composition?.identifier} onDigitalDocCreated={node => loadScore(node)} />
          )}
        </Box>
      </Dialog>
    </Container>
  );
}

SelectComposition.propTypes = {
  onBackButtonClick  : PropTypes.func,
  onCompositionSubmit: PropTypes.func,
  onSelectFileClick  : PropTypes.func,
};

export const GET_COMPOSITION_WITH_SCORES = gql`
  query GetMusicCompositionWithScores($identifier: ID!){
      MusicComposition(identifier: $identifier) {
      __typename
      identifier
      name
      workExample {
        ... on DigitalDocument {
          identifier
          contributor
          creator
          description
          format
          image
          language
          name
          publisher
          relation
          rights
          source
          subject
          title
        }
      }
    }
  }
`;

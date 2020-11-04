import { Box, Button, Container, Dialog, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { MultiModalComponent } from "trompa-multimodal-component";

import SelectCompositionComponent from "../../components/SelectComposition";
// import SelectScoreModal from "../../components/SelectScoreModal";
import styles from './SelectComposition.styles';

const MODAL_NONE  = 0;
const MODAL_COMP  = 1;
const MODAL_SCORE = 2;

const useStyles = makeStyles(styles);

export default function SelectComposition({ onBackButtonClick, onCompositionSubmit }) {
  const { t }                         = useTranslation('selectComposition');
  const classes                       = useStyles();
  const [composition, setComposition] = useState();
  const [score, setScore]             = useState();
  const [modal, setModal]             = useState(MODAL_NONE);

  const loadComposition   = node => {
    setComposition(node);
    setModal(MODAL_NONE);
    console.log('comp loaded: ', node);
  };
  const loadScore         = node => {
    setScore(node);
    setModal(MODAL_NONE);
    console.log('score loaded: ', node);
  };
  const onNextButtonClick = () => {
    onCompositionSubmit({ composition: composition, score: score });
  };

  return (
    <Container className={classes.root}>
      <SelectCompositionComponent 
        composition={composition} 
        score={score}
        onSelectCompClick={() => setModal(MODAL_COMP)} 
        onSelectScoreClick={() => setModal(MODAL_SCORE)}
      />
      <Box className={classes.formNav}>
        <Button onClick={e => onBackButtonClick()}>{t('back')}</Button>
        <Button disabled={!(composition && score) } onClick={e => onNextButtonClick()}>{t('next')}</Button>
      </Box>
      <Dialog
        open={modal !== MODAL_NONE} 
        onClose={e => setModal(MODAL_NONE)}
        maxWidth="lg"
        fullWidth
      >
        <Container hidden={modal !== MODAL_COMP}>
          <Typography variant="h2">{t('selectComposition')}</Typography>
          <Button onClick={e => loadComposition({})}>Load comp (Tmp button)</Button>
          {/* <MultiModalComponent 
            filterTypes={['MusicComposition']} 
            // filterTypes: ['Person', 'MusicComposition', 'DigitalDocument', 'VideoObject'],
            onResultClick={node => loadComposition(node)} 
          /> */}
        </Container>
        <Container hidden={modal !== MODAL_SCORE}>
          <Typography variant="h2">{t('selectScore')}</Typography>
          <Button onClick={e => loadScore({})}>Load score (Tmp button)</Button>
          {/* <SelectScoreModal onLoadScore={node => loadScore(node)}/> */}
        </Container>
      </Dialog>
    </Container>
  );
}
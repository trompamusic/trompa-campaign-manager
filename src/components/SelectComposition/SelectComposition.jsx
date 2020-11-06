import React  from 'react';
import * as PropTypes from 'prop-types';
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Cancel from "@material-ui/icons/Cancel";
import { useTranslation } from 'react-i18next';
import images from '../../theme/images';
import styles from './SelectComposition.styles';

const useStyles = makeStyles(styles);

export default function SelectComposition({ composition, score, onSelectCompositionClick, onDeselectCompositionClick, onSelectScoreClick, onDeselectScoreClick, onBackButtonClick, onNextButtonClick }) {
  const { t }   = useTranslation('selectComposition');
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.person} src={images.personWithBass} alt={t('person')} />
      <Container className={classes.main}>
        <Typography variant="h2">{t('title')}</Typography>
        <Box className={classes.part}>
          <Typography variant="body1">{t('start')}</Typography>
          <Box className={classes.inputBox}>
            <TextField 
              value={composition?.name || t('composition_default')}
              variant="filled" 
              disabled={!composition}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {!composition && <Button variant="contained" color="primary" onClick={onSelectCompositionClick}>{t('select')}</Button>}
                    {composition && <IconButton onClick={onDeselectCompositionClick}><Cancel /></IconButton> }
                  </InputAdornment>
                ) }
              }
              onChange={() => {}}
              fullWidth 
            />
          </Box>
          <Typography variant="body2">{t('note_compositions')}</Typography>
        </Box>
        <Box className={classes.part}>
          <Typography variant="body1">{t('score')}</Typography>
          <Box className={classes.inputBox}>
            <TextField 
              value={score? (score.title || score.name) : t('score_default')}
              // placeholder={t('score_default')}
              variant="filled" 
              disabled={!score}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {!score && <Button variant="contained" color="primary" disabled={!composition} onClick={onSelectScoreClick}>{t('select')}</Button>}
                    {score && <IconButton onClick={onDeselectScoreClick}><Cancel /></IconButton> }
                  </InputAdornment>
                ) }
              }
              fullWidth 
            />
          </Box>
        </Box>
        <Box className={classes.formNav}>
          <Button onClick={onBackButtonClick}>{t('back')}</Button>
          <Button variant="contained" color="primary" disabled={!(composition && score) } onClick={onNextButtonClick}>{t('next')}</Button>
        </Box>
      </Container>
      <img className={classes.person} src={images.personTrumpetStandingRight} alt={t('person')} />
    </Box>
  );
}

SelectComposition.propTypes = { 
  composition               : PropTypes.object,
  score                     : PropTypes.object, 
  onSelectCompositionClick  : PropTypes.func, 
  onDeselectCompositionClick: PropTypes.func, 
  onSelectScoreClick        : PropTypes.func,
  onDeselectScoreClick      : PropTypes.func,
}; 
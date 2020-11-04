import React  from 'react';
import { Box, Button, Container, InputAdornment, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import styles from './SelectComposition.styles';

const useStyles = makeStyles(styles);

export default function SelectComposition({ composition, score, onSelectCompClick, onSelectScoreClick }) {
  const { t }   = useTranslation('selectComposition');
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2">{t('title')}</Typography>
      <Box className={classes.part}>
        <Typography variant="body1">{t('start')}</Typography>
        <Box className={classes.inputBox}>
          <TextField 
            value={composition? composition.name : t('compositionDefault')}
            variant="filled" 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={e => onSelectCompClick()}>{t('select')}</Button>
                </InputAdornment>
              ) }
            }
            fullWidth 
            disabled 
          />
        </Box>
        <Typography variant="body2">{t('noteCompositions')}</Typography>
      </Box>
      <Box className={classes.part}>
        <Typography variant="body1">{t('score')}</Typography>
        <Box className={classes.inputBox}>
          <TextField 
            value={score? score.name : t('scoreDefault')}
            variant="filled" 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={e => onSelectScoreClick()}>{t('select')}</Button>
                </InputAdornment>
              ) }
            }
            fullWidth 
            disabled 
          />
        </Box>
      </Box>
    </Container>
  );
}
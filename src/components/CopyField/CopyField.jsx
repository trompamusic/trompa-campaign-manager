import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './CopyField.styles';

const useStyles = makeStyles(styles);

export default function CopyField ({ defaultValue, ...rest }) {
  const { t }   = useTranslation('common');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        classes={{ root: classes.copyField }}
        size="small"
        defaultValue={defaultValue}
        variant="filled"
        InputProps={{
          disableUnderline: true,
          classes         : {
            input           : classes.copyFieldInput,
            adornedEnd      : classes.copyFieldAdornedEnd,
            inputMarginDense: classes.copyFieldInputMarginDense,
          },
          endAdornment: (
            <span className={classes.copyText}>{t('copy')}</span>
          ),
        }}
        {...rest}
      />
    </div>
  );
}

CopyField.propTypes = {
  defaultValue: PropTypes.string,
};

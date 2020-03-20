import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './CopyField.styles';

const useStyles = makeStyles(styles);

export default function CopyField ({ defaultValue, ...rest }) {
  const { t }                   = useTranslation('common');
  const classes                 = useStyles();
  const [copyText, setCopyText] = useState(t('copy'));
  const inputRef                = useRef();

  const handleCopy = () => {
    inputRef.current.firstElementChild.select();
    document.execCommand("copy");

    setCopyText(t('copied'));
    setTimeout(() => setCopyText(t('copy')), 500);
  };

  return (
    <div className={classes.root}>
      <TextField
        classes={{ root: classes.copyField }}
        size="small"
        defaultValue={defaultValue}
        variant="filled"
        InputProps={{
          ref             : inputRef,
          disableUnderline: true,
          classes         : {
            input           : classes.copyFieldInput,
            adornedEnd      : classes.copyFieldAdornedEnd,
            inputMarginDense: classes.copyFieldInputMarginDense,
          },
          endAdornment: (
            <span onClick={handleCopy} className={classes.copyText}>
              {copyText}
            </span>
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

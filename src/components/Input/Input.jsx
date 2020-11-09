import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styles from './Input.styles';

const useStyles = makeStyles(styles);

export default function Input ({ value, label, name, endAdornment, children, placeholder, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.inputHeader} variant="body1">
        {label}
      </Typography>
      <TextField
        name={name}
        value={value}
        label={placeholder}
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment,
        }}
        fullWidth
        {...rest}
      >{children}
      </TextField>
    </div>
  );
}

Input.propTypes = {
  value: (PropTypes.number || PropTypes.string).isRequired,
  label: PropTypes.string,
};

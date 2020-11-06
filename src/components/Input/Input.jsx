import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styles from './Input.styles';

const useStyles = makeStyles(styles);

export default function Input ({ handleChange, handleBlur, value, label, name, endAdornment, children, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.inputHeader} variant="body1">
        {label}
      </Typography>
      <TextField
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={value}
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
  handleBlur  : PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  value       : (PropTypes.number || PropTypes.string).isRequired,
  label       : PropTypes.string,
};

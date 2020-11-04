import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './QontoStepIcon.styles';

const useStyles = makeStyles(styles);

export default function QontoStepIcon ({ active, completed }) {
  const classes               = useStyles();

  return (
    <div className={classes.root}>
      {active &&       
      <div
        className={classNames(classes.circle, {
          [classes.active]: active,
        })}
      />}
      { (!completed && !active) &&  <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active   : PropTypes.bool,
  completed: PropTypes.bool,
};

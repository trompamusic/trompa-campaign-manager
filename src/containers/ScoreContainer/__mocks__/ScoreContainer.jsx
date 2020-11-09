import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display        : 'flex',
    flexDirection  : 'column',
    justifyContent : 'center',
    width          : '100%',
    height         : '75%',
    backgroundColor: '#DDE3E9',
    padding        : 15,
    boxSizing      : 'border-box',
  },
  fullScreen: {
    height: '100%',
  },
  container: {
    display        : 'flex',
    justifyContent : 'center',
    '& .scorepane ': {
      display        : 'inline-block',
      backgroundColor: 'white',
    },
  },
  scoreControl: {
    display       : 'flex',
    justifyContent: 'center',
  },
};

class ScoreContainer extends Component {
  render() {
    const { classes, fullScreen } = this.props;

    return (
      <div className={classNames(classes.root,{ [classes.fullScreen]: fullScreen })} />
    );
  }
}

export default withStyles(styles)(ScoreContainer);
